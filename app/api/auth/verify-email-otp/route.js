import { db } from "@/lib/db"
import { verifyEmailOTP } from "@/lib/otpStore"
import { signToken } from "@/lib/auth"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { email, otp } = await req.json()

    const valid = verifyEmailOTP(email, otp)
    if (!valid) {
      return NextResponse.json(
        { success: false, message: "Invalid or expired OTP" },
        { status: 401 }
      )
    }

    const [[user]] = await db.query(
      "SELECT id, name, email FROM users WHERE email = ?",
      [email]
    )

    const token = signToken(user)

    const cookieStore = await cookies()
    cookieStore.set("auth", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    })

    return NextResponse.json({ success: true, user })

  } catch (err) {
    console.error("VERIFY EMAIL OTP ERROR:", err)
    return NextResponse.json(
      { success: false, message: "OTP verification failed" },
      { status: 500 }
    )
  }
}
