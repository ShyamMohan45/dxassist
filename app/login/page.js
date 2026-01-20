// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error("Invalid credentials");
//         return;
//       }

//       setUser(data.user); // 🔥 instant navbar update
//       toast.success("Login successful!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-[#f7fbfa]">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
//         <h2 className="text-xl text-center mb-6">Login</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-2 rounded"
//           />

//           <button className="w-full bg-teal-600 text-white py-2 rounded">
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           Don’t have an account? <Link href="/signup">Sign up</Link>
//         </p>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error("Invalid credentials");
//         return;
//       }

//       setUser(data.user);
//       toast.success("Login successful!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center relative overflow-hidden">

//       {/* 🌈 Soft gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100" />

//       {/* ✨ Glass card */}
//       <div className="relative w-full max-w-md p-8 rounded-2xl 
//         bg-white/80 backdrop-blur-xl 
//         shadow-[0_20px_60px_rgba(0,0,0,0.15)]">

//         <h2 className="text-3xl font-semibold text-center text-teal-900 mb-2">
//           Welcome Back
//         </h2>

//         <p className="text-center text-gray-500 mb-8">
//           Sign in to continue
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">

//           {/* Email */}
//           <div>
//             <input
//               placeholder="Email address"
//               onChange={(e) => setEmail(e.target.value)}
//               className="
//                 w-full px-4 py-3 rounded-xl
//                 border border-gray-300
//                 bg-white
//                 focus:outline-none focus:ring-2 focus:ring-teal-400
//                 transition-all
//               "
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="
//                 w-full px-4 py-3 rounded-xl
//                 border border-gray-300
//                 bg-white
//                 focus:outline-none focus:ring-2 focus:ring-teal-400
//                 transition-all
//               "
//             />
//           </div>

//           {/* Button */}
//           <button
//             className="
//               w-full py-3 rounded-xl font-semibold
//               bg-gradient-to-r from-teal-500 to-emerald-500
//               text-white
//               shadow-lg shadow-emerald-300/40
//               hover:scale-[1.02]
//               hover:shadow-xl
//               active:scale-[0.98]
//               transition-all duration-300
//             "
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-6 text-gray-600">
//           Don’t have an account?{" "}
//           <Link
//             href="/signup"
//             className="text-teal-700 font-medium hover:underline"
//           >
//             Sign up
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error("Invalid credentials");
//         return;
//       }

//       setUser(data.user);
//       toast.success("Login successful!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff]">

//       <div className="w-full max-w-md bg-white rounded-3xl px-10 py-12 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

//         <h2 className="text-3xl font-semibold text-center text-blue-700 mb-2">
//           Welcome Back
//         </h2>

//         <p className="text-center text-gray-500 mb-10">
//           Login to your healthcare account
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-8">

//           {/* Email */}
//           <div>
//             <label className="block text-gray-400 text-sm mb-2">
//               Email Address
//             </label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-2 text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-gray-400 text-sm mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-2 text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           {/* Button */}
//           <button
//             className="
//               w-full mt-6 py-3 rounded-full
//               text-white font-semibold text-lg
//               bg-gradient-to-r from-blue-500 to-teal-400
//               hover:opacity-95
//               transition-all duration-300
//             "
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-8 text-gray-500">
//           New here?{" "}
//           <Link href="/signup" className="text-blue-600 font-medium hover:underline">
//             Sign up
//           </Link>
//         </p>

//       </div>
//     </main>
//   );
// }



// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useAuth } from "../context/AuthContext";

// export default function LoginPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!data.success) {
//         toast.error("Invalid credentials");
//         return;
//       }

//       setUser(data.user);
//       toast.success("Login successful!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff]">

//       <div className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">

//         <h2 className="text-2xl font-semibold text-center text-blue-700 mb-1">
//           Welcome Back
//         </h2>

//         <p className="text-center text-gray-500 text-sm mb-6">
//           Login to your healthcare account
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">

//           {/* Email */}
//           <div>
//             <label className="block text-xs text-gray-400 mb-1">
//               Email Address
//             </label>
//             <input
//               onChange={(e) => setEmail(e.target.value)}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-1.5 text-sm text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-xs text-gray-400 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-1.5 text-sm text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           {/* Button */}
//           <button
//             className="
//               w-full mt-4 py-2.5 rounded-full
//               text-white font-semibold text-sm
//               bg-gradient-to-r from-blue-500 to-teal-400
//               hover:opacity-95
//               transition-all duration-300
//             "
//           >
//             Login
//           </button>
//         </form>

//         <p className="text-center mt-6 text-xs text-gray-500">
//           New here?{" "}
//           <Link href="/signup" className="text-blue-600 font-medium hover:underline">
//             Sign up
//           </Link>
//         </p>

//       </div>
//     </main>
//   );
// }




"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"

export default function LoginPage() {
  const router = useRouter()
  const { setUser } = useAuth()

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.target)

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.get("email"),
        password: form.get("password"),
      }),
    })

    const data = await res.json()
    setUser(data.user)
    router.push("/")
  }

  return (
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff]">
  <form
    onSubmit={handleSubmit}
    className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
  >
    <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">
      Welcome Back
    </h1>

    <p className="text-center text-gray-500 text-sm mb-6">
      Login to your healthcare account
    </p>

   
    <div className="mb-6">
      <label className="block text-xs text-gray-400 mb-1">
        Email Address
      </label>
      <input
        name="email"
        type="email"
        required
        className="
          w-full bg-transparent
          border-b border-gray-300
          py-1.5 text-sm text-gray-800
          focus:outline-none focus:border-blue-500
          transition-all
        "
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
      className="
        w-full mt-4 py-2.5 rounded-full
        text-white font-semibold text-sm
        bg-gradient-to-r from-blue-500 to-teal-400
        hover:opacity-95
        transition-all duration-300
      "
    >
      Login
    </button>

    <p className="text-center mt-6 text-xs text-gray-500">
      New here?{" "}
      <span
        onClick={() => router.push("/signup")}
        className="text-blue-600 font-medium cursor-pointer hover:underline"
      >
        Sign up
      </span>
    </p>
  </form>
</div>

  )
}
