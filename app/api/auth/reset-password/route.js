import bcrypt from "bcrypt"
import { connectDB } from "@/lib/db"
import User from "@/models/User"

export async function POST(req) {
  const { token, password } = await req.json()
  await connectDB()

  const user = await User.findOne({
    resetToken: token,
    resetTokenExpiry: { $gt: Date.now() },
  })

  if (!user) {
    return Response.json({ message: "Invalid token" }, { status: 400 })
  }

  user.password = await bcrypt.hash(password, 10)
  user.resetToken = null
  user.resetTokenExpiry = null
  await user.save()

  return Response.json({ message: "Password updated" })
}
