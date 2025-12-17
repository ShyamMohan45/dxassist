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
"use client"

import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import ThemeToggle from "./ThemeToggle"   // ✅ OPTIONAL (see below)

export default function Navbar() {
  const { data: session, status } = useSession()

  return (
    <nav className="
      flex justify-between items-center 
      bg-white dark:bg-slate-900 
      text-black dark:text-white
      border border-black dark:border-slate-700
      h-20 px-6 transition-colors duration-300
    ">
      <div className="text-3xl font-semibold">
        <Link href="/">DxAssist</Link>
      </div>

      <ul className="flex items-center space-x-6 opacity-90">

        <li><Link href="/diagnostics">Diagnostic Insight</Link></li>
        <li><Link href="/history">History & Records</Link></li>
        <li><Link href="/templates">Data Templates</Link></li>
        <li><Link href="/start">Get started</Link></li>

        {/* 🌍 Google Translate */}
        <li>
          <div id="google_translate_element"></div>
        </li>

        <li>
          <Link href="/login">login</Link>
        </li>

        {/* 🌙 Theme Toggle (OPTIONAL but recommended) */}
        <li>
          <ThemeToggle />
        </li>

      </ul>
    </nav>
  )
}
