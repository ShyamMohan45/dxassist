"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ResetPasswordPage() {
  const { token } = useParams();
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async () => {
    if (!password || password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Password updated successfully!");
        router.push("/login");
      } else {
        toast.error(data.message || "Invalid or expired link");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f7fbfa] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-serif text-center text-teal-900 mb-6">
          Reset Password
        </h2>

        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border rounded-md px-3 py-2 mb-4 focus:ring-2 focus:ring-teal-400"
        />

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 disabled:opacity-60"
        >
          {loading ? "Updating..." : "Reset Password"}
        </button>
      </div>
    </main>
  );
}
