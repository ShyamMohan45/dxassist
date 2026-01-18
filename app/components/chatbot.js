"use client"

import { useEffect, useState } from "react"

export default function Chatbot({ initialQuery }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (initialQuery) {
      setMessages([
        { role: "user", text: initialQuery },
        { role: "bot", text: "Preparing clinical response…" },
      ])
    }
  }, [initialQuery])

  return (
    <div className="px-[10vw] py-24">
      <h2 className="text-2xl font-semibold mb-6">
        Clinical Assistant
      </h2>

      <div className="border rounded-lg p-6 space-y-4 bg-white">
        {messages.map((m, i) => (
          <p key={i}>
            <b>{m.role === "user" ? "You" : "DxAssist"}:</b>{" "}
            {m.text}
          </p>
        ))}
      </div>
    </div>
  )
}
