// import { db } from "@/lib/db"
// import bcrypt from "bcryptjs"
// import { signToken } from "@/lib/auth"
// import { cookies } from "next/headers"
// import { NextResponse } from "next/server"

// export async function POST(req) {
//   try {
//     const { name, email, mobile, password } = await req.json()

//     const hash = await bcrypt.hash(password, 10)

//     const [result] = await db.query(
//       "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
//       [name, email, mobile, hash]
//     )

//     const user = { id: result.insertId, name, email }
//     const token = signToken(user)

//     const cookieStore = await cookies()
//     cookieStore.set("auth", token, {
//       httpOnly: true,
//       sameSite: "lax",
//       path: "/",
//     })

//     return NextResponse.json({ success: true, user })

//   } catch (err) {
    
//     if (err.code === "ER_DUP_ENTRY") {
//       return NextResponse.json(
//         { success: false, message: "Email already registered" },
//         { status: 409 }
//       )
//     }

//     return NextResponse.json(
//       { success: false, message: "Signup failed" },
//       { status: 500 }
//     )
//   }
// }




import { db } from "@/lib/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req) {
  try {
    const { name, email, mobile, password } = await req.json()

    const hash = await bcrypt.hash(password, 10)

    const [result] = await db.query(
      "INSERT INTO users (name, email, mobile, password) VALUES (?, ?, ?, ?)",
      [name, email, mobile, hash]
    )

    const user = { id: result.insertId, name, email }

    // ✅ NO COOKIE, NO LOGIN HERE
    return NextResponse.json({ success: true, user })

  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return NextResponse.json(
        { success: false, message: "Email already registered" },
        { status: 409 }
      )
    }

    return NextResponse.json(
      { success: false, message: "Signup failed" },
      { status: 500 }
    )
  }
}
