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



// "use client";

// import { useEffect, useState } from "react";
// import {
//   User,
//   FileText,
//   Mic,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= PAGE ================= */

// export default function DashboardPage() {
//   const [user] = useState({
//     email: "hello@gmail.com",
//     lastLogin: "Today, 09:42 AM",
//     docs: 18,
//     voice: 6,
//   });

//   const [clinical] = useState({
//     summary:
//       "Vitals are stable. Mild elevation in heart rate observed during activity.",
//     condition: "No Critical Condition",
//     severity: "green", // green | yellow | red
//     lastAnalyzed: "2 minutes ago",
//   });

//   const [voice] = useState({
//     lastQuestion: "Is my heart rate normal?",
//     response:
//       "Your heart rate is within a healthy range for light physical activity.",
//     status: "Idle", // Idle | Listening | Responding
//   });

//   return (
//     <main className="min-h-screen bg-[#f8fafc] text-slate-900 px-8 py-10">

//       {/* ================= USER OVERVIEW ================= */}
//       <section className="mb-10">
//         <h2 className="text-lg font-semibold mb-4">
//           User Overview
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
//           <Info label="User Email" value={user.email} />
//           <Info label="Last Login" value={user.lastLogin} />
//           <Info label="Documents Analyzed" value={user.docs} />
//           <Info label="Voice Interactions" value={user.voice} />
//         </div>
//       </section>

//       {/* ================= CLINICAL SNAPSHOT ================= */}
//       <section className="mb-12">
//         <h2 className="text-lg font-semibold mb-4">
//           Clinical Snapshot
//         </h2>

//         <div
//           className={`border rounded-lg p-5 ${
//             clinical.severity === "green"
//               ? "border-emerald-400 bg-emerald-50"
//               : clinical.severity === "yellow"
//               ? "border-yellow-400 bg-yellow-50"
//               : "border-red-400 bg-red-50"
//           }`}
//         >
//           <p className="font-medium mb-2">
//             {clinical.summary}
//           </p>

//           <div className="flex flex-wrap gap-6 text-sm text-slate-700">
//             <span>
//               <strong>Condition:</strong> {clinical.condition}
//             </span>
//             <span>
//               <strong>Severity:</strong>{" "}
//               {clinical.severity.toUpperCase()}
//             </span>
//             <span>
//               <strong>Last Analysis:</strong>{" "}
//               {clinical.lastAnalyzed}
//             </span>
//           </div>
//         </div>
//       </section>

//       {/* ================= VOICE ASSISTANT ================= */}
//       <section className="mb-12">
//         <h2 className="text-lg font-semibold mb-4">
//           Voice Assistant Status
//         </h2>

//         <div className="border rounded-lg p-5 bg-white">
//           <Row
//             icon={<Mic size={16} />}
//             label="Last Voice Question"
//             value={voice.lastQuestion}
//           />
//           <Row
//             icon={<FileText size={16} />}
//             label="AI Response Summary"
//             value={voice.response}
//           />
//           <Row
//             icon={<AlertCircle size={16} />}
//             label="Assistant Status"
//             value={voice.status}
//           />
//         </div>
//       </section>

//       {/* ================= EXPLAINABILITY ================= */}
//       <section className="mb-10">
//         <h2 className="text-lg font-semibold mb-4">
//           Explainability & Trust
//         </h2>

//         <ul className="text-sm text-slate-700 space-y-2">
//           <li>• AI insights are evidence-based</li>
//           <li>• Citations available in detailed reports</li>
//           <li>• This system does not provide medical diagnosis</li>
//         </ul>
//       </section>

//       {/* ================= SECURITY ================= */}
//       <section>
//         <h2 className="text-lg font-semibold mb-4">
//           Security & Privacy
//         </h2>

//         <div className="border rounded-lg p-5 bg-white flex gap-4 items-start">
//           <ShieldCheck className="text-emerald-600 mt-1" />
//           <div className="text-sm text-slate-700">
//             <p>• Your data is private and user-isolated</p>
//             <p>• Each analysis is linked to your account</p>
//             <p>• No data is shared across users</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

// /* ================= COMPONENTS ================= */

// function Info({ label, value }) {
//   return (
//     <div className="bg-white border rounded-lg p-4">
//       <p className="text-slate-500 text-xs mb-1">
//         {label}
//       </p>
//       <p className="font-semibold">{value}</p>
//     </div>
//   );
// }

// function Row({ icon, label, value }) {
//   return (
//     <div className="flex items-start gap-3 mb-3 text-sm">
//       <span className="text-slate-400">{icon}</span>
//       <div>
//         <p className="text-slate-500">{label}</p>
//         <p className="font-medium">{value}</p>
//       </div>
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import Link from "next/link";

