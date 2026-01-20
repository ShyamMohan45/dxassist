// import { cookies } from "next/headers";
// import { NextResponse } from "next/server";

// export async function GET() {
//   const cookieStore = await cookies(); 
//   const userCookie = cookieStore.get("user");

//   if (!userCookie) {
//     return NextResponse.json({ user: null });
//   }

//   return NextResponse.json({
//     user: JSON.parse(userCookie.value),
//   });
// }
// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function GET() {
//   const cookieStore = cookies();
//   const userCookie = cookieStore.get("user");

//   if (!userCookie) {
//     return NextResponse.json({ user: null });
//   }

//   try {
//     const user = JSON.parse(userCookie.value);
//     return NextResponse.json({ user });
//   } catch {
//     return NextResponse.json({ user: null });
//   }
// }


// import { NextResponse } from "next/server";
// import { cookies } from "next/headers";

// export async function GET() {
//  
//   const cookieStore = await cookies();
//   const userCookie = cookieStore.get("user");

//   if (!userCookie) {
//     return NextResponse.json({ user: null });
//   }

//   try {
//     const user = JSON.parse(userCookie.value);
//     return NextResponse.json({ user });
//   } catch {
//     return NextResponse.json({ user: null });
//   }
// }


import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth"

export async function GET() {
  const cookieStore = await cookies()   
  const token = cookieStore.get("auth")?.value

  const user = token ? verifyToken(token) : null

  return Response.json({ user })
}

