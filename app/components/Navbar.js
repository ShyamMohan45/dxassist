// "use client"

// import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'

// export default function Navbar() {
//   const { data: session, status } = useSession()

//   return (
//     <nav className="flex justify-between items-center text-black bg-white border border-black h-20 px-6">
//       <div className="text-3xl text-black">
//         <Link href="/">DxAssist</Link>
//       </div>

//       <ul className="flex items-center space-x-6 opacity-90">
//         <li><Link href="/diagnostics">Diagnostic Insight</Link></li>
//         <li><Link href="/history">History & Records</Link></li>
//         <li><Link href="/templates">Data Templates</Link></li>
//         <li><Link href="/start">Get started</Link></li>

//         <li>
//         <Link href={"/login"}>login</Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }

// "use client"

// import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'

// export default function Navbar() {
//   const { data: session, status } = useSession()

//   return (
//     <nav className="flex justify-between items-center text-black bg-white border border-black h-20 px-6">
//       <div className="text-3xl text-black">
//         <Link href="/">DxAssist</Link>
//       </div>

//       <ul className="flex items-center space-x-6 opacity-90">

//         <li><Link href="/diagnostics">Diagnostic Insight</Link></li>
//         <li><Link href="/history">History & Records</Link></li>
//         <li><Link href="/templates">Data Templates</Link></li>
//         <li><Link href="/start">Get started</Link></li>

//         {/* 🌍 Language Selector (added) */}
//         <li>
//           <div id="google_translate_element"></div>
//         </li>

//         <li>
//           <Link href={"/login"}>login</Link>
//         </li>
//       </ul>
//     </nav>
//   )
// }
// "use client"

// import Link from 'next/link'
// import { useSession, signIn, signOut } from 'next-auth/react'
// import ThemeToggle from "./ThemeToggle"   // ✅ OPTIONAL (see below)

// export default function Navbar() {
//   const { data: session, status } = useSession()

//   return (
//     <nav className="
//       flex justify-between items-center 
//       bg-white dark:bg-slate-900 
//       text-black dark:text-white
//       border border-black dark:border-slate-700
//       h-20 px-6 transition-colors duration-300
//     ">
//       <div className="text-3xl font-semibold">
//         <Link href="/">DxAssist</Link>
//       </div>

//       <ul className="flex items-center space-x-6 opacity-90">

//         <li><Link href="/diagnostics">Diagnostic Insight</Link></li>
//         <li><Link href="/history">History & Records</Link></li>
//         <li><Link href="/templates">Data Templates</Link></li>
//         <li><Link href="/start">Get started</Link></li>

//         {/* 🌍 Google Translate */}
//         <li>
//           <div id="google_translate_element"></div>
//         </li>

//         <li>
//           <Link href="/login">login</Link>
//         </li>

//         {/* 🌙 Theme Toggle (OPTIONAL but recommended) */}
//         <li>
//           <ThemeToggle />
//         </li>

//       </ul>
//     </nav>
//   )
// }
// "use client"

// import Link from "next/link"
// import { useSession, signIn, signOut } from "next-auth/react"
// import ThemeToggle from "./ThemeToggle"

// export default function Navbar() {
//   const { data: session, status } = useSession()

//   return (
//     <nav
//       className="
//         flex justify-between items-center
//         sticky top-0 z-50
//         h-20 px-8

//         bg-white/70 dark:bg-slate-900/70
//         backdrop-blur-xl

//         text-black dark:text-white
//         border-b border-black/10 dark:border-slate-700/50

//         shadow-lg shadow-black/5 dark:shadow-black/30
//         transition-all duration-500
//       "
//     >
//       {/* Logo */}
//       <div
//         className="
//           text-3xl font-bold tracking-wide
//           bg-gradient-to-r from-emerald-400 to-cyan-400
//           bg-clip-text text-transparent
//           hover:scale-105 transition-transform duration-300
//         "
//       >
//         <Link href="/">DxAssist</Link>
//       </div>

//       {/* Nav Links */}
//       <ul className="flex items-center gap-8 text-sm font-medium">
//         {[
//           { name: "Diagnostic Insight", href: "/diagnostics" },
//           { name: "History & Records", href: "/history" },
//           { name: "Data Templates", href: "/templates" },
//         ].map((item) => (
//           <li key={item.href} className="relative group">
//             <Link
//               href={item.href}
//               className="opacity-80 hover:opacity-100 transition"
//             >
//               {item.name}
//             </Link>
//             <span
//               className="
//                 absolute -bottom-1 left-0
//                 h-[2px] w-0
//                 bg-gradient-to-r from-emerald-400 to-cyan-400
//                 group-hover:w-full
//                 transition-all duration-300
//               "
//             />
//           </li>
//         ))}