// export default function AdminDashboard() {
//   const [email, setEmail] = useState("");
//   const [patient, setPatient] = useState(null);
//   const [error, setError] = useState("");

//   async function searchPatient() {
//     setError("");
//     setPatient(null);

//     const key = sessionStorage.getItem("admin_key");
//     if (!key) {
//       setError("Admin not logged in");
//       return;
//     }

//     const res = await fetch(
//       `http://127.0.0.1:8001/admin/dashboard?patient_email=${email}`,
//       {
//         headers: {
//           "x-admin-key": key,
//         },
//       }
//     );

//     const data = await res.json();

//     if (!res.ok) {
//       setError(data.detail);
//     } else {
//       setPatient(data);
//     }
//   }

//   return (
//     <main className="min-h-screen bg-black text-white p-10">
//       <h1 className="text-4xl font-bold mb-2">Admin Patient Dashboard</h1>
//       <p className="text-white/60 mb-8">
//         Search patients to view clinical activity
//       </p>

//       <div className="flex gap-4 mb-6">
//         <input
//           className="flex-1 p-3 rounded text-black"
//           placeholder="Enter patient email"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <button
//           onClick={searchPatient}
//           className="bg-teal-500 px-6 py-3 rounded font-semibold"
//         >
//           Search
//         </button>
//       </div>

//       {error && <p className="text-red-500">{error}</p>}

//       {patient && (
//         <div className="border border-white/20 rounded-lg p-6 mt-6">
//           <p><b>Email:</b> {patient.email}</p>
//           <p><b>Last Login:</b> {patient.last_login || "N/A"}</p>
//           <p><b>Documents Analyzed:</b> {patient.documents_analyzed}</p>

//           <div className="mt-4">
//             <p className="font-semibold">Last Analysis</p>
//             <p className="text-white/70">
//               {patient.last_analysis?.summary || "No analysis yet"}
//             </p>
//           </div>

//           <Link
//             href={`/admin/patient-history?email=${patient.email}`}
//             className="inline-block mt-4 text-blue-400 underline"
//           >
//             View Full History →
//           </Link>
//         </div>
//       )}
//     </main>
//   );
// }




// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   User,
//   FileText,
//   Mic,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// /* ================= PAGE ================= */

// export default function DashboardPage() {
//   const [user] = useState({
//     email: "hello@gmail.com",
//     lastLogin: "Today, 09:42 AM",
//     docs: 18,
//   });

//   const [clinical] = useState({
//     summary:
//       "Vitals are stable. Mild elevation in heart rate observed during activity.",
//     condition: "No Critical Condition",
//     severity: "green",
//     lastAnalyzed: "2 minutes ago",
//   });

//   const [voice] = useState({
//     lastQuestion: "Is my heart rate normal?",
//     response:
//       "Your heart rate is within a healthy range for light physical activity.",
//     status: "Idle",
//   });

//   return (
//     <motion.main
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="
//         min-h-screen relative overflow-hidden
//         bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_45%)]
//         px-8 py-12 text-slate-900
//       "
//     >
//       {/* ================= USER OVERVIEW ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">User Overview</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <Info icon={<User />} label="User email" value={user.email} />
//           <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
//           <Info icon={<FileText />} label="Documents" value={user.docs} />
//         </div>
//       </section>

//       {/* ================= CLINICAL SNAPSHOT ================= */}
//       <section className="mb-16">
//         <h2 className="text-xl font-semibold mb-6">Clinical Snapshot</h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.04 }}
//           className="
//             relative rounded-2xl p-[2px]
//             bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400
//           "
//         >
//           <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl p-6">

//             {/* Pulse indicator */}
//             <span className="absolute top-4 right-4">
//               <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 animate-ping" />
//               <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
//             </span>

//             <p className="font-semibold mb-4">
//               {clinical.summary}
//             </p>

//             {/* Animated Progress */}
//             <div className="mb-4">
//               <p className="text-xs text-slate-500 mb-1">Risk Severity</p>
//               <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "28%" }}
//                   transition={{ duration: 1.2, ease: "easeOut" }}
//                   className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-6 text-sm text-slate-700">
//               <span><strong>Condition:</strong> {clinical.condition}</span>
//               <span><strong>Severity:</strong> GREEN</span>
//               <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= VOICE ASSISTANT ================= */}
//       {/* <section className="mb-16">
//         <h2 className="text-xl font-semibold mb-6">Voice Assistant</h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.03 }}
//           className="
//             rounded-2xl border bg-white/80 backdrop-blur-xl
//             p-6 shadow-lg
//           "
//         >
//           <div className="flex items-center gap-4 mb-6">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1], rotate: [0, 8, -8, 0] }}
//               transition={{ repeat: Infinity, duration: 2 }}
//               className="
//                 h-12 w-12 rounded-full
//                 bg-indigo-500/20 flex items-center justify-center
//               "
//             >
//               <Mic className="text-indigo-600" />
//             </motion.div>

