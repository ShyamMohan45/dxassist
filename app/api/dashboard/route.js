// import { db } from "@/lib/db"
// import { cookies } from "next/headers"
// import { verifyToken } from "@/lib/auth"
// import { NextResponse } from "next/server"

// export async function GET() {
//   const token = cookies().get("auth")?.value
//   if (!token) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
//   }

//   const user = verifyToken(token)
//   if (!user || user.role !== "admin") {
//     return NextResponse.json({ message: "Forbidden" }, { status: 403 })
//   }

//   // USER STATS
//   const [[stats]] = await db.query(`
//     SELECT
//       (SELECT COUNT(*) FROM users) AS users,
//       (SELECT COUNT(*) FROM medical_analyses) AS docs
//   `)

//   // LATEST CLINICAL SNAPSHOT
//   const [[clinical]] = await db.query(`
//     SELECT summary, created_at
//     FROM medical_analyses
//     ORDER BY created_at DESC
//     LIMIT 1
//   `)

//   return NextResponse.json({
//     user: {
//       email: user.email,
//       lastLogin: "Today",
//       docs: stats.docs,
//     },
//     clinical: {
//       summary: clinical?.summary || "No data available",
//       condition: "No Critical Condition",
//       severity: "GREEN",
//       lastAnalyzed: "2 minutes ago",
//     },
//   })
// }





// import { db } from "@/lib/db";
// import { cookies } from "next/headers";
// import { verifyToken } from "@/lib/auth";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   const cookieStore = await cookies();
//   const token = cookieStore.get("auth")?.value;

//   if (!token) {
//     return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
//   }

//   const admin = verifyToken(token);
//   if (!admin || admin.role !== "admin") {
//     return NextResponse.json({ message: "Forbidden" }, { status: 403 });
//   }

//   const { searchParams } = new URL(req.url);
//   const email = searchParams.get("email");

//   let userId = null;
//   let userEmail = admin.email;

//   // 🔍 EMAIL SEARCH (ADMIN)
//   if (email) {
//     const [[user]] = await db.query(
//       "SELECT id, email FROM users WHERE email = ?",
//       [email]
//     );

//     if (!user) {
//       return NextResponse.json(
//         { message: "User not registered" },
//         { status: 404 }
//       );
//     }

//     userId = user.id;
//     userEmail = user.email;
//   }

//   // 📌 LAST ANALYSIS
//   const [[lastAnalysis]] = await db.query(
//     `
//     SELECT summary, created_at
//     FROM medical_analyses
//     ${userId ? "WHERE user_id = ?" : ""}
//     ORDER BY created_at DESC
//     LIMIT 1
//     `,
//     userId ? [userId] : []
//   );

//   // 📊 ALL ANALYSES
//   const [analyses] = await db.query(
//     `
//     SELECT summary, created_at
//     FROM medical_analyses
//     ${userId ? "WHERE user_id = ?" : ""}
//     ORDER BY created_at DESC
//     `,
//     userId ? [userId] : []
//   );

//   return NextResponse.json({
//     user: {
//       email: userEmail,
//       lastLogin: "Today",
//       docs: analyses.length,
//     },
//     clinical: lastAnalysis
//       ? {
//           summary: lastAnalysis.summary,
//           condition: "No Critical Condition",
//           severity: "GREEN",
//           lastAnalyzed: "Recently",
//         }
//       : {
//           summary: "No analysis available",
//           condition: "-",
//           severity: "-",
//           lastAnalyzed: "-",
//         },
//     analyses,
//   });
// }




// import { db } from "@/lib/db";
// import { cookies } from "next/headers";
// import { verifyToken } from "@/lib/auth";
// import { NextResponse } from "next/server";

// export async function GET(req) {
//   try {
//     // 1️⃣ Read auth cookie
//     const cookieStore = cookies();
//     const token = cookieStore.get("auth")?.value;

//     if (!token) {
//       return NextResponse.json(
//         { message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     // 2️⃣ Verify JWT
//     const admin = verifyToken(token);

//     if (!admin || admin.role !== "admin") {
//       return NextResponse.json(
//         { message: "You are not an admin. This page is only for admin." },
//         { status: 403 }
//       );
//     }

