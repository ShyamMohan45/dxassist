"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "../context/AuthContext"

export default function ChatPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, loading } = useAuth()

  const initialQuery = searchParams.get("q") || ""
  const [input, setInput] = useState(initialQuery)
  const [messages, setMessages] = useState([])
  const [streaming, setStreaming] = useState(false)

  const bottomRef = useRef(null)
  // 🚀 Auto-send query from URL once
useEffect(() => {
  if (initialQuery && user && messages.length === 0) {
    sendMessage()
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [initialQuery, user])


  // 🔐 Auth guard
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login")
    }
  }, [loading, user, router])

  // 🔽 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  async function sendMessage() {
    if (!input.trim() || streaming) return

    const userMessage = input
    setInput("")
    setStreaming(true)

    setMessages((prev) => [...prev, { role: "user", text: userMessage }])

    // Create empty bot message
    let botText = ""
    setMessages((prev) => [...prev, { role: "bot", text: "" }])

    try {
      const res = await fetch("http://127.0.0.1:8002/chat/stream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      })

      const reader = res.body.getReader()
      const decoder = new TextDecoder()

      while (true) {
        const { value, done } = await reader.read()
        if (done) break

        const chunk = decoder.decode(value)
        botText += chunk

        setMessages((prev) => {
          const copy = [...prev]
          copy[copy.length - 1] = { role: "bot", text: botText }
          return copy
        })
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Error connecting to AI service." },
      ])
    } finally {
      setStreaming(false)
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-[10vw] pt-24">
      <h1 className="text-3xl font-semibold mb-8">Clinical Assistant</h1>

      {/* CHAT BOX */}
      <div className="space-y-6 mb-32">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
            <p className="inline-block max-w-3xl px-4 py-3 rounded-xl bg-white/10">
              <b>{m.role === "user" ? "You" : "DxAssist"}:</b> {m.text}
            </p>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="fixed bottom-0 left-0 right-0 bg-black px-[10vw] py-6">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask a clinical question…"
          className="
            w-full bg-transparent border-b border-slate-500
            py-4 text-lg text-white
            focus:outline-none focus:border-teal-400
          "
        />
      </div>
    </main>
  )
}
