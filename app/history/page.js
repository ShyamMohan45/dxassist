// "use client"

// export default function KnowledgeBasePage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#eef7f6] via-[#f6fbff] to-[#eef2ff] px-6 lg:px-16 py-10">

//       {/* HERO HEADER */}
//       <header className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 p-10 text-white shadow-2xl">
//         <div className="absolute inset-0 bg-black/20" />
//         <div className="relative z-10 max-w-3xl">
//           <h1 className="text-5xl font-serif mb-4 tracking-wide">
//             Medical Knowledge Base
//           </h1>
//           <p className="text-lg text-white/90">
//             Our Retrieval-Augmented Generation (RAG) engine grounds AI-generated
//             clinical insights in verified medical literature for safety,
//             accuracy, and transparency.
//           </p>
//         </div>
//       </header>

//       {/* SEARCH BAR */}
//       <section className="mb-12">
//         <div className="flex flex-col md:flex-row gap-4 items-center bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
//           <input
//             type="text"
//             placeholder="Search medical guidelines, journals, conditions..."
//             className="
//               flex-1 px-6 py-4 rounded-xl
//               border border-gray-200
//               bg-white
//               text-gray-700
//               focus:outline-none focus:ring-2 focus:ring-teal-500
//               transition
//             "
//           />
//           <button
//             className="
//               px-8 py-4 rounded-xl font-semibold
//               bg-gradient-to-r from-teal-600 to-cyan-600
//               text-white
//               hover:scale-[1.04] hover:shadow-xl
//               transition-all duration-300
//             "
//           >
//             Explore Evidence
//           </button>
//         </div>
//       </section>

//       {/* MAIN GRID */}
//       <section className="grid grid-cols-1 xl:grid-cols-2 gap-10">

//         {/* LEFT: SOURCES */}
//         <div className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
//           <h2 className="text-3xl font-semibold text-teal-900 mb-6">
//             Retrieved Medical Sources
//           </h2>

//           {/* SOURCE CARD */}
//           <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition">
//             <h3 className="text-lg font-medium text-gray-900">
//               WHO Clinical Guidelines
//             </h3>
//             <p className="text-sm text-gray-600 mt-2 leading-relaxed">
//               Diagnostic criteria for community-acquired pneumonia based on
//               respiratory symptoms, imaging, and biomarkers.
//             </p>
//             <span className="inline-block mt-3 text-xs font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
//               Global Guideline
//             </span>
//           </div>

//           <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition">
//             <h3 className="text-lg font-medium text-gray-900">
//               Journal of Internal Medicine (2023)
//             </h3>
//             <p className="text-sm text-gray-600 mt-2 leading-relaxed">
//               Peer-reviewed study comparing bacterial vs viral pneumonia using
//               inflammatory biomarkers.
//             </p>
//             <span className="inline-block mt-3 text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//               Research Paper
//             </span>
//           </div>
//         </div>

//         {/* RIGHT: RAG CONTEXT */}
//         <div className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
//           <h2 className="text-3xl font-semibold text-teal-900 mb-6">
//             AI Reasoning & Traceability
//           </h2>

//           <p className="text-gray-700 leading-relaxed mb-6">
//             Before generating summaries or differential diagnoses, the AI
//             retrieves verified clinical sources. This grounding process
//             eliminates hallucinations and ensures explainable decision support.
//           </p>

//           <div className="relative rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 p-6 border-l-4 border-teal-600 mb-6">
//             <p className="text-sm text-gray-800 leading-relaxed">
//               <strong>Clinical Example:</strong>  
//               Pneumonia was suggested after matching patient symptoms with WHO
//               guideline criteria and cross-validating findings against
//               peer-reviewed research.
//             </p>
//           </div>

//           <ul className="space-y-3 text-sm text-gray-700">
//             <li className="flex items-center gap-2">
//               ✅ Evidence-backed AI outputs
//             </li>
//             <li className="flex items-center gap-2">
//               ✅ Clinician trust & audit readiness
//             </li>
//             <li className="flex items-center gap-2">
//               ✅ Safe, non-hallucinated recommendations
//             </li>
//           </ul>
//         </div>

//       </section>

//       {/* FOOTER */}
//       <footer className="mt-16 text-center text-sm text-gray-500">
//         Powered by Retrieval-Augmented Generation (RAG).  
//         This system supports clinicians and does not replace professional
//         medical judgment.
//       </footer>

//     </main>
//   )
// }
// "use client"