//         {/* Get Started – CTA */}
//         <li>
//           <Link
//             href="/start"
//             className="
//               px-5 py-2 rounded-xl
//               bg-gradient-to-r from-emerald-400 to-cyan-400
//               text-black font-semibold
//               shadow-md hover:shadow-xl
//               hover:scale-105 active:scale-95
//               transition-all duration-300
//             "
//           >
//             Get started
//           </Link>
//         </li>

//         {/* Google Translate */}
//         <li
//           className="
//             px-3 py-1 rounded-lg
//             bg-black/5 dark:bg-white/10
//             backdrop-blur
//           "
//         >
//           <div id="google_translate_element"></div>
//         </li>

//         {/* Login */}
//         <li className="relative group">
//           <Link
//             href="/login"
//             className="opacity-80 hover:opacity-100 transition"
//           >
//             Login
//           </Link>
//           <span
//             className="
//               absolute -bottom-1 left-0
//               h-[2px] w-0
//               bg-gradient-to-r from-emerald-400 to-cyan-400
//               group-hover:w-full
//               transition-all duration-300
//             "
//           />
//         </li>

//         {/* Theme Toggle */}
//         <li className="hover:scale-110 transition-transform duration-300">
//           <ThemeToggle />
//         </li>
//       </ul>
//     </nav>
//   )
// }
"use client"

import Link from "next/link"
import { useSession, signIn, signOut } from "next-auth/react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const { data: session, status } = useSession()

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
      {/* GLOW LAYER */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/10 via-cyan-400/10 to-blue-400/10 blur-2xl opacity-70" />

      {/* LOGO */}
      <div
        className="
          relative text-3xl font-extrabold tracking-wide
          bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500
          bg-clip-text text-transparent
          hover:scale-110
          transition-transform duration-300
        "
      >
        <Link href="/">DxAssist</Link>
      </div>

      {/* NAV LINKS */}
      <ul className="relative flex items-center gap-10 text-sm font-semibold">
        {[
          { name: "Patient Queue", href: "/templates" },
          { name: "Clinical Analysis", href: "/diagnostics" },
          { name: "Medical Knowledge Base", href: "/history" },
        ].map((item) => (
          <li key={item.href} className="relative group">
            <Link
              href={item.href}
              className="
                opacity-80 hover:opacity-100
                transition-all duration-300
              "
            >
              {item.name}
            </Link>

            {/* Underline */}
            <span
              className="
                absolute -bottom-2 left-1/2 -translate-x-1/2
                h-[2px] w-0
                bg-gradient-to-r from-emerald-400 to-cyan-400
                rounded-full
                group-hover:w-full
                transition-all duration-300
              "
            />

            {/* Hover Glow */}
            <span
              className="
                absolute inset-x-0 -bottom-6
                h-6 opacity-0
                bg-gradient-to-r from-emerald-400/30 to-cyan-400/30
                blur-xl
                group-hover:opacity-100
                transition-opacity duration-300
              "
            />
          </li>
        ))}

        {/* GET STARTED – OG CTA */}
        <li className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition" />
          <Link
            href="/start"
            className="
              relative px-6 py-2.5 rounded-xl
              bg-gradient-to-r from-emerald-400 to-cyan-400
              text-black font-bold
              shadow-lg
              hover:scale-110 active:scale-95
              transition-all duration-300
            "
          >
            Get started
          </Link>
        </li>

        {/* GOOGLE TRANSLATE */}
        <li
          className="
            relative px-3 py-1.5 rounded-lg
            bg-black/5 dark:bg-white/10
            backdrop-blur
            hover:bg-black/10 dark:hover:bg-white/20
            transition
          "
        >
          <div id="google_translate_element"></div>
        </li>

        {/* LOGIN */}
        <li className="relative group">
          <Link
            href="/login"
            className="opacity-80 hover:opacity-100 transition"
          >
            Login
          </Link>
          <span
            className="
              absolute -bottom-2 left-1/2 -translate-x-1/2
              h-[2px] w-0
              bg-gradient-to-r from-emerald-400 to-cyan-400
              rounded-full
              group-hover:w-full
              transition-all duration-300
            "
          />
        </li>

        {/* THEME TOGGLE */}
        <li className="hover:scale-125 transition-transform duration-300">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  )
}
