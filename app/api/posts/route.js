import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";

export async function GET() {
  try {
    const pool = getPool();
    const [posts] = await pool.query("SELECT * FROM posts");

    return NextResponse.json({
      success: true,
      posts,
    });
  } catch (err) {
    console.error("POSTS ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Database error" },
      { status: 500 }
    );
  }
}