//             <p className="text-sm text-slate-600">
//               Listening for voice input...
//             </p>
//           </div>

//           <Row label="Last Question" value={voice.lastQuestion} />
//           <Row label="AI Response" value={voice.response} />
//           <Row label="Status" value={voice.status} />
//         </motion.div>
//       </section> */}

//       {/* ================= EXPLAINABILITY ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">Explainability & Trust</h2>

//         <motion.ul
//           variants={container}
//           className="space-y-3 text-sm text-slate-700"
//         >
//           <motion.li variants={card}>✔ Evidence-based AI insights</motion.li>
//           <motion.li variants={card}>✔ Transparent citations</motion.li>
//           <motion.li variants={card}>✔ Not a diagnostic system</motion.li>
//         </motion.ul>
//       </section>

//       {/* ================= SECURITY ================= */}
//       <section>
//         <h2 className="text-xl font-semibold mb-6">Security & Privacy</h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.02 }}
//           className="
//             flex gap-4 rounded-2xl border
//             bg-white/80 backdrop-blur-xl p-6
//           "
//         >
//           <ShieldCheck className="text-emerald-600" />
//           <div className="text-sm text-slate-700 space-y-1">
//             <p>• Encrypted & isolated data</p>
//             <p>• Account-based access</p>
//             <p>• Zero cross-user sharing</p>
//           </div>
//         </motion.div>
//       </section>
//     </motion.main>
//   );
// }

// /* ================= COMPONENTS ================= */

// function Info({ icon, label, value }) {
//   return (
//     <motion.div
//       variants={card}
//       whileHover={{
//         y: -10,
//         rotateX: 8,
//         rotateY: -8,
//         scale: 1.05,
//       }}
//       transition={{ type: "spring", stiffness: 180 }}
//       className="
//         group relative rounded-2xl border
//         bg-white/70 backdrop-blur-xl
//         p-5 shadow-lg transform-gpu perspective-1000
//       "
//     >
//       <div className="flex items-center gap-2 mb-2 text-indigo-500">
//         {icon}
//         <p className="text-xs uppercase tracking-widest text-slate-500">
//           {label}
//         </p>
//       </div>
//       <p className="text-xl font-bold">{value}</p>
//     </motion.div>
//   );
// }

// function Row({ label, value }) {
//   return (
//     <div className="mb-4">
//       <p className="text-xs text-slate-500">{label}</p>
//       <p className="font-medium">{value}</p>
//     </div>
//   );
// }








// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   User,
//   FileText,
//   Mic,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// /* ================= PAGE ================= */

// export default function DashboardPage() {
//   const router = useRouter();

//   /* ===== USER STATE (FROM BACKEND) ===== */
//   const [user, setUser] = useState({
//     email: "",
//     lastLogin: "",
//     docs: 0,
//   });

//   /* ===== CLINICAL STATE (FROM BACKEND) ===== */
//   const [clinical, setClinical] = useState({
//     summary: "",
//     condition: "",
//     severity: "",
//     lastAnalyzed: "",
//   });

//   /* ===== FETCH DASHBOARD DATA ===== */
//   useEffect(() => {
//     fetch("/api/dashboard")
//       .then((res) => {
//         if (!res.ok) {
//           router.push("/login");
//           return null;
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (!data) return;
//         setUser(data.user);
//         setClinical(data.clinical);
//       })
//       .catch(() => router.push("/login"));
//   }, [router]);

//   return (
//     <motion.main
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="
//         min-h-screen relative overflow-hidden
//         bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_45%)]
//         px-8 py-12 text-slate-900
//       "
//     >
//       {/* ================= USER OVERVIEW ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">User Overview</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <Info icon={<User />} label="User email" value={user.email} />
//           <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
//           <Info icon={<FileText />} label="Documents" value={user.docs} />
//         </div>
//       </section>

//       {/* ================= CLINICAL SNAPSHOT ================= */}
//       <section className="mb-16">
//         <h2 className="text-xl font-semibold mb-6">Clinical Snapshot of last analysis </h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.04 }}
//           className="
//             relative rounded-2xl p-[2px]
//             bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400
//           "
//         >
//           <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl p-6">

//             {/* Pulse indicator */}
//             <span className="absolute top-4 right-4">
//               <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 animate-ping" />
//               <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
//             </span>

//             <p className="font-semibold mb-4">
//               {clinical.summary}
//             </p>

//             {/* Animated Progress */}
//             <div className="mb-4">
//               <p className="text-xs text-slate-500 mb-1">Risk Severity</p>
//               <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "28%" }}
//                   transition={{ duration: 1.2, ease: "easeOut" }}
//                   className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-6 text-sm text-slate-700">
//               <span><strong>Condition:</strong> {clinical.condition}</span>
//               <span><strong>Severity:</strong> GREEN</span>
//               <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= EXPLAINABILITY ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">Explainability & Trust</h2>