//     // 3️⃣ Read email from query
//     const { searchParams } = new URL(req.url);
//     const email = searchParams.get("email");

//     let userId;
//     let userEmail;

//     // 4️⃣ Admin searching another user
//     if (email) {
//       const [[user]] = await db.query(
//         "SELECT id, email FROM users WHERE email = ?",
//         [email]
//       );

//       if (!user) {
//         return NextResponse.json(
//           { message: "User not registered" },
//           { status: 404 }
//         );
//       }

//       userId = user.id;
//       userEmail = user.email;
//     } else {
//       // Admin viewing own dashboard
//       const [[self]] = await db.query(
//         "SELECT id, email FROM users WHERE email = ?",
//         [admin.email]
//       );

//       userId = self.id;
//       userEmail = self.email;
//     }

//     // 5️⃣ Fetch latest analysis
//     const [[lastAnalysis]] = await db.query(
//       `
//       SELECT summary, created_at
//       FROM medical_analyses
//       WHERE user_id = ?
//       ORDER BY created_at DESC
//       LIMIT 1
//       `,
//       [userId]
//     );

//     // 6️⃣ Fetch all analyses
//     const [analyses] = await db.query(
//       `
//       SELECT summary, created_at
//       FROM medical_analyses
//       WHERE user_id = ?
//       ORDER BY created_at DESC
//       `,
//       [userId]
//     );

//     // 7️⃣ Response
//     return NextResponse.json({
//       user: {
//         email: userEmail,
//         lastLogin: "Today",
//         docs: analyses.length,
//       },
//       clinical: lastAnalysis
//         ? {
//             summary: lastAnalysis.summary,
//             condition: "No Critical Condition",
//             severity: "GREEN",
//             lastAnalyzed: "Recently",
//           }
//         : {
//             summary: "No analysis available",
//             condition: "-",
//             severity: "-",
//             lastAnalyzed: "-",
//           },
//       analyses,
//     });
//   } catch (err) {
//     console.error("Dashboard error:", err);
//     return NextResponse.json(
//       { message: "Server error" },
//       { status: 500 }
//     );
//   }
// }



import { db } from "@/lib/db";
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    // 1️⃣ Read auth cookie (✅ FIXED)
    const cookieStore = await cookies();
    const token = cookieStore.get("auth")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    // 2️⃣ Verify JWT
    const admin = verifyToken(token);

    if (!admin || admin.role !== "admin") {
      return NextResponse.json(
        { message: "You are not an admin. This page is only for admin." },
        { status: 403 }
      );
    }

    // 3️⃣ Read email from query
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");

    let userId;
    let userEmail;

    // 4️⃣ Admin searching another user
    if (email) {
      const [[user]] = await db.query(
        "SELECT id, email FROM users WHERE email = ?",
        [email]
      );

      if (!user) {
        return NextResponse.json(
          { message: "User not registered" },
          { status: 404 }
        );
      }

      userId = user.id;
      userEmail = user.email;
    } else {
      // Admin viewing own dashboard
      const [[self]] = await db.query(
        "SELECT id, email FROM users WHERE email = ?",
        [admin.email]
      );

      userId = self.id;
      userEmail = self.email;
    }

    // 5️⃣ Fetch latest analysis
    const [[lastAnalysis]] = await db.query(
      `
      SELECT summary, created_at
      FROM medical_analyses
      WHERE user_id = ?
      ORDER BY created_at DESC
      LIMIT 1
      `,
      [userId]
    );

    // 6️⃣ Fetch all analyses
    const [analyses] = await db.query(
      `
      SELECT summary, created_at
      FROM medical_analyses
      WHERE user_id = ?
      ORDER BY created_at DESC
      `,
      [userId]
    );

    // 7️⃣ Response
    return NextResponse.json({
      user: {
        email: userEmail,
        lastLogin: "Today",
        docs: analyses.length,
      },
      clinical: lastAnalysis
        ? {
            summary: lastAnalysis.summary,
            condition: "No Critical Condition",
            severity: "GREEN",
            lastAnalyzed: "Recently",
          }
        : {
            summary: "No analysis available",
            condition: "-",
            severity: "-",
            lastAnalyzed: "-",
          },
      analyses,
    });
  } catch (err) {
    console.error("Dashboard error:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
