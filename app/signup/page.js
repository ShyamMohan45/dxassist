


"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"

export default function SignupPage() {
  const router = useRouter()
  const { setUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)

    const email = form.get("email")

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email,
        mobile: form.get("mobile"),
        password: form.get("password"),
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      alert(data.message || "Signup failed")
      return
    }

    
    router.push(`/login-email-otp?email=${encodeURIComponent(email)}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff] px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
      >
        <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">
          Create Account
        </h1>

        <p className="text-center text-gray-500 text-sm mb-7">
          Join our healthcare platform
        </p>

      
        <div className="mb-6">
          <label className="block text-xs text-gray-400 mb-1">
            Username
          </label>
          <input
            name="name"
            required
            className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <div className="mb-6">
          <label className="block text-xs text-gray-400 mb-1">
            Email Address
          </label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

       
        <div className="mb-6">
          <label className="block text-xs text-gray-400 mb-1">
            Mobile Number
          </label>
          <input
            name="mobile"
            className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

       
        <div className="mb-6">
          <label className="block text-xs text-gray-400 mb-1">
            Password
          </label>
          <input
            name="password"
            type="password"
            required
            className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all"
          />
        </div>

        <button className="w-full mt-4 py-2.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-95 transition-all duration-300">
          Sign Up
        </button>

        <p className="text-center mt-6 text-xs text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </form>
    </div>
  )
}
