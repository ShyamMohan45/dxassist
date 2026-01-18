// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { getPool } from "@/lib/db";

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();
//     const pool = getPool();

//     const [rows] = await pool.query(
//       "SELECT * FROM users WHERE email = ?",
//       [email]
//     );

//     if (rows.length === 0) {
//       return NextResponse.json(
//         { success: false, message: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     const user = rows[0];
//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return NextResponse.json(
//         { success: false, message: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // ✅ SET COOKIE
//     const response = NextResponse.json({
//       success: true,
//       user: { name: user.name, email: user.email }
//     });

//     response.cookies.set("user", JSON.stringify({
//       name: user.name,
//       email: user.email
//     }), {
//       httpOnly: true,
//       path: "/"
//     });

//     return response;

//   } catch (err) {
//     return NextResponse.json(
//       { success: false, message: err.message },
//       { status: 500 }
//     );
//   }
// }




import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { signToken } from "@/lib/auth"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { email, password } = await req.json()

    const [[user]] = await db.query(
      "SELECT * FROM users WHERE email = ?",
      [email]
    )

    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      )
    }

    const token = signToken(user)

    // ✅ IMPORTANT FIX
    const cookieStore = await cookies()
    cookieStore.set("auth", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    })

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })

  } catch (err) {
    console.error("LOGIN ERROR:", err)
    return NextResponse.json(
      { success: false, message: "Login failed" },
      { status: 500 }
    )
  }
}