// export default function KnowledgeBasePage() {
//   return (
//     <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#eef7f6] via-[#f6fbff] to-[#eef2ff] px-6 lg:px-16 py-10">

//       {/* AMBIENT BACKGROUND ORBS */}
//       <div className="pointer-events-none absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-teal-300/20 blur-[120px] animate-pulse" />
//       <div className="pointer-events-none absolute top-1/3 -right-40 h-[420px] w-[420px] rounded-full bg-cyan-300/20 blur-[120px] animate-pulse delay-700" />

//       {/* HERO HEADER */}
//       <header className="relative mb-16 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 p-12 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
//         <div className="absolute inset-0 bg-black/30" />

//         <div className="relative z-10 max-w-3xl">
//           <h1 className="text-5xl font-serif tracking-wide mb-4">
//             Medical Knowledge Base
//           </h1>
//           <p className="text-lg text-white/90 leading-relaxed">
//             A clinician-grade Retrieval-Augmented Generation (RAG) system that
//             grounds AI reasoning in trusted, peer-reviewed medical evidence.
//           </p>
//         </div>
//       </header>

//       {/* SEARCH BAR */}
//       <section className="mb-14">
//         <div className="group flex flex-col md:flex-row gap-4 items-center rounded-2xl bg-white/70 backdrop-blur-xl p-6 shadow-xl transition hover:shadow-2xl">
//           <input
//             type="text"
//             placeholder="Search guidelines, journals, symptoms..."
//             className="
//               flex-1 px-6 py-4 rounded-xl
//               border border-gray-200
//               bg-white text-gray-700
//               focus:outline-none focus:ring-4 focus:ring-teal-400/50
//               transition
//             "
//           />

//           <button
//             className="
//               relative overflow-hidden px-9 py-4 rounded-xl font-semibold
//               bg-gradient-to-r from-teal-600 to-cyan-600
//               text-white
//               shadow-lg
//               hover:scale-[1.06]
//               hover:shadow-teal-500/40
//               transition-all duration-300
//             "
//           >
//             <span className="relative z-10">Explore Evidence</span>
//             <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition" />
//           </button>
//         </div>
//       </section>

//       {/* MAIN GRID */}
//       <section className="grid grid-cols-1 xl:grid-cols-2 gap-12">

//         {/* LEFT: SOURCES */}
//         <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition">
//           <h2 className="text-3xl font-semibold text-teal-900 mb-6">
//             Retrieved Medical Sources
//           </h2>

//           {/* SOURCE CARD */}
//           <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
//             <h3 className="text-lg font-medium text-gray-900">
//               WHO Clinical Guidelines
//             </h3>
//             <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//               Diagnostic criteria for community-acquired pneumonia using
//               symptoms, imaging, and biomarkers.
//             </p>
//             <span className="inline-block mt-3 text-xs font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
//               Global Guideline
//             </span>
//           </div>

//           <div className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl">
//             <h3 className="text-lg font-medium text-gray-900">
//               Journal of Internal Medicine (2023)
//             </h3>
//             <p className="mt-2 text-sm text-gray-600 leading-relaxed">
//               Biomarker-based comparison of bacterial vs viral pneumonia.
//             </p>
//             <span className="inline-block mt-3 text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
//               Peer-Reviewed Research
//             </span>
//           </div>
//         </div>

//         {/* RIGHT: AI REASONING */}
//         <div className="rounded-3xl bg-white/70 backdrop-blur-xl p-8 shadow-xl hover:shadow-2xl transition">
//           <h2 className="text-3xl font-semibold text-teal-900 mb-6">
//             AI Reasoning & Traceability
//           </h2>

//           <p className="text-gray-700 leading-relaxed mb-6">
//             The AI retrieves verified clinical literature before generating any
//             medical output — ensuring explainability, safety, and clinician
//             trust.
//           </p>

//           {/* RAG FLOW */}
//           <div className="mb-6 rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 p-6 border-l-4 border-teal-600">
//             <p className="text-sm text-gray-800 leading-relaxed">
//               <strong>Clinical Example:</strong><br />
//               Pneumonia was suggested after symptom-to-guideline matching and
//               cross-validation with peer-reviewed biomarkers research.
//             </p>
//           </div>

//           <ul className="space-y-3 text-sm text-gray-700">
//             <li>✅ Evidence-grounded responses</li>
//             <li>✅ Full audit & traceability</li>
//             <li>✅ Zero hallucinated insights</li>
//           </ul>
//         </div>

