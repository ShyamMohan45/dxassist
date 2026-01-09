// "use client";

// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import ThemeToggle from "./ThemeToggle";
// import { useAuth } from "../context/AuthContext";

// export default function Navbar() {
//   const { user, loading, setUser } = useAuth();
//   const router = useRouter();

//   const handleLogout = async () => {
//     await fetch("/api/auth/logout", { method: "POST" });
//     setUser(null);
//     router.push("/");
//   };

//   if (loading) return null;

//   return (
//     <nav className="flex justify-between items-center h-20 px-10 bg-white shadow">
//       <Link href="/" className="text-3xl font-bold text-emerald-500">
//         DxAssist
//       </Link>

//       <ul className="flex items-center gap-6 font-semibold">
//         <Link href="/history">History</Link>
//         <Link href="/diagnostics">Diagnostics</Link>
//         <Link href="/templates">Templates</Link>

//         {user ? (
//           <>
//             <span className="text-emerald-600">Hi, {user.name}</span>
//             <button
//               onClick={handleLogout}
//               className="px-4 py-2 bg-red-500 text-white rounded"
//             >
//               Sign Out
//             </button>
//           </>
//         ) : (
//           <>
//             <Link href="/login">Login</Link>
//             <Link href="/signup">Signup</Link>
//           </>
//         )}

//         <ThemeToggle />
//       </ul>
//     </nav>
//   );
// }
// "use client"

// import Link from "next/link"
// import { useRouter } from "next/navigation"
// import ThemeToggle from "./ThemeToggle"
// import { useAuth } from "../context/AuthContext"

// export default function Navbar() {
//   const { user, loading, setUser } = useAuth()
//   const router = useRouter()

//   const handleLogout = async () => {
//     await fetch("/api/auth/logout", { method: "POST" })
//     setUser(null)
//     router.push("/")
//   }

//   if (loading) return null

//   return (
//     <nav
//       className="
//         relative flex justify-between items-center
//         sticky top-0 z-50
//         h-20 px-10

//         bg-white/60 dark:bg-slate-900/60
//         backdrop-blur-2xl

//         text-black dark:text-white
//         border-b border-black/10 dark:border-slate-700/40

//         shadow-[0_10px_40px_rgba(0,0,0,0.08)]
//         transition-all duration-500
//       "
//     >
//       {/* GLOW LAYER */}
//       <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-2xl opacity-70" />

//       {/* LOGO */}
//       <div
//         className="
//           relative text-3xl font-extrabold tracking-wide
//           bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500
//           bg-clip-text text-transparent
//           hover:scale-110
//           transition-transform duration-300
//         "
//       >
//         <Link href="/">DxAssist</Link>
//       </div>

//       {/* NAV LINKS */}
//       <ul className="relative flex items-center gap-10 text-sm font-semibold">
//         {[
//           { name: "Patient Queue", href: "/templates" },
//           { name: "Clinical Analysis", href: "/diagnostics" },
//           { name: "Medical Knowledge Base", href: "/history" },
//         ].map((item) => (
//           <li key={item.href} className="relative group">
//             <Link
//               href={item.href}
//               className="opacity-80 hover:opacity-100 transition-all duration-300"
//             >
//               {item.name}
//             </Link>

//             <span
//               className="
//                 absolute -bottom-2 left-1/2 -translate-x-1/2
//                 h-[2px] w-0
//                 bg-gradient-to-r from-emerald-400 to-cyan-400
//                 rounded-full
//                 group-hover:w-full
//                 transition-all duration-300
//               "
//             />
//           </li>
//         ))}

//         {/* GET STARTED */}
//         <li className="relative group">
//           <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition" />
//           <Link
//             href="/start"
//             className="
//               relative px-6 py-2.5 rounded-xl
//               bg-gradient-to-r from-emerald-400 to-cyan-400
//               text-black font-bold
//               shadow-lg
//               hover:scale-110 active:scale-95
//               transition-all duration-300
//             "
//           >
//             Get started
//           </Link>
//         </li>

