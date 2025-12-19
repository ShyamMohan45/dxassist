"use client"
import { Link } from "lucide-react"
import { signIn } from "next-auth/react"

export default function GoogleSignButton() {
  return (
   
    <button
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3"
      onClick={() => signIn('google')}
    >
      Try it now
    </button>
    
  )
}
