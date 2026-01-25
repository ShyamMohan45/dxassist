



import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req) {
  try {
    const { email } = await req.json()
    
    if (!email) {
      return NextResponse.json({ message: "Email required" }, { status: 400 })
    }

    console.log("📧 [OTP] Attempting to send OTP to:", email)

    
    const [users] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    )

    if (users.length === 0) {
      console.warn("⚠️ [OTP] Email not registered:", email)
      return NextResponse.json(
        { message: "Email not registered. Please sign up first." },
        { status: 404 }
      )
    }

    console.log("✅ [OTP] Email found in database")

   
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 min

   
    try {
      await db.query("DELETE FROM email_otps WHERE email = ?", [email])
      console.log("✅ [OTP] Deleted old OTPs")

      await db.query(
        "INSERT INTO email_otps (email, otp, expires_at) VALUES (?, ?, ?)",
        [email, otp, expiresAt]
      )
      console.log("✅ [OTP] OTP stored in database:", otp)
    } catch (dbErr) {
      console.error("❌ [OTP] Database error:", dbErr.message)
      throw new Error(`Database error: ${dbErr.message}`)
    }

    
    console.log("📨 [OTP] Configuring email transporter...")
    
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("EMAIL_USER or EMAIL_PASS not configured in .env.local")
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      logger: true,
      debug: true,
    })

   
    console.log("🚀 [OTP] Sending email via Gmail SMTP...")
    
    const info = await transporter.sendMail({
      from: `"DxAssist" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "🔐 Your DxAssist OTP Code",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #333;">Verify Your Email</h2>
          <p>Your OTP code is:</p>
          <div style="background-color: #f0f0f0; padding: 15px; border-radius: 5px; text-align: center; margin: 20px 0;">
            <h1 style="color: #2563eb; margin: 0; letter-spacing: 2px;">${otp}</h1>
          </div>
          <p style="color: #666; font-size: 14px;">⏱️ Valid for 10 minutes</p>
          <p style="color: #999; font-size: 12px;">If you didn't request this, please ignore this email.</p>
        </div>
      `,
      text: `Your OTP is ${otp}. Valid for 10 minutes.`,
    })

    console.log("✅ [OTP] Email sent successfully! Message ID:", info.messageId)

    return NextResponse.json({ 
      success: true, 
      message: "OTP sent successfully",
      debug: {
        email: email,
        otp: otp,
        expiresAt: expiresAt.toISOString(),
        messageId: info.messageId
      }
    })

  } catch (err) {
    console.error("❌ [OTP] ERROR:", err.message)
    console.error("❌ [OTP] Full error:", err)
    
    return NextResponse.json(
      { 
        message: "Failed to send OTP",
        error: err.message,
        details: process.env.NODE_ENV === "development" ? err.toString() : undefined
      },
      { status: 500 }
    )
  }
}




















// import { NextResponse } from "next/server"
// import nodemailer from "nodemailer"
// import crypto from "crypto"

// // in-memory store (OK for now, later move to DB/Redis)
// const otpStore = new Map()

// export async function POST(req) {
//   try {
//     const { email } = await req.json()

//     if (!email) {
//       return NextResponse.json(
//         { message: "Email is required" },
//         { status: 400 }
//       )
//     }

//     // generate 6-digit OTP
//     const otp = crypto.randomInt(100000, 999999).toString()
//     const expiresAt = Date.now() + 5 * 60 * 1000 // 5 minutes

//     otpStore.set(email, { otp, expiresAt })

//     
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false,
//       requireTLS: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     })

//     await transporter.sendMail({
//       from: `"DxAssist" <${process.env.EMAIL_USER}>`,
//       to: email,
//       subject: "Your DxAssist Verification Code",
//       html: `
//         <div style="font-family: Arial">
//           <h2>Your OTP Code</h2>
//           <p><b>${otp}</b></p>
//           <p>This code expires in 5 minutes.</p>
//         </div>
//       `,
//     })

//     console.log("EMAIL OTP:", email, otp)

//     return NextResponse.json({ success: true })

//   } catch (err) {
//     console.error("EMAIL OTP ERROR:", err)

//     return NextResponse.json(
//       { message: "Failed to send OTP" },
//       { status: 500 }
//     )
//   }
// }
