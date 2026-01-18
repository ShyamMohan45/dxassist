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
