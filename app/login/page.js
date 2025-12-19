"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!data.success) {
        toast.error("Invalid credentials");
        return;
      }

      setUser(data.user); // 🔥 instant navbar update
      toast.success("Login successful!");
      router.push("/");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7fbfa]">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded"
          />

          <button className="w-full bg-teal-600 text-white py-2 rounded">
            Login
          </button>
        </form>

        <p className="text-center mt-4">
          Don’t have an account? <Link href="/signup">Sign up</Link>
        </p>
      </div>
    </main>
  );
}
