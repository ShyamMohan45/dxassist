// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
// import { getPool } from "@/lib/db";

// export async function POST(req) {
//   try {
//     const { username, email, mobile, password } = await req.json();
//     const pool = getPool();

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await pool.query(
//       "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
//       [username, email, mobile, hashedPassword]
//     );

//     // ✅ SET COOKIE AFTER SIGNUP
//     const response = NextResponse.json({
//       success: true,
//       user: { name: username, email }
//     });

//     response.cookies.set("user", JSON.stringify({
//       name: username,
//       email
//     }), {
//       httpOnly: true,
//       path: "/"
//     });

//     return response;

//   } catch (err) {
//     if (err.code === "ER_DUP_ENTRY") {
//       return NextResponse.json(
//         { success: false, message: "Email already exists" },
//         { status: 409 }
//       );
//     }

//     return NextResponse.json(
//       { success: false, message: err.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getPool } from "@/lib/db";
import { createTables } from "@/lib/dbUtils"; // ✅ ADD THIS

export async function POST(req) {
  try {
    // ✅ Ensure tables exist
    await createTables();

    const { username, email, mobile, password } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json(
        { success: false, message: "Missing fields" },
        { status: 400 }
      );
    }

    const pool = getPool();

    const hashedPassword = await bcrypt.hash(password, 10);

    await pool.query(
      "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
      [username, email, mobile, hashedPassword]
    );

    // ✅ Response with cookie
    const response = NextResponse.json({
      success: true,
      user: {
        name: username,
        email
      }
    });

    response.cookies.set(
      "user",
      JSON.stringify({
        name: username,
        email
      }),
      {
        httpOnly: true,
        path: "/"
      }
    );

    return response;

  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { success: false, message: "Email already exists" },
        { status: 409 }
      );
    }

    console.error("REGISTER ERROR:", err);

    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 }
    );
  }
}