//         <motion.ul
//           variants={container}
//           className="space-y-3 text-sm text-slate-700"
//         >
//           <motion.li variants={card}>✔ Evidence-based AI insights</motion.li>
//           <motion.li variants={card}>✔ Transparent citations</motion.li>
//           <motion.li variants={card}>✔ Not a diagnostic system</motion.li>
//         </motion.ul>
//       </section>

//       {/* ================= SECURITY ================= */}
//       <section>
//         <h2 className="text-xl font-semibold mb-6">Security & Privacy</h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.02 }}
//           className="
//             flex gap-4 rounded-2xl border
//             bg-white/80 backdrop-blur-xl p-6
//           "
//         >
//           <ShieldCheck className="text-emerald-600" />
//           <div className="text-sm text-slate-700 space-y-1">
//             <p>• Encrypted & isolated data</p>
//             <p>• Account-based access</p>
//             <p>• Zero cross-user sharing</p>
//           </div>
//         </motion.div>
//       </section>
//     </motion.main>
//   );
// }

// /* ================= COMPONENTS ================= */

// function Info({ icon, label, value }) {
//   return (
//     <motion.div
//       variants={card}
//       whileHover={{
//         y: -10,
//         rotateX: 8,
//         rotateY: -8,
//         scale: 1.05,
//       }}
//       transition={{ type: "spring", stiffness: 180 }}
//       className="
//         group relative rounded-2xl border
//         bg-white/70 backdrop-blur-xl
//         p-5 shadow-lg transform-gpu perspective-1000
//       "
//     >
//       <div className="flex items-center gap-2 mb-2 text-indigo-500">
//         {icon}
//         <p className="text-xs uppercase tracking-widest text-slate-500">
//           {label}
//         </p>
//       </div>
//       <p className="text-xl font-bold">{value}</p>
//     </motion.div>
//   );
// }


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   User,
//   FileText,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// /* ================= PAGE ================= */

// export default function DashboardPage() {
//   const router = useRouter();

//   /* ===== USER STATE ===== */
//   const [user, setUser] = useState({
//     email: "",
//     lastLogin: "",
//     docs: 0,
//   });

//   /* ===== LAST ANALYSIS (SNAPSHOT) ===== */
//   const [clinical, setClinical] = useState({
//     summary: "",
//     condition: "",
//     severity: "",
//     lastAnalyzed: "",
//   });

//   /* ===== ALL ANALYSIS HISTORY ===== */
//   const [analyses, setAnalyses] = useState([]);
//   const [showAllHistory, setShowAllHistory] = useState(false);

//   /* ===== FETCH DASHBOARD DATA ===== */
//   useEffect(() => {
//     fetch("/api/dashboard")
//       .then((res) => {
//         if (!res.ok) {
//           router.push("/login");
//           return null;
//         }
//         return res.json();
//       })
//       .then((data) => {
//         if (!data) return;
//         setUser(data.user);
//         setClinical(data.clinical);
//         setAnalyses(data.analyses || []);
//       })
//       .catch(() => router.push("/login"));
//   }, [router]);

//   return (
//     <motion.main
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="
//         min-h-screen relative overflow-hidden
//         bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_45%)]
//         px-8 py-12 text-slate-900
//       "
//     >
//       {/* ================= USER OVERVIEW ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">User Overview</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <Info icon={<User />} label="User email" value={user.email} />
//           <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
//           <Info icon={<FileText />} label="Documents" value={user.docs} />
//         </div>
//       </section>

//       {/* ================= CLINICAL SNAPSHOT ================= */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-6">
//           Clinical Snapshot of last analysis
//         </h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.04 }}
//           className="
//             relative rounded-2xl p-[2px]
//             bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400
//           "
//         >
//           <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl p-6">
//             {/* Pulse indicator */}
//             <span className="absolute top-4 right-4">
//               <span className="absolute inline-flex h-4 w-4 rounded-full bg-emerald-400 animate-ping" />
//               <span className="relative inline-flex h-4 w-4 rounded-full bg-emerald-500" />
//             </span>

//             <p className="font-semibold mb-4">
//               {clinical.summary}
//             </p>

//             <div className="mb-4">
//               <p className="text-xs text-slate-500 mb-1">Risk Severity</p>
//               <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
//                 <motion.div
//                   initial={{ width: 0 }}
//                   animate={{ width: "28%" }}
//                   transition={{ duration: 1.2, ease: "easeOut" }}
//                   className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400"
//                 />
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-6 text-sm text-slate-700">
//               <span><strong>Condition:</strong> {clinical.condition}</span>
//               <span><strong>Severity:</strong> GREEN</span>
//               <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= VIEW ALL HISTORY BUTTON ================= */}
//       <section className="mb-16">
//         <button
//           onClick={() => setShowAllHistory(!showAllHistory)}
//           className="text-indigo-600 font-medium hover:underline"
//         >
//           {showAllHistory ? "Hide analysis history" : "View all history"}
//         </button>
//       </section>

