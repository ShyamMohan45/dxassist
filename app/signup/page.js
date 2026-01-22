// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../context/AuthContext";

// export default function SignUpPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/register-user", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formValues),
//       });

//       const data = await res.json();
//       if (!data.success) {
//         toast.error(data.message || "Signup failed");
//         return;
//       }

//       // auto-login
//       const loginRes = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formValues.email,
//           password: formValues.password,
//         }),
//       });

//       const loginData = await loginRes.json();
//       setUser(loginData.user); // 🔥 instant navbar update

//       toast.success("Account created!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-[#f7fbfa] px-4">
//       <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
//         <h2 className="text-2xl text-center mb-6">Create Account</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="username" placeholder="Username" onChange={handleChange} className="w-full border p-2 rounded" />
//           <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
//           <input name="mobile" placeholder="Mobile" onChange={handleChange} className="w-full border p-2 rounded" />
//           <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" />

//           <button className="w-full bg-teal-600 text-white py-2 rounded">
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-4">
//           Already have an account? <Link href="/login">Login</Link>
//         </p>
//       </div>
//     </main>
//   );
// }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../context/AuthContext";

// export default function SignUpPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/register-user", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formValues),
//       });

//       const data = await res.json();
//       if (!data.success) {
//         toast.error(data.message || "Signup failed");
//         return;
//       }

//       const loginRes = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formValues.email,
//           password: formValues.password,
//         }),
//       });

//       const loginData = await loginRes.json();
//       setUser(loginData.user);

//       toast.success("Account created!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff] px-4">

//       <div className="w-full max-w-md bg-white rounded-3xl px-10 py-12 shadow-[0_25px_80px_rgba(0,0,0,0.12)]">

//         <h2 className="text-3xl font-semibold text-center text-blue-700 mb-2">
//           Create Account
//         </h2>

//         <p className="text-center text-gray-500 mb-10">
//           Join our healthcare platform
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-8">

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Username
//             </label>
//             <input
//               name="username"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-2 text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Email Address
//             </label>
//             <input
//               name="email"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-2 text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Mobile Number
//             </label>
//             <input
//               name="mobile"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-2 text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-gray-400 mb-2">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-2 text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <button
//             className="
//               w-full mt-6 py-3 rounded-full
//               text-white font-semibold text-lg
//               bg-gradient-to-r from-blue-500 to-teal-400
//               hover:opacity-95
//               transition-all duration-300
//             "
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-8 text-gray-500">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-600 font-medium hover:underline">
//             Login
//           </Link>
//         </p>
//       </div>
//     </main>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
// import { useAuth } from "../context/AuthContext";

// export default function SignUpPage() {
//   const router = useRouter();
//   const { setUser } = useAuth();

//   const [formValues, setFormValues] = useState({
//     username: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setFormValues({ ...formValues, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("/api/auth/register-user", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formValues),
//       });

//       const data = await res.json();
//       if (!data.success) {
//         toast.error(data.message || "Signup failed");
//         return;
//       }

//       const loginRes = await fetch("/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           email: formValues.email,
//           password: formValues.password,
//         }),
//       });

//       const loginData = await loginRes.json();
//       setUser(loginData.user);

//       toast.success("Account created!");
//       router.push("/");
//     } catch {
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff] px-4">

//       <div className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]">

//         <h2 className="text-2xl font-semibold text-center text-blue-700 mb-1">
//           Create Account
//         </h2>

//         <p className="text-center text-gray-500 text-sm mb-7">
//           Join our healthcare platform
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-6">

//           <div>
//             <label className="block text-xs text-gray-400 mb-1">
//               Username
//             </label>
//             <input
//               name="username"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-1.5 text-sm text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <div>
//             <label className="block text-xs text-gray-400 mb-1">
//               Email Address
//             </label>
//             <input
//               name="email"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-1.5 text-sm text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <div>
//             <label className="block text-xs text-gray-400 mb-1">
//               Mobile Number
//             </label>
//             <input
//               name="mobile"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-1.5 text-sm text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <div>
//             <label className="block text-xs text-gray-400 mb-1">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               onChange={handleChange}
//               className="
//                 w-full bg-transparent
//                 border-b border-gray-300
//                 py-1.5 text-sm text-gray-800
//                 focus:outline-none focus:border-blue-500
//                 transition-all
//               "
//             />
//           </div>