//         {/* GOOGLE TRANSLATE */}
//        <li
//           className="
//             relative px-3 py-1.5 rounded-lg
//             bg-black/5 dark:bg-white/10
//             backdrop-blur
//             hover:bg-black/10 dark:hover:bg-white/20
//             transition
//           "
//         >
//           <div id="google_translate_element"></div>
//         </li>

//         {/* AUTH SECTION (ADDED FROM FIRST CODE) */}
//         {user ? (
//           <>
//             <li className="text-emerald-400 font-medium">
//               Hi, {user.name}
//             </li>

//             <li>
//               <button
//                 onClick={handleLogout}
//                 className="
//                   px-4 py-2 rounded-lg
//                   bg-red-500/90 text-white
//                   hover:bg-red-600
//                   transition
//                 "
//               >
//                 Sign Out
//               </button>
//             </li>
//           </>
//         ) : (
//           <>
//             <li className="relative group">
//               <Link href="/login" className="opacity-80 hover:opacity-100 transition">
//                 Login
//               </Link>
//             </li>

//             <li className="relative group">
//               <Link href="/signup" className="opacity-80 hover:opacity-100 transition">
//                 Signup
//               </Link>
//             </li>
//           </>
//         )}

//         {/* THEME TOGGLE */}
//         <li className="hover:scale-125 transition-transform duration-300">
//           <ThemeToggle />
//         </li>
//       </ul>
//     </nav>
//   )
// }
"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import ThemeToggle from "./ThemeToggle"
import { useAuth } from "../context/AuthContext"

export default function Navbar() {
  const { user, loading, setUser } = useAuth()
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" })
    setUser(null)
    router.push("/")
  }

  // 🔥 FORCE GOOGLE TRANSLATE AFTER NAVBAR MOUNTS
  useEffect(() => {
    const interval = setInterval(() => {
      if (
        window.google &&
        window.google.translate &&
        typeof window.googleTranslateElementInit === "function"
      ) {
        window.googleTranslateElementInit()
        clearInterval(interval)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  if (loading) return null

  return (
    <nav
      className="
        relative flex justify-between items-center
        sticky top-0 z-50
        h-20 px-10
        bg-white/60 dark:bg-slate-900/60
        backdrop-blur-2xl
        text-black dark:text-white
        border-b border-black/10 dark:border-slate-700/40
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        transition-all duration-500
      "
    >
      {/* GLOW */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-2xl opacity-70" />

      {/* LOGO */}
      <Link
        href="/"
        className="
          relative text-3xl font-extrabold tracking-wide
          bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500
          bg-clip-text text-transparent
          hover:scale-110 transition-transform
        "
      >
        DxAssist
      </Link>

      {/* NAV */}
      <ul className="relative flex items-center gap-10 text-sm font-semibold">
        {[
          { name: "dashboard", href: "/dashboard" },
          { name: "Clinical Analysis", href: "/diagnostics" },
          { name: "Medical Knowledge Base", href: "/history" },
        ].map((item) => (
          <li key={item.href} className="relative group">
            <Link href={item.href} className="opacity-80 hover:opacity-100 transition">
              {item.name}
            </Link>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:w-full transition-all" />
          </li>
        ))}

        {/* GET STARTED */}
        <li className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition" />
          <Link
            href="/start"
            className="relative px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-bold hover:scale-110 transition"
          >
            Get started
          </Link>
        </li>

{/* <li>
  <Link href="/login">Login</Link>
</li>
<li>
  <Link href="/signup">Signup</Link>
</li> */}

{user ? (
  <>
    <li className="opacity-90">
       <span className="font-bold">{user.name}</span>
    </li>

    <li>
      <button
        onClick={handleLogout}
        className="hover:opacity-80 transition"
      >
        Logout
      </button>
    </li>
  </>
) : (
  <>
    <li>
      <Link href="/login">Login</Link>
    </li>
    <li>
      <Link href="/signup">Signup</Link>
    </li>
  </>
)}



        {/* 🌍 GOOGLE TRANSLATE BOX */}
        <li className="px-3 py-1.5 rounded-lg bg-black/5 dark:bg-white/10 backdrop-blur">
          <div id="google_translate_element" />
        </li>

      

        

        {/* THEME */}
        <li className="hover:scale-125 transition">
          <ThemeToggle />
        </li>
      </ul>

            
    </nav>
  )
}
