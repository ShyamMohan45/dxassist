"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function SignUpPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/register-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await res.json();
      if (!data.success) {
        toast.error(data.message || "Signup failed");
        return;
      }

      // auto-login
      const loginRes = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formValues.email,
          password: formValues.password,
        }),
      });

      const loginData = await loginRes.json();
      setUser(loginData.user); // 🔥 instant navbar update

      toast.success("Account created!");
      router.push("/");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7fbfa] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl text-center mb-6">Create Account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="username" placeholder="Username" onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 rounded" />
          <input name="mobile" placeholder="Mobile" onChange={handleChange} className="w-full border p-2 rounded" />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full border p-2 rounded" />

          <button className="w-full bg-teal-600 text-white py-2 rounded">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4">
          Already have an account? <Link href="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}
