

import { cookies } from "next/headers"
import { verifyToken } from "@/lib/auth"

export async function GET() {
  const cookieStore = await cookies()   
  const token = cookieStore.get("auth")?.value

  const user = token ? verifyToken(token) : null

  return Response.json({ user })
}

