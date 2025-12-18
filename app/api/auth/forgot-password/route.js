import crypto from "crypto"
import { connectDB } from "@/lib/db"
import User from "@/models/User"
import nodemailer from "nodemailer"

export async function POST(req) {
  const { email } = await req.json()
  await connectDB()

  const user = await User.findOne({ email })
  if (!user) {
    return Response.json({ message: "User not found" }, { status: 404 })
  }

  const token = crypto.randomBytes(32).toString("hex")
  user.resetToken = token
  user.resetTokenExpiry = Date.now() + 3600000
  await user.save()

  const resetLink = `${process.env.NEXTAUTH_URL}/reset-password/${token}`

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  })

  await transporter.sendMail({
    to: email,
    subject: "Reset Password",
    html: `<a href="${resetLink}">Reset Password</a>`,
  })

  return Response.json({ message: "Reset email sent" })
}
