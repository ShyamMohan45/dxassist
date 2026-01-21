// "use client"

// import { useRouter } from "next/navigation"
// import { useState } from "react"

// export default function AdminLoginPage() {
//   const router = useRouter()
//   const [error, setError] = useState(null)

//   async function handleSubmit(e) {
//     e.preventDefault()
//     const form = new FormData(e.target)

//     const res = await fetch("http://127.0.0.1:8001/admin/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email: form.get("email"),
//         password: form.get("password"),
//       }),
//     })

//     const data = await res.json()

//     if (!res.ok) {
//       setError("Invalid admin credentials")
//       return
//     }

//     localStorage.setItem("admin", "true")
//     router.push("/admin/dashboard")
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff] px-4">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
//       >
//         <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">
//           Admin Login
//         </h1>

//         <p className="text-center text-gray-500 text-sm mb-7">
//           Secure administrator access
//         </p>

//         {error && (
//           <p className="text-red-500 text-sm text-center mb-4">
//             {error}
//           </p>
//         )}

//         <div className="mb-6">
//           <label className="block text-xs text-gray-400 mb-1">
//             Admin Email
//           </label>
//           <input
//             name="email"
//             type="email"
//             required
//             className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block text-xs text-gray-400 mb-1">
//             Admin Password
//           </label>
//           <input
//             name="password"
//             type="password"
//             required
//             className="w-full bg-transparent border-b border-gray-300 py-1.5 text-sm text-gray-800 focus:outline-none focus:border-blue-500 transition-all"
//           />
//         </div>

//         <button className="w-full mt-4 py-2.5 rounded-full text-white font-semibold text-sm bg-gradient-to-r from-blue-500 to-teal-400 hover:opacity-95 transition-all duration-300">
//           Login as Admin
//         </button>
//       </form>
//     </div>
//   )
// }


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleLogin() {
    setError("");

    const res = await fetch("http://127.0.0.1:8001/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("Invalid admin credentials");
      return;
    }

    router.push("/admin/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl w-96 shadow">
        <h2 className="text-2xl font-bold mb-4">Admin Login</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        <input
          className="w-full border p-2 mb-3"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border p-2 mb-4"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
}