//       </section>

//       {/* FOOTER */}
//       <footer className="mt-20 text-center text-sm text-gray-500">
//         Powered by Retrieval-Augmented Generation (RAG).<br />
//         Designed to support clinicians — not replace medical judgment.
//       </footer>

//     </main>
//   )
// }
"use client"

import { useEffect, useRef, useState } from "react"

export default function KnowledgeBasePage() {
  const root = useRef(null)
  const [scroll, setScroll] = useState(0)

  /* ================= SCROLL TRACK ================= */
  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ================= CURSOR LIGHT ================= */
  useEffect(() => {
    const move = (e) => {
      root.current?.style.setProperty("--x", `${e.clientX}px`)
      root.current?.style.setProperty("--y", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <main
      ref={root}
      className="relative min-h-screen bg-[#f7fafc] text-slate-900 overflow-hidden"
    >
      {/* ================= CURSOR FIELD ================= */}
      <div
        className="
          pointer-events-none fixed inset-0 z-10
          bg-[radial-gradient(600px_at_var(--x)_var(--y),rgba(45,212,191,0.15),transparent_65%)]
        "
      />

      {/* ================= HEADER ================= */}
      <section className="relative px-[10vw] pt-24 pb-32">
        <p className="text-xs tracking-[0.4em] text-teal-700 mb-6">
          CLINICAL KNOWLEDGE INFRASTRUCTURE
        </p>

        <h1 className="text-[5vw] leading-tight font-semibold max-w-5xl">
          Evidence-first medical intelligence,
          <br />
          <span className="text-slate-400">
            designed for clinical trust
          </span>
        </h1>

        <p className="mt-12 text-lg text-slate-600 max-w-2xl">
          This knowledge base powers DxAssist’s reasoning layer by retrieving,
          structuring, and validating medical literature before inference.
        </p>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="px-[10vw] mb-32">
        <div className="relative">
          <input
            placeholder="Search conditions, guidelines, biomarkers…"
            className="
              w-full bg-transparent border-b border-slate-300
              py-5 text-lg text-slate-800
              focus:outline-none focus:border-teal-500
              transition
            "
          />
          <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            ↵ Enter
          </span>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="relative px-[10vw] grid grid-cols-12 gap-x-16">
        {/* LEFT — SOURCES */}
        <div className="col-span-7 space-y-24">
          {[
            {
              title: "WHO Clinical Practice Guidelines",
              desc:
                "Structured diagnostic criteria and treatment pathways for respiratory infections, validated across global populations.",
              tag: "Global Guideline",
            },
            {
              title: "Journal of Internal Medicine · 2023",
              desc:
                "Comparative biomarker analysis for bacterial versus viral pneumonia using CRP, PCT, and imaging correlation.",
              tag: "Peer-reviewed",
            },
            {
              title: "ICMR Consensus Statements",
              desc:
                "India-specific clinical recommendations adapted for local epidemiology and healthcare infrastructure.",
              tag: "National Advisory",
            },
          ].map((item, i) => (
            <article
              key={i}
              className="
                relative pb-16 border-b border-slate-200
                transition
              "
            >
              <h2 className="text-2xl font-medium mb-4">
                {item.title}
              </h2>
              <p className="text-slate-600 max-w-xl leading-relaxed">
                {item.desc}
              </p>

              <span className="inline-block mt-6 text-xs tracking-widest text-teal-700">
                {item.tag.toUpperCase()}
              </span>
            </article>
          ))}
        </div>

        {/* RIGHT — STICKY REASONING */}
        <aside className="col-span-4 col-start-9 sticky top-32 h-fit">
          <p className="text-xs tracking-[0.4em] text-slate-500 mb-6">
            AI REASONING PIPELINE
          </p>

          <div className="space-y-8 text-slate-700">
            <p>
              Every response is generated only after relevant medical
              literature is retrieved and validated.
            </p>

            <p>
              This prevents hallucinations and ensures traceability from
              output back to source.
            </p>

            <div className="mt-10 space-y-4 text-sm">
              <p>✓ Literature retrieval</p>
              <p>✓ Contextual ranking</p>
              <p>✓ Evidence-linked inference</p>
              <p>✓ Audit-ready output</p>
            </div>
          </div>
        </aside>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="mt-40 pb-20 text-center text-xs text-slate-500">
        Retrieval-Augmented Generation ensures safety,
        transparency, and clinical accountability.
      </footer>
    </main>
  )
}
