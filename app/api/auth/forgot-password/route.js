import { getPool } from "@/lib/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email } = await req.json();
  const pool = getPool();

  const [users] = await pool.query(
    "SELECT id FROM users WHERE email = ?",
    [email]
  );

  if (!users.length) return NextResponse.json({ success: true });

  const token = uuid();
  const expires = new Date(Date.now() + 15 * 60 * 1000);

  await pool.query(
    "INSERT INTO password_resets (user_id, token, expires_at) VALUES (?, ?, ?)",
    [users[0].id, token, expires]
  );

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    to: email,
    subject: "Reset your password",
    html: `<a href="http://localhost:3000/reset-password/${token}">Reset Password</a>`,
  });

  return NextResponse.json({ success: true });
}
