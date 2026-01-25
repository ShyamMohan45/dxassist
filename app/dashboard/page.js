
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  User,
  FileText,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, rotateX: -10 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

export default function DashboardPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    lastLogin: "",
    docs: 0,
  });

  const [clinical, setClinical] = useState({
    summary: "",
    condition: "",
    severity: "",
    lastAnalyzed: "",
  });

  const [analyses, setAnalyses] = useState([]);
  const [showAllHistory, setShowAllHistory] = useState(false);
  const [searchEmail, setSearchEmail] = useState("");
  const [error, setError] = useState("");

  const fetchDashboard = () => {
    const url = searchEmail
      ? `/api/dashboard?email=${encodeURIComponent(searchEmail)}`
      : "/api/dashboard";

    fetch(url)
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.message);
        }
        return res.json();
      })
      .then((data) => {
        setError("");
        setUser(data.user);
        setClinical(data.clinical);
        setAnalyses(data.analyses || []);
      })
      .catch((err) => {
        setAnalyses([]);
        setError(err.message);

        if (err.message.includes("admin")) {
          setTimeout(() => router.push("/login"), 2000);
        }
      });
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (error.includes("admin")) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <div className="p-8 rounded-xl border border-slate-300 bg-white shadow-lg text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-2">
            Access Denied
          </h2>
          <p className="text-slate-700">
            This dashboard is only for admin users.
          </p>
        </div>
      </div>
    );
  }

  return (
    <motion.main
      variants={container}
      initial="hidden"
      animate="show"
      className="
        min-h-screen
        bg-gradient-to-b from-slate-100 via-slate-50 to-white
        px-8 py-12
        text-slate-900
      "
    >
      {/* ================= ADMIN SEARCH ================= */}
      <section className="mb-8">
        <input
          type="email"
          placeholder="Enter user email (admin)"
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="
            border border-slate-300
            px-4 py-2 rounded w-80
            bg-white text-slate-900
            placeholder-slate-400
            shadow-sm
          "
        />
        <button
          onClick={() => {
            setShowAllHistory(false);
            fetchDashboard();
          }}
          className="
            ml-3 px-4 py-2 rounded
            bg-indigo-600 text-white
            shadow hover:bg-indigo-700
          "
        >
          Search
        </button>

        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </section>

      {/* ================= USER OVERVIEW ================= */}
      <section className="mb-14">
        <h2 className="text-xl font-semibold mb-6">User Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Info icon={<User />} label="User email" value={user.email} />
          <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
          <Info icon={<FileText />} label="Documents" value={user.docs} />
        </div>
      </section>

      {/* ================= CLINICAL SNAPSHOT ================= */}
      <section className="mb-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            Clinical Snapshot of last analysis
          </h2>
          <button
            onClick={() => setShowAllHistory(!showAllHistory)}
            className="
              px-4 py-2 rounded-lg
              text-sm font-medium
              bg-indigo-600 text-white
              hover:bg-indigo-700
              transition-colors
            "
          >
            {showAllHistory ? "Hide all history" : "View all history"}
          </button>
        </div>

        <motion.div
          variants={card}
          initial="hidden"
          animate="show"
          className="
            rounded-2xl
            border border-slate-300
            bg-white
            p-6
            shadow-lg
          "
        >
          <p className="font-semibold mb-4 text-slate-900">
            {clinical.summary}
          </p>
          <div className="flex gap-6 text-sm text-slate-700">
            <span><strong>Condition:</strong> {clinical.condition}</span>
            <span><strong>Severity:</strong> {clinical.severity}</span>
            <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
          </div>
        </motion.div>
      </section>

      {showAllHistory && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-6">
            All Analysis History ({analyses.length})
          </h2>
          <div className="space-y-4">
            {analyses.length > 0 ? (
              analyses.map((item, i) => (
                <motion.div
                  key={i}
                  variants={card}
                  initial="hidden"
                  animate="show"
                  className="
                    rounded-xl
                    border border-slate-300
                    bg-white
                    p-5
                    shadow-md
                    hover:shadow-lg
                    transition-shadow
                  "
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <p className="font-medium text-slate-900 leading-relaxed">
                        {item.summary}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">
                        📅 {new Date(item.created_at).toLocaleString()}
                      </p>
                    </div>
                    <span className="text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded">
                      #{i + 1}
                    </span>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-slate-600 text-center py-8">
                No analysis history available
              </p>
            )}
          </div>
          
          {/* Hide Button at Bottom */}
          <button
            onClick={() => setShowAllHistory(false)}
            className="
              mt-6 px-4 py-2 rounded-lg
              text-sm font-medium
              bg-slate-300 text-slate-900
              hover:bg-slate-400
              transition-colors
            "
          >
            Hide all history
          </button>
        </section>
      )}

      {/* ================= SECURITY ================= */}
      <section className="mt-16">
        <motion.div
          className="
            flex gap-4
            rounded-2xl
            border border-slate-300
            bg-white
            p-6
            shadow-md
          "
        >
          <ShieldCheck className="text-emerald-600" />
          <div className="text-slate-700">
            <p>• Encrypted & isolated data</p>
            <p>• Account-based access</p>
            <p>• Zero cross-user sharing</p>
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}

function Info({ icon, label, value }) {
  return (
    <motion.div
      className="
        rounded-2xl
        border border-slate-300
        bg-white
        p-5
        shadow-md
      "
    >
      <div className="flex items-center gap-2 mb-2 text-indigo-600">
        {icon}
        <p className="text-xs uppercase text-slate-500">{label}</p>
      </div>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </motion.div>
  );
}
