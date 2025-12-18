"use client"

import { useParams } from "next/navigation"
import { useState } from "react"

export default function ResetPassword() {
  const { token } = useParams()
  const [password, setPassword] = useState("")

  const submit = async () => {
    await fetch("/api/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, password }),
    })
    alert("Password updated")
  }

  return (
    <div>
      <input
        type="password"
        placeholder="New password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submit}>Reset</button>
    </div>
  )
}