//           <button
//             className="
//               w-full mt-4 py-2.5 rounded-full
//               text-white font-semibold text-sm
//               bg-gradient-to-r from-blue-500 to-teal-400
//               hover:opacity-95
//               transition-all duration-300
//             "
//           >
//             Sign Up
//           </button>
//         </form>

//         <p className="text-center mt-6 text-xs text-gray-500">
//           Already have an account?{" "}
//           <Link href="/login" className="text-blue-600 font-medium hover:underline">
//             Login
//           </Link>
//         </p>

//       </div>
//     </main>
//   );
// }

// "use client"

// import { useRouter } from "next/navigation"
// import { useAuth } from "../context/AuthContext";

// export default function SignupPage() {
//   const router = useRouter()
//   const { setUser } = useAuth()

//   async function handleSubmit(e) {
//     e.preventDefault()
//     const form = new FormData(e.target)

//     const res = await fetch("/api/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         name: form.get("name"),
//         email: form.get("email"),
//         mobile: form.get("mobile"),
//         password: form.get("password"),
//       }),
//     })

//     const data = await res.json()
//     setUser(data.user)
//     router.push("/")
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#eef7fb] to-[#f6fbff] px-4">
//   <form
//     onSubmit={handleSubmit}
//     className="w-full max-w-sm bg-white rounded-2xl px-8 py-9 shadow-[0_18px_60px_rgba(0,0,0,0.12)]"
//   >
//     <h1 className="text-2xl font-semibold text-center text-blue-700 mb-1">
//       Create Account
//     </h1>

//     <p className="text-center text-gray-500 text-sm mb-7">
//       Join our healthcare platform
//     </p>

//     {/* Username */}
//     <div className="mb-6">
//       <label className="block text-xs text-gray-400 mb-1">
//         Username
//       </label>
//       <input
//         name="name"
//         required
//         className="
//           w-full bg-transparent
//           border-b border-gray-300
//           py-1.5 text-sm text-gray-800
//           focus:outline-none focus:border-blue-500
//           transition-all
//         "
//       />
//     </div>

//     {/* Email */}
//     <div className="mb-6">
//       <label className="block text-xs text-gray-400 mb-1">
//         Email Address
//       </label>
//       <input
//         name="email"
//         type="email"
//         required
//         className="
//           w-full bg-transparent
//           border-b border-gray-300
//           py-1.5 text-sm text-gray-800
//           focus:outline-none focus:border-blue-500
//           transition-all
//         "
//       />
//     </div>

//     {/* Mobile */}
//     <div className="mb-6">
//       <label className="block text-xs text-gray-400 mb-1">
//         Mobile Number
//       </label>
//       <input
//         name="mobile"
//         className="
//           w-full bg-transparent
//           border-b border-gray-300
//           py-1.5 text-sm text-gray-800
//           focus:outline-none focus:border-blue-500
//           transition-all
//         "
//       />
//     </div>

//     {/* Password */}
//     <div className="mb-6">
//       <label className="block text-xs text-gray-400 mb-1">
//         Password
//       </label>
//       <input
//         name="password"
//         type="password"
//         required
//         className="
//           w-full bg-transparent
//           border-b border-gray-300
//           py-1.5 text-sm text-gray-800
//           focus:outline-none focus:border-blue-500
//           transition-all
//         "
//       />
//     </div>

//     <button
//       className="
//         w-full mt-4 py-2.5 rounded-full
//         text-white font-semibold text-sm
//         bg-gradient-to-r from-blue-500 to-teal-400
//         hover:opacity-95
//         transition-all duration-300
//       "
//     >
//       Sign Up
//     </button>

//     <p className="text-center mt-6 text-xs text-gray-500">
//       Already have an account?{" "}
//       <span
//         onClick={() => router.push("/login")}
//         className="text-blue-600 font-medium cursor-pointer hover:underline"
//       >
//         Login
//       </span>
//     </p>
//   </form>
// </div>

//   )
// }


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
