// "use client";

// import { motion } from "framer-motion";
// import {
//   LineChart,
//   Line,
//   ResponsiveContainer,
//   Tooltip,
// } from "recharts";
// import {
//   Sparkles,
//   Users,
//   Activity,
//   FileText,
//   TrendingUp,
//   Brain,
// } from "lucide-react";

// /* ================= DATA ================= */
// const analytics = [
//   { value: 300 },
//   { value: 500 },
//   { value: 800 },
//   { value: 700 },
//   { value: 1200 },
//   { value: 900 },
//   { value: 1400 },
// ];

// export default function Dashboard() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-[#020617] text-white">

//       {/* ================= AURORA BACKGROUND ================= */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-emerald-500/20 blur-[200px] rounded-full" />
//         <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-cyan-500/20 blur-[200px] rounded-full" />
//         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black" />
//       </div>

//       <div className="relative z-10 px-8 py-12 max-w-[1400px] mx-auto">

//         {/* ================= HEADER ================= */}
//         <motion.header
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-16"
//         >
//           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl mb-6">
//             <Sparkles className="w-4 h-4 text-cyan-400" />
//             <span className="text-sm text-white/80">
//               AI-Powered Smart Dashboard
//             </span>
//           </div>

//           <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
//             System <span className="text-cyan-400">Intelligence</span>
//           </h1>

//           <p className="mt-4 max-w-2xl text-white/60 text-lg">
//             Real-time analytics, predictive insights and intelligent system
//             monitoring in one unified dashboard.
//           </p>
//         </motion.header>

//         {/* ================= KPI GRID ================= */}
//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
//           <KPI icon={<Users />} title="Total Users" value="14,280" />
//           <KPI icon={<FileText />} title="Documents Processed" value="6,412" />
//           <KPI icon={<Activity />} title="Live Sessions" value="1,024" />
//           <KPI icon={<TrendingUp />} title="Weekly Growth" value="+34%" />
//         </section>

//         {/* ================= MAIN GRID ================= */}
//         <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">

//           {/* ================= ANALYTICS ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="lg:col-span-2 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-2xl p-10 shadow-[0_0_80px_rgba(34,211,238,0.08)]"
//           >
//             <h2 className="text-3xl font-semibold mb-8">
//               Activity Intelligence
//             </h2>

//             <div className="h-[300px]">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart data={analytics}>
//                   <Tooltip />
//                   <Line
//                     type="monotone"
//                     dataKey="value"
//                     stroke="#22d3ee"
//                     strokeWidth={4}
//                     dot={false}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </motion.div>

//           {/* ================= AI INSIGHTS ================= */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-2xl p-10 shadow-[0_0_80px_rgba(16,185,129,0.08)]"
//           >
//             <div className="flex items-center gap-3 mb-6">
//               <Brain className="text-emerald-400" />
//               <h2 className="text-3xl font-semibold">AI Insights</h2>
//             </div>

//             <ul className="space-y-6 text-white/80">
//               <Insight text="User engagement increased by 18% this week." />
//               <Insight text="Peak traffic detected between 7–9 PM." />
//               <Insight text="System stability score is excellent (99.1%)." />
//               <Insight text="AI recommends scaling analytics engine." />
//             </ul>
//           </motion.div>
//         </section>
//       </div>
//     </main>
//   );
// }

// /* ================= COMPONENTS ================= */

// function KPI({ icon, title, value }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.05 }}
//       className="relative rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl p-8 overflow-hidden shadow-xl"
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-emerald-400/10 opacity-0 hover:opacity-100 transition" />

//       <div className="relative z-10">
//         <div className="mb-4 p-3 w-fit rounded-xl bg-white/10">
//           {icon}
//         </div>
//         <p className="text-white/60 text-sm">{title}</p>
//         <p className="text-4xl font-bold mt-1">{value}</p>
//       </div>
//     </motion.div>
//   );
// }

// function Insight({ text }) {
//   return (
//     <li className="flex gap-3">
//       <span className="text-emerald-400">●</span>
//       <span>{text}</span>
//     </li>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import {
  User,
  FileText,
  Mic,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

/* ================= PAGE ================= */

export default function DashboardPage() {
  const [user] = useState({
    name: "Shyam Mohan",
    lastLogin: "Today, 09:42 AM",
    docs: 18,
    voice: 6,
  });

  const [clinical] = useState({
    summary:
      "Vitals are stable. Mild elevation in heart rate observed during activity.",
    condition: "No Critical Condition",
    severity: "green", // green | yellow | red
    lastAnalyzed: "2 minutes ago",
  });

  const [voice] = useState({
    lastQuestion: "Is my heart rate normal?",
    response:
      "Your heart rate is within a healthy range for light physical activity.",
    status: "Idle", // Idle | Listening | Responding
  });

  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900 px-8 py-10">

      {/* ================= USER OVERVIEW ================= */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">
          User Overview
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <Info label="User Name" value={user.name} />
          <Info label="Last Login" value={user.lastLogin} />
          <Info label="Documents Analyzed" value={user.docs} />
          <Info label="Voice Interactions" value={user.voice} />
        </div>
      </section>

      {/* ================= CLINICAL SNAPSHOT ================= */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">
          Clinical Snapshot
        </h2>

        <div
          className={`border rounded-lg p-5 ${
            clinical.severity === "green"
              ? "border-emerald-400 bg-emerald-50"
              : clinical.severity === "yellow"
              ? "border-yellow-400 bg-yellow-50"
              : "border-red-400 bg-red-50"
          }`}
        >
          <p className="font-medium mb-2">
            {clinical.summary}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-slate-700">
            <span>
              <strong>Condition:</strong> {clinical.condition}
            </span>
            <span>
              <strong>Severity:</strong>{" "}
              {clinical.severity.toUpperCase()}
            </span>
            <span>
              <strong>Last Analysis:</strong>{" "}
              {clinical.lastAnalyzed}
            </span>
          </div>
        </div>
      </section>

      {/* ================= VOICE ASSISTANT ================= */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold mb-4">
          Voice Assistant Status
        </h2>

        <div className="border rounded-lg p-5 bg-white">
          <Row
            icon={<Mic size={16} />}
            label="Last Voice Question"
            value={voice.lastQuestion}
          />
          <Row
            icon={<FileText size={16} />}
            label="AI Response Summary"
            value={voice.response}
          />
          <Row
            icon={<AlertCircle size={16} />}
            label="Assistant Status"
            value={voice.status}
          />
        </div>
      </section>

      {/* ================= EXPLAINABILITY ================= */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold mb-4">
          Explainability & Trust
        </h2>

        <ul className="text-sm text-slate-700 space-y-2">
          <li>• AI insights are evidence-based</li>
          <li>• Citations available in detailed reports</li>
          <li>• This system does not provide medical diagnosis</li>
        </ul>
      </section>

      {/* ================= SECURITY ================= */}
      <section>
        <h2 className="text-lg font-semibold mb-4">
          Security & Privacy
        </h2>

        <div className="border rounded-lg p-5 bg-white flex gap-4 items-start">
          <ShieldCheck className="text-emerald-600 mt-1" />
          <div className="text-sm text-slate-700">
            <p>• Your data is private and user-isolated</p>
            <p>• Each analysis is linked to your account</p>
            <p>• No data is shared across users</p>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Info({ label, value }) {
  return (
    <div className="bg-white border rounded-lg p-4">
      <p className="text-slate-500 text-xs mb-1">
        {label}
      </p>
      <p className="font-semibold">{value}</p>
    </div>
  );
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 mb-3 text-sm">
      <span className="text-slate-400">{icon}</span>
      <div>
        <p className="text-slate-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
