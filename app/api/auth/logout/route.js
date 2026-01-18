// import { NextResponse } from "next/server";

// export async function POST() {
//   const response = NextResponse.json({ success: true });

//   response.cookies.set("user", "", {
//     httpOnly: true,
//     path: "/",
//     maxAge: 0,
//   });

//   return response;
// }

import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST() {
  const cookieStore = await cookies()   // ✅ await
  cookieStore.delete("auth")            // ✅ safe

  return NextResponse.json({ success: true })
}

