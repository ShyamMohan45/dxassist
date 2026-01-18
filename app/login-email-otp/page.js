// "use client"

// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import { useAuth } from "../context/AuthContext"

// export default function EmailOTPLogin() {
//   const [email, setEmail] = useState("")
//   const [otp, setOtp] = useState("")
//   const [step, setStep] = useState(1)
//   const [error, setError] = useState("")
//   const router = useRouter()
//   const { setUser } = useAuth()

//   async function sendOTP() {
//     setError("")
//     const res = await fetch("/api/auth/send-email-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email }),
//     })

//     if (!res.ok) {
//       const data = await res.json()
//       setError(data.message)
//       return
//     }

//     setStep(2)
//   }

//   async function verifyOTP() {
//     setError("")
//     const res = await fetch("/api/auth/verify-email-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp }),
//     })

//     const data = await res.json()
//     if (!res.ok) {
//       setError(data.message)
//       return
//     }

//     setUser(data.user)
//     router.push("/")
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       <div className="w-[380px] bg-white p-8 rounded-xl shadow-xl">
//         {step === 1 ? (
//           <>
//             <h2 className="text-xl font-bold mb-4">Login with Email OTP</h2>
//             <input
//               className="input"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <button className="btn w-full" onClick={sendOTP}>
//               Send OTP
//             </button>
//           </>
//         ) : (
//           <>
//             <h2 className="text-xl font-bold mb-4">Enter OTP</h2>
//             <input
//               className="input"
//               placeholder="6-digit OTP"
//               value={otp}
//               onChange={(e) => setOtp(e.target.value)}
//             />
//             <button className="btn w-full" onClick={verifyOTP}>
//               Verify & Login
//             </button>
//           </>
//         )}

//         {error && <p className="text-red-500 mt-4 text-sm">{error}</p>}
//       </div>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"

export default function EmailOTPLogin() {
  const [email, setEmail] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState(1)
  const [error, setError] = useState("")
  const router = useRouter()
  const { setUser } = useAuth()

  async function sendOTP() {
    setError("")
    const res = await fetch("/api/auth/send-email-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })

    if (!res.ok) {
      const data = await res.json()
      setError(data.message)
      return
    }

    setStep(2)
  }

  async function verifyOTP() {
    setError("")
    const res = await fetch("/api/auth/verify-email-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, otp }),
    })

    const data = await res.json()
    if (!res.ok) {
      setError(data.message)
      return
    }

    setUser(data.user)
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff] px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
        
        {step === 1 ? (
          <>
            <h2 className="text-2xl font-semibold text-center text-blue-700 mb-1">
              Verify your Email
            </h2>

            <p className="text-center text-gray-500 text-sm mb-7">
              We’ll send a one-time password to your email
            </p>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-xs text-gray-400 mb-1">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full bg-transparent
                  border-b border-gray-300
                  py-1.5 text-sm text-gray-800
                  focus:outline-none focus:border-blue-500
                  transition-all
                "
              />
            </div>

            <button
              onClick={sendOTP}
              className="
                w-full mt-4 py-2.5 rounded-full
                text-white font-semibold text-sm
                bg-gradient-to-r from-blue-500 to-teal-400
                hover:opacity-95
                transition-all duration-300
              "
            >
              Send Verification Code
            </button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold text-center text-blue-700 mb-1">
              Enter OTP
            </h2>

            <p className="text-center text-gray-500 text-sm mb-7">
              Check your email for the 6-digit code
            </p>

            {/* OTP */}
            <div className="mb-6">
              <label className="block text-xs text-gray-400 mb-1">
                Verification Code
              </label>
              <input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="
                  w-full bg-transparent
                  border-b border-gray-300
                  py-1.5 text-sm text-gray-800 tracking-widest
                  focus:outline-none focus:border-blue-500
                  transition-all
                "
              />
            </div>

            <button
              onClick={verifyOTP}
              className="
                w-full mt-4 py-2.5 rounded-full
                text-white font-semibold text-sm
                bg-gradient-to-r from-blue-500 to-teal-400
                hover:opacity-95
                transition-all duration-300
              "
            >
              Verify & Continue
            </button>
          </>
        )}

        {error && (
          <p className="mt-5 text-center text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    </div>
  )
}
