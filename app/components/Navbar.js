"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, loading, setUser } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    setUser(null);
    router.push("/");
  };

  if (loading) return null;

  return (
    <nav className="flex justify-between items-center h-20 px-10 bg-white shadow">
      <Link href="/" className="text-3xl font-bold text-emerald-500">
        DxAssist
      </Link>

      <ul className="flex items-center gap-6 font-semibold">
        <Link href="/history">History</Link>
        <Link href="/diagnostics">Diagnostics</Link>
        <Link href="/templates">Templates</Link>

        {user ? (
          <>
            <span className="text-emerald-600">Hi, {user.name}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link href="/login">Login</Link>
            <Link href="/signup">Signup</Link>
          </>
        )}

        <ThemeToggle />
      </ul>
    </nav>
  );
}