//       {/* ================= ALL HISTORY LIST ================= */}
//       {showAllHistory && (
//         <section className="mb-16">
//           <h2 className="text-xl font-semibold mb-6">All Analysis History</h2>

//           <div className="space-y-4">
//             {analyses.length === 0 && (
//               <p className="text-sm text-slate-500">
//                 No analysis history found.
//               </p>
//             )}

//             {analyses.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={card}
//                 className="rounded-xl border bg-white/70 backdrop-blur-xl p-5"
//               >
//                 <p className="text-xs text-slate-500 mb-1">
//                   Analysis #{analyses.length - index}
//                 </p>

//                 <p className="font-medium mb-2">
//                   {item.summary}
//                 </p>

//                 <p className="text-xs text-slate-500">
//                   Date: {new Date(item.created_at).toLocaleString()}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ================= SECURITY ================= */}
//       <section>
//         <h2 className="text-xl font-semibold mb-6">Security & Privacy</h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.02 }}
//           className="
//             flex gap-4 rounded-2xl border
//             bg-white/80 backdrop-blur-xl p-6
//           "
//         >
//           <ShieldCheck className="text-emerald-600" />
//           <div className="text-sm text-slate-700 space-y-1">
//             <p>• Encrypted & isolated data</p>
//             <p>• Account-based access</p>
//             <p>• Zero cross-user sharing</p>
//           </div>
//         </motion.div>
//       </section>
//     </motion.main>
//   );
// }

// /* ================= COMPONENT ================= */

// function Info({ icon, label, value }) {
//   return (
//     <motion.div
//       variants={card}
//       whileHover={{
//         y: -10,
//         rotateX: 8,
//         rotateY: -8,
//         scale: 1.05,
//       }}
//       transition={{ type: "spring", stiffness: 180 }}
//       className="
//         group relative rounded-2xl border
//         bg-white/70 backdrop-blur-xl
//         p-5 shadow-lg transform-gpu perspective-1000
//       "
//     >
//       <div className="flex items-center gap-2 mb-2 text-indigo-500">
//         {icon}
//         <p className="text-xs uppercase tracking-widest text-slate-500">
//           {label}
//         </p>
//       </div>
//       <p className="text-xl font-bold">{value}</p>
//     </motion.div>
//   );
// }





// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   User,
//   FileText,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// export default function DashboardPage() {
//   const router = useRouter();

//   /* ===== STATES ===== */
//   const [user, setUser] = useState({
//     email: "",
//     lastLogin: "",
//     docs: 0,
//   });

//   const [clinical, setClinical] = useState({
//     summary: "",
//     condition: "",
//     severity: "",
//     lastAnalyzed: "",
//   });

//   const [analyses, setAnalyses] = useState([]);
//   const [showAllHistory, setShowAllHistory] = useState(false);
//   const [searchEmail, setSearchEmail] = useState("");
//   const [error, setError] = useState("");

//   /* ===== FETCH DATA ===== */
//   const fetchDashboard = () => {
//     const url = searchEmail
//       ? `/api/dashboard?email=${encodeURIComponent(searchEmail)}`
//       : "/api/dashboard";

