import { getPool } from "@/lib/db";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { token, password } = await req.json();
  const pool = getPool();

  const [rows] = await pool.query(
    "SELECT user_id FROM password_resets WHERE token = ? AND expires_at > NOW()",
    [token]
  );

  if (!rows.length) {
    return NextResponse.json({ success: false, message: "Invalid or expired" }, { status: 400 });
  }

  const hash = await bcrypt.hash(password, 10);

  await pool.query(
    "UPDATE users SET password = ? WHERE id = ?",
    [hash, rows[0].user_id]
  );

  await pool.query("DELETE FROM password_resets WHERE token = ?", [token]);

  return NextResponse.json({ success: true });
}
