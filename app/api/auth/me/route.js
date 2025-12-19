import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies(); // ✅ MUST await
  const userCookie = cookieStore.get("user");

  if (!userCookie) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: JSON.parse(userCookie.value),
  });
}