//     fetch(url)
//       .then(async (res) => {
//         if (!res.ok) {
//           const err = await res.json();
//           throw new Error(err.message);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setError("");
//         setUser(data.user);
//         setClinical(data.clinical);
//         setAnalyses(data.analyses || []);
//       })
//       .catch((err) => {
//         setError(err.message || "User not registered");
//         setAnalyses([]);
//       });
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   return (
//     <motion.main
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="
//         min-h-screen relative overflow-hidden
//         bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_45%)]
//         px-8 py-12 text-slate-900
//       "
//     >
//       {/* ================= ADMIN SEARCH ================= */}
//       <section className="mb-8">
//         <input
//           type="email"
//           placeholder="Enter user email (admin)"
//           value={searchEmail}
//           onChange={(e) => setSearchEmail(e.target.value)}
//           className="border px-4 py-2 rounded w-80"
//         />
//         <button
//           onClick={() => {
//             setShowAllHistory(false);
//             fetchDashboard();
//           }}
//           className="ml-3 px-4 py-2 rounded bg-indigo-600 text-white"
//         >
//           Search
//         </button>

//         {error && (
//           <p className="mt-2 text-sm text-red-600">
//             {error}
//           </p>
//         )}
//       </section>

//       {/* ================= USER OVERVIEW ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">User Overview</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <Info icon={<User />} label="User email" value={user.email} />
//           <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
//           <Info icon={<FileText />} label="Documents" value={user.docs} />
//         </div>
//       </section>

//       {/* ================= CLINICAL SNAPSHOT ================= */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-6">
//           Clinical Snapshot of last analysis
//         </h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.04 }}
//           className="
//             relative rounded-2xl p-[2px]
//             bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400
//           "
//         >
//           <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl p-6">
//             <p className="font-semibold mb-4">
//               {clinical.summary}
//             </p>

//             <div className="flex flex-wrap gap-6 text-sm text-slate-700">
//               <span><strong>Condition:</strong> {clinical.condition}</span>
//               <span><strong>Severity:</strong> GREEN</span>
//               <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= VIEW HISTORY ================= */}
//       <section className="mb-10">
//         <button
//           onClick={() => setShowAllHistory(!showAllHistory)}
//           className="text-indigo-600 hover:underline"
//         >
//           {showAllHistory ? "Hide all history" : "View all history"}
//         </button>
//       </section>

//       {showAllHistory && (
//         <section className="mb-16">
//           <h2 className="text-xl font-semibold mb-6">All Analysis History</h2>

//           <div className="space-y-4">
//             {analyses.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={card}
//                 className="rounded-xl border bg-white/70 p-5"
//               >
//                 <p className="font-medium">{item.summary}</p>
//                 <p className="text-xs text-slate-500">
//                   {new Date(item.created_at).toLocaleString()}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ================= SECURITY ================= */}
//       <section>
//         <h2 className="text-xl font-semibold mb-6">Security & Privacy</h2>

//         <motion.div
//           variants={card}
//           className="flex gap-4 rounded-2xl border bg-white/80 p-6"
//         >
//           <ShieldCheck className="text-emerald-600" />
//           <div className="text-sm text-slate-700">
//             <p>• Encrypted & isolated data</p>
//             <p>• Account-based access</p>
//             <p>• Zero cross-user sharing</p>
//           </div>
//         </motion.div>
//       </section>
//     </motion.main>
//   );
// }

// function Info({ icon, label, value }) {
//   return (
//     <motion.div
//       variants={card}
//       className="rounded-2xl border bg-white/70 p-5"
//     >
//       <div className="flex items-center gap-2 mb-2 text-indigo-500">
//         {icon}
//         <p className="text-xs uppercase text-slate-500">
//           {label}
//         </p>
//       </div>
//       <p className="text-xl font-bold">{value}</p>
//     </motion.div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   User,
//   FileText,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// export default function DashboardPage() {
//   const router = useRouter();

//   /* ===== STATES ===== */
//   const [user, setUser] = useState({
//     email: "",
//     lastLogin: "",
//     docs: 0,
//   });

//   const [clinical, setClinical] = useState({
//     summary: "",
//     condition: "",
//     severity: "",
//     lastAnalyzed: "",
//   });

//   const [analyses, setAnalyses] = useState([]);
//   const [showAllHistory, setShowAllHistory] = useState(false);
//   const [searchEmail, setSearchEmail] = useState("");
//   const [error, setError] = useState("");

//   /* ===== FETCH DATA ===== */
//   const fetchDashboard = () => {
//     const url = searchEmail
//       ? `/api/dashboard?email=${encodeURIComponent(searchEmail)}`
//       : "/api/dashboard";

//     fetch(url)
//       .then(async (res) => {
//         if (!res.ok) {
//           const err = await res.json();
//           throw new Error(err.message);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setError("");
//         setUser(data.user);
//         setClinical(data.clinical);
//         setAnalyses(data.analyses || []);

//         // 🔍 DEBUG — THIS IS IMPORTANT
//         console.log("ANALYSES FROM API:", data.analyses);
//       })
//       .catch((err) => {
//         setError(err.message || "User not registered");
//         setAnalyses([]);
//       });
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   return (
//     <motion.main
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="
//         min-h-screen relative overflow-hidden
//         bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_45%)]
//         px-8 py-12 text-slate-900
//       "
//     >
//       {/* ================= ADMIN SEARCH ================= */}
//       <section className="mb-8">
//         <input
//           type="email"
//           placeholder="Enter user email (admin)"
//           value={searchEmail}
//           onChange={(e) => setSearchEmail(e.target.value)}
//           className="border px-4 py-2 rounded w-80"
//         />
//         <button
//           onClick={() => {
//             setShowAllHistory(false);
//             fetchDashboard();
//           }}
//           className="ml-3 px-4 py-2 rounded bg-indigo-600 text-white"
//         >
//           Search
//         </button>

//         {error && (
//           <p className="mt-2 text-sm text-red-600">
//             {error}
//           </p>
//         )}
//       </section>

//       {/* ================= USER OVERVIEW ================= */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">User Overview</h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <Info icon={<User />} label="User email" value={user.email} />
//           <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
//           <Info icon={<FileText />} label="Documents" value={user.docs} />
//         </div>
//       </section>

//       {/* ================= CLINICAL SNAPSHOT ================= */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-6">
//           Clinical Snapshot of last analysis
//         </h2>

//         <motion.div
//           variants={card}
//           whileHover={{ scale: 1.04 }}
//           className="
//             relative rounded-2xl p-[2px]
//             bg-gradient-to-r from-emerald-400 via-cyan-400 to-indigo-400
//           "
//         >
//           <div className="relative rounded-2xl bg-white/80 backdrop-blur-xl p-6">
//             <p className="font-semibold mb-4">
//               {clinical.summary}
//             </p>

//             <div className="flex flex-wrap gap-6 text-sm text-slate-700">
//               <span><strong>Condition:</strong> {clinical.condition}</span>
//               <span><strong>Severity:</strong> GREEN</span>
//               <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//       {/* ================= VIEW HISTORY ================= */}
//       <section className="mb-10">
//         <button
//           onClick={() => setShowAllHistory(!showAllHistory)}
//           className="text-indigo-600 hover:underline"
//         >
//           {showAllHistory ? "Hide all history" : "View all history"}
//         </button>
//       </section>

//       {showAllHistory && (
//         <section className="mb-16">
//           <h2 className="text-xl font-semibold mb-6">All Analysis History</h2>

//           <div className="space-y-4">
//             {/* {analyses.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={card}
//                 className="rounded-xl border bg-white/70 p-5"
//               > */}

//             {analyses.map((item, index) => (
//               <motion.div
//                 key={index}
//                 variants={card}
//                 initial="hidden"
//                 animate="show"
//                 className="rounded-xl border bg-white/70 p-5"
//               >


//                 <p className="font-medium">{item.summary}</p>
//                 <p className="text-xs text-slate-500">
//                   {new Date(item.created_at).toLocaleString()}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* ================= SECURITY ================= */}
//       <section>
//         <h2 className="text-xl font-semibold mb-6">Security & Privacy</h2>

//         <motion.div
//           variants={card}
//           className="flex gap-4 rounded-2xl border bg-white/80 p-6"
//         >
//           <ShieldCheck className="text-emerald-600" />
//           <div className="text-sm text-slate-700">
//             <p>• Encrypted & isolated data</p>
//             <p>• Account-based access</p>
//             <p>• Zero cross-user sharing</p>
//           </div>
//         </motion.div>
//       </section>
//     </motion.main>
//   );
// }

// function Info({ icon, label, value }) {
//   return (
//     <motion.div
//       variants={card}
//       className="rounded-2xl border bg-white/70 p-5"
//     >
//       <div className="flex items-center gap-2 mb-2 text-indigo-500">
//         {icon}
//         <p className="text-xs uppercase text-slate-500">
//           {label}
//         </p>
//       </div>
//       <p className="text-xl font-bold">{value}</p>
//     </motion.div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { motion } from "framer-motion";
// import {
//   User,
//   FileText,
//   ShieldCheck,
//   AlertCircle,
// } from "lucide-react";

// /* ================= ANIMATION VARIANTS ================= */

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15 },
//   },
// };

// const card = {
//   hidden: { opacity: 0, y: 40, rotateX: -10 },
//   show: {
//     opacity: 1,
//     y: 0,
//     rotateX: 0,
//     transition: { type: "spring", stiffness: 120, damping: 14 },
//   },
// };

// export default function DashboardPage() {
//   const router = useRouter();

//   const [user, setUser] = useState({
//     email: "",
//     lastLogin: "",
//     docs: 0,
//   });

//   const [clinical, setClinical] = useState({
//     summary: "",
//     condition: "",
//     severity: "",
//     lastAnalyzed: "",
//   });

//   const [analyses, setAnalyses] = useState([]);
//   const [showAllHistory, setShowAllHistory] = useState(false);
//   const [searchEmail, setSearchEmail] = useState("");
//   const [error, setError] = useState("");

//   const fetchDashboard = () => {
//     const url = searchEmail
//       ? `/api/dashboard?email=${encodeURIComponent(searchEmail)}`
//       : "/api/dashboard";

//     fetch(url)
//       .then(async (res) => {
//         if (!res.ok) {
//           const err = await res.json();
//           throw new Error(err.message);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setError("");
//         setUser(data.user);
//         setClinical(data.clinical);
//         setAnalyses(data.analyses || []);

//         console.log("ANALYSES FROM API:", data.analyses);
//       })
//       .catch((err) => {
//         setAnalyses([]);
//         setError(err.message);

//         if (err.message.includes("admin")) {
//           setTimeout(() => router.push("/login"), 2000);
//         }
//       });
//   };

//   useEffect(() => {
//     fetchDashboard();
//   }, []);

//   if (error.includes("admin")) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="p-8 rounded-xl border bg-white text-center">
//           <h2 className="text-xl font-semibold text-red-600 mb-2">
//             Access Denied
//           </h2>
//           <p>This dashboard is only for admin users.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <motion.main
//       variants={container}
//       initial="hidden"
//       animate="show"
//       className="min-h-screen bg-[radial-gradient(circle_at_top,_#e0f2fe,_#f8fafc_45%)] px-8 py-12"
//     >
//       {/* ADMIN SEARCH */}
//       <section className="mb-8">
//         <input
//           type="email"
//           placeholder="Enter user email (admin)"
//           value={searchEmail}
//           onChange={(e) => setSearchEmail(e.target.value)}
//           className="border px-4 py-2 rounded w-80"
//         />
//         <button
//           onClick={() => {
//             setShowAllHistory(false);
//             fetchDashboard();
//           }}
//           className="ml-3 px-4 py-2 rounded bg-indigo-600 text-white"
//         >
//           Search
//         </button>

//         {error && (
//           <p className="mt-2 text-sm text-red-600">{error}</p>
//         )}
//       </section>

//       {/* USER OVERVIEW */}
//       <section className="mb-14">
//         <h2 className="text-xl font-semibold mb-6">User Overview</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           <Info icon={<User />} label="User email" value={user.email} />
//           <Info icon={<AlertCircle />} label="Last Login" value={user.lastLogin} />
//           <Info icon={<FileText />} label="Documents" value={user.docs} />
//         </div>
//       </section>

//       {/* SNAPSHOT */}
//       <section className="mb-10">
//         <h2 className="text-xl font-semibold mb-6">
//           Clinical Snapshot of last analysis
//         </h2>

//         <motion.div
//           variants={card}
//           initial="hidden"
//           animate="show"
//           className="rounded-2xl border bg-white/80 p-6"
//         >
//           <p className="font-semibold mb-4">{clinical.summary}</p>
//           <div className="flex gap-6 text-sm">
//             <span><strong>Condition:</strong> {clinical.condition}</span>
//             <span><strong>Severity:</strong> {clinical.severity}</span>
//             <span><strong>Last:</strong> {clinical.lastAnalyzed}</span>
//           </div>
//         </motion.div>
//       </section>

//       {/* HISTORY */}
//       <button
//         onClick={() => setShowAllHistory(!showAllHistory)}
//         className="text-indigo-600 hover:underline"
//       >
//         {showAllHistory ? "Hide all history" : "View all history"}
//       </button>

//       {showAllHistory && (
//         <section className="mt-6">
//           <h2 className="text-xl font-semibold mb-6">All Analysis History</h2>
//           <div className="space-y-4">
//             {analyses.map((item, i) => (
//               <motion.div
//                 key={i}
//                 variants={card}
//                 initial="hidden"
//                 animate="show"
//                 className="rounded-xl border bg-white/70 p-5"
//               >
//                 <p className="font-medium">{item.summary}</p>
//                 <p className="text-xs text-slate-500">
//                   {new Date(item.created_at).toLocaleString()}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* SECURITY */}
//       <section className="mt-16">
//         <motion.div className="flex gap-4 rounded-2xl border bg-white/80 p-6">
//           <ShieldCheck className="text-emerald-600" />
//           <div>
//             <p>• Encrypted & isolated data</p>
//             <p>• Account-based access</p>
//             <p>• Zero cross-user sharing</p>
//           </div>
//         </motion.div>
//       </section>
//     </motion.main>
//   );
// }

// function Info({ icon, label, value }) {
//   return (
//     <motion.div className="rounded-2xl border bg-white/70 p-5">
//       <div className="flex items-center gap-2 mb-2 text-indigo-500">
//         {icon}
//         <p className="text-xs uppercase">{label}</p>
//       </div>
//       <p className="text-xl font-bold">{value}</p>
//     </motion.div>
//   );
// }



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

/* ================= ANIMATION VARIANTS ================= */

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
        <h2 className="text-xl font-semibold mb-6">
          Clinical Snapshot of last analysis
        </h2>

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

      {/* ================= HISTORY ================= */}
      <button
        onClick={() => setShowAllHistory(!showAllHistory)}
        className="text-indigo-700 font-medium hover:underline"
      >
        {showAllHistory ? "Hide all history" : "View all history"}
      </button>

      {showAllHistory && (
        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-6">All Analysis History</h2>
          <div className="space-y-4">
            {analyses.map((item, i) => (
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
                "
              >
                <p className="font-medium text-slate-900 leading-relaxed">
                  {item.summary}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>
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
