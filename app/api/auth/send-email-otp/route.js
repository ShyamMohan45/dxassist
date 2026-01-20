import { db } from "@/lib/db"
import { saveEmailOTP } from "@/lib/otpStore"
import { sendOTPEmail } from "@/lib/mailer"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { email } = await req.json()

    const [[user]] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    )

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Email not registered" },
        { status: 404 }
      )
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString()

    saveEmailOTP(email, otp)
    await sendOTPEmail(email, otp)

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error("EMAIL OTP ERROR:", err)
    return NextResponse.json(
      { success: false, message: "Failed to send OTP" },
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
