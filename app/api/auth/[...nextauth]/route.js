import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import {getPool} from "@/lib/db"





const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const pool = getPool()

        const [rows] = await pool.query(
          "SELECT * FROM users WHERE email = ?",
          [credentials.email]
        )

        if (!rows.length) return null

        const user = rows[0]
        const match = await bcrypt.compare(
          credentials.password,
          user.password
        )

        if (!match) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.name = user.name
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.name = token.name
      return session
    },
  },
})

export { handler as GET, handler as POST }
