"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect } from "react"
import Scene from "@/dynamic/Scene"
import GoogleSignButton from "@/app/components/GoogleSignButton"
import Link from "next/link"
import { div } from "prelude-ls"

export default function Home() {

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {/* ================= HERO 3D SECTION ================= */}
      <main className="min-h-screen bg-gradient-to-b from-[#020617] via-[#030712] to-black">
        <div className="relative h-[550px] overflow-hidden">

          {/* SUBTLE GLOW */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.18),transparent_60%)]" />

          <Suspense
            fallback={
              <div className="h-full flex items-center justify-center text-white/30 text-xs tracking-widest">
                INITIALIZING DXASSIST
              </div>
            }
          >
            <Canvas camera={{ position: [0, 0, 6], fov: 35 }} dpr={[1, 2]}>
              <Scene />
            </Canvas>
          </Suspense>

          <div className="absolute bottom-6 left-10 text-[9px] tracking-[0.5em] uppercase text-white/25">
            Interface 2.0 // DxAssist Global
          </div>
        </div>

<div className="relative flex flex-col items-center justify-center py-28 text-center overflow-hidden">

  {/* BACKGROUND AMBIENCE */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[520px] h-[180px] bg-emerald-400/10 blur-[120px] rounded-full animate-pulse" />
  </div>

  {/* MICRO BADGE */}
  <div className="relative mb-6 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
    <span className="text-[11px] uppercase tracking-[0.3em] text-white/70">
      AI Powered Healthcare
    </span>
  </div>

  {/* PRIMARY STATEMENT */}
  <h2 className="relative text-white text-3xl md:text-4xl font-semibold leading-tight max-w-2xl">
    Precision Diagnostic Assistance
    <span className="block text-white/40 font-normal text-lg mt-3">
      Built to elevate clinical decision-making
    </span>
  </h2>

  {/* DIVIDER */}
  <div className="mt-8 mb-10 flex items-center gap-4">
    <span className="h-px w-14 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
    <span className="h-px w-14 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
  </div>

  {/* SUPPORTING COPY */}
  <p className="relative max-w-xl text-white/45 text-sm leading-relaxed">
    Dx Assist combines advanced generative AI with evidence-backed medical
    knowledge to transform unstructured clinical data into clear, actionable
    insights — without disrupting existing workflows.
  </p>

  {/* FEATURE HIGHLIGHTS */}
 {/* FEATURE HIGHLIGHTS – PREMIUM VERSION */}
{/* ADVANCED AI PIPELINE */}
{/* ================= ADVANCED AI PIPELINE ================= */}
<div className="mt-24 max-w-5xl mx-auto relative">

  {/* ANIMATED DATA FLOW LINE */}
  <div className="absolute left-7 top-0 bottom-0 w-px 
                  bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent">
    <div className="absolute left-[-2px] top-0 h-8 w-[5px] 
                    bg-cyan-300/80 blur-sm animate-[pulseDown_4s_linear_infinite]" />
  </div>

  {[
    {
      step: "01",
      title: "Clinical Data Ingestion",
      meta: "EHR · Free-text · Imaging",
      confidence: "99.8%",
      desc: "Multi-modal ingestion pipeline parses unstructured notes, structured EHR fields, and diagnostic reports using domain-specific normalization.",
    },
    {
      step: "02",
      title: "Retrieval-Augmented Reasoning",
      meta: "Vector Search · RAG · Medical Corpora",
      confidence: "98.6%",
      desc: "Semantic retrieval layer grounds generative reasoning in peer-reviewed medical literature and validated clinical guidelines.",
    },
    {
      step: "03",
      title: "Diagnostic Hypothesis Engine",
      meta: "LLMs · Probabilistic Ranking",
      confidence: "97.2%",
      desc: "Generates ranked diagnostic hypotheses with confidence weighting and transparent reasoning traces for clinical review.",
    },
    {
      step: "04",
      title: "Clinician Oversight Layer",
      meta: "Human-in-the-loop · Governance",
      confidence: "100%",
      desc: "Final decision layer prioritizes clinician authority, auditability, and safety before downstream action or documentation.",
    },
  ].map((item, i) => (
    <div
      key={i}
      className="relative pl-24 py-12 group"
    >
      {/* STEP NODE */}
      <div className="absolute left-0 top-12 w-14 h-14 rounded-full
                      border border-cyan-400/40
                      bg-cyan-400/10
                      flex flex-col items-center justify-center
                      font-mono text-cyan-300
                      group-hover:bg-cyan-400/20 transition">
        <span className="text-sm">{item.step}</span>
        <span className="text-[10px] opacity-70">NODE</span>
      </div>

      {/* CONTENT */}
      <div className="relative">
        <div className="flex flex-wrap items-center gap-4 mb-3">
          <h3 className="text-white text-lg font-medium tracking-wide">
            {item.title}
          </h3>

          <span className="text-[11px] uppercase tracking-widest text-cyan-300/70 font-mono">
            {item.meta}
          </span>

          <span className="ml-auto text-[11px] font-mono text-emerald-300">
            CONF {item.confidence}
          </span>
        </div>

        <p className="text-white/45 text-sm leading-relaxed max-w-3xl">
          {item.desc}
        </p>

        {/* HOVER TECH DETAIL */}
        <p className="mt-3 text-cyan-300/0 text-xs font-mono leading-relaxed
                      group-hover:text-cyan-300/60 transition">
          ↳ System status: operational · latency &lt; 120ms · monitored
        </p>
      </div>
    </div>
  ))}
</div>
</div>
      </main>

      {/* ================= SPLIT HERO SECTION ================= */}
      <section className="grid grid-cols-2 overflow-hidden relative">
{/* BACKGROUND AURA */}
{/* SOFT BACKGROUND */}
<div className="relative overflow-hidden bg-gradient-to-br 
                from-[#f6fbfa] via-[#eef7f6] to-[#f0f4f9]">

  {/* BACKGROUND AURA */}
  <div className="absolute -top-52 -left-52 w-[600px] h-[600px] 
                  bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent 
                  rounded-full blur-[160px]" />

  {/* LEFT CONTENT */}
  <div className="relative z-10 h-[72vh] 
                  flex flex-col justify-center items-center text-center px-16">

    {/* MICRO BADGE */}
    <div className="mb-6 inline-flex items-center gap-3 
                    rounded-full border border-black/10 
                    bg-white/70 px-5 py-2 backdrop-blur-md">
      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
      <span className="text-[11px] uppercase tracking-[0.35em] text-emerald-700">
        AI-Driven Clinical Intelligence
      </span>
    </div>

    {/* MAIN HEADING */}
    <h1 className="text-[4.5rem] leading-[1.05] font-semibold tracking-tight mb-8 text-slate-900">
      Enjoy care
      <span className="block bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-400 
                       bg-clip-text text-transparent">
        again
      </span>
    </h1>

    {/* DIVIDER */}
    <div className="mb-8 flex items-center gap-4">
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
      <span className="h-px w-16 bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />
    </div>

    {/* PRIMARY DESCRIPTION */}
    <p className="text-lg text-slate-700 max-w-xl leading-relaxed mb-6">
      DxAssist is an advanced clinical intelligence platform that transforms
      unstructured medical data into clear, evidence-grounded diagnostic insight.
    </p>

    {/* SECONDARY TECH LINE */}
    <p className="text-sm text-slate-500 max-w-lg leading-relaxed mb-10">
      Powered by retrieval-augmented generative models, probabilistic reasoning,
      and clinician-first safety architecture.
    </p>

    {/* TECH STATS */}
    <div className="flex gap-10 text-left">
      {[
        { label: "Clinical Sources", value: "50K+" },
        { label: "Inference Latency", value: "<120ms" },
        { label: "Human Oversight", value: "Always" },
      ].map((item, i) => (
        <div key={i}>
          <p className="text-slate-900 text-xl font-medium">{item.value}</p>
          <p className="text-slate-500 text-xs tracking-wide uppercase">
            {item.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</div>


        {/* RIGHT VIDEO */}
        <div className="relative h-[70vh] overflow-hidden group">
          <video
            src="/Hailuo_Video_A realistic cinematic healthca_456572131441737731 (1).mp4"
            className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-1000"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        </div>
      </section>

      {/* ================= AI ANALYSIS SECTION ================= */}
<section className="relative py-36  overflow-hidden">

  {/* BACKGROUND LAYERS */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#f7fbfa] via-[#eef7f6] to-white" />
  <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] 
                  bg-emerald-400/15 rounded-full blur-[160px]" />
  <div className="absolute -bottom-40 left-[-10%] w-[600px] h-[600px] 
                  bg-cyan-400/10 rounded-full blur-[160px]" />

  {/* CONTENT CONTAINER */}
  <div className="relative max-w-6xl mx-auto rounded-[2.8rem] 
                  bg-white/70 backdrop-blur-2xl 
                  shadow-[0_30px_100px_rgba(0,0,0,0.12)] 
                  px-20 py-24">

    {/* MICRO LABEL */}
    <div className="mb-8 flex justify-center">
      <span className="inline-flex items-center gap-3 rounded-full 
                       border border-emerald-500/20 
                       bg-emerald-500/10 
                       px-5 py-2 
                       text-[11px] tracking-[0.3em] uppercase 
                       text-emerald-700">
        AI ANALYSIS PIPELINE
      </span>
    </div>

    {/* HEADING */}
    <h2 className="text-center text-[3.2rem] leading-tight font-semibold text-slate-900 mb-6">
      How DxAssist understands
      <span className="block text-slate-500 font-normal mt-2">
        clinical context & diagnostic signals
      </span>
    </h2>

    {/* SUBTEXT */}
    <p className="mx-auto max-w-2xl text-center text-slate-600 text-lg leading-relaxed mb-16">
      Our system processes unstructured clinical notes and patient data through
      a multi-stage AI reasoning pipeline designed for accuracy, traceability,
      and clinician trust.
    </p>

    {/* VISUAL AI STAGE */}
    <div className="relative max-w-5xl mx-auto">

      {/* FRAME */}
      <div className="relative rounded-[2rem] border border-black/10 
                      bg-gradient-to-br from-white via-white to-emerald-50/40 
                      shadow-inner p-10">

        {/* TOP TECH BAR */}
        <div className="mb-6 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>DxAssist · Analysis Engine</span>
          <span className="text-emerald-600">Status: Active</span>
        </div>

        {/* MAIN VISUAL PLACEHOLDER */}
        <div className="h-[360px] rounded-xl 
                        bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                        flex items-center justify-center relative overflow-hidden">

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          {/* CENTER LABEL */}
          <div className="relative z-10 text-center">
            <p className="text-emerald-400 text-sm tracking-widest uppercase mb-3">
              Live AI Reasoning
            </p>
            <p className="text-white/80 text-lg">
              Clinical understanding in progress
            </p>
          </div>
        </div>
      </div>

      {/* TECH METRICS */}
      <div className="mt-12 grid grid-cols-3 gap-8 text-center">
        {[
          { label: "Context Extraction", value: "Multi-modal" },
          { label: "Evidence Grounding", value: "RAG-based" },
          { label: "Output Traceability", value: "Fully Auditable" },
        ].map((item, i) => (
          <div key={i}>
            <p className="text-slate-900 font-semibold text-lg">
              {item.value}
            </p>
            <p className="text-slate-500 text-xs tracking-wide uppercase mt-1">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


      {/* ================= MULTILINGUAL ================= */}
{/* ================= GLOBAL MULTILINGUAL INTELLIGENCE ================= */}
<section className="relative mt-32 overflow-hidden">

  {/* BACKGROUND LAYERS */}
  <div className="absolute inset-0 bg-gradient-to-br 
                  from-[#f7fbfa] via-[#eef7f6] to-[#f1f5f9]" />
  <div className="absolute -top-40 left-1/2 -translate-x-1/2 
                  w-[700px] h-[700px] bg-emerald-400/15 
                  rounded-full blur-[180px]" />

  {/* CONTAINER */}
  <div className="relative max-w-6xl mx-auto px-6">

    {/* SYSTEM FRAME */}
    <div className="relative rounded-[2.8rem] 
                    bg-white/70 backdrop-blur-2xl 
                    shadow-[0_30px_100px_rgba(0,0,0,0.12)] 
                    px-20 py-24">

      {/* MICRO LABEL */}
      <div className="mb-10 flex justify-center">
        <span className="inline-flex items-center gap-3 
                         rounded-full border border-emerald-500/20 
                         bg-emerald-500/10 
                         px-6 py-2 
                         text-[11px] tracking-[0.35em] uppercase 
                         text-emerald-700">
          Global Language Intelligence
        </span>
      </div>

      {/* HEADING */}
      <h3 className="text-center text-[3rem] font-semibold 
                     leading-tight text-slate-900 mb-6">
        Built for clinicians
        <span className="block text-slate-500 font-normal mt-2">
          across languages & regions
        </span>
      </h3>

      {/* DESCRIPTION */}
      <p className="mx-auto max-w-2xl text-center text-slate-600 
                    text-lg leading-relaxed mb-16">
        DxAssist supports multilingual clinical workflows by understanding,
        normalizing, and reasoning across diverse medical languages without
        loss of diagnostic fidelity.
      </p>

      {/* VISUAL + TECH DETAILS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT – VISUAL */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-6 
                          bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 
                          blur-[80px] rounded-full" />
          <img
            src="https://cdn.prod.website-files.com/67c6ddc58c9e7b3f7d095cb3/67c96abe244a0825c2c5ff32_b7b66a6e735ec6f8dcee4fe321702443_Logo%20Multilingue.avif"
            alt="Multilingual AI"
            className="relative w-[320px] rounded-xl"
          />
        </div>

        {/* RIGHT – TECH CAPABILITIES */}
        <div className="space-y-8">

          {[
            {
              title: "Semantic Language Normalization",
              desc: "Maps multilingual clinical terminology into a unified medical representation layer for consistent reasoning.",
            },
            {
              title: "Cross-lingual Medical Understanding",
              desc: "Processes notes written in regional languages while preserving clinical nuance and context.",
            },
            {
              title: "Region-aware Output Generation",
              desc: "Adapts explanations and summaries to local language preferences and clinical conventions.",
            },
          ].map((item, i) => (
            <div key={i} className="relative pl-6">
              <div className="absolute left-0 top-2 h-2 w-2 
                              rounded-full bg-emerald-500/80" />
              <h4 className="text-slate-900 font-medium mb-1">
                {item.title}
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* FOOTNOTE */}
      <p className="mt-20 text-center text-slate-400 text-xs tracking-wide">
        Currently supporting English, Spanish, Hindi, and 30+ additional languages
      </p>

    </div>
  </div>
</section>


      
<section className="relative mt-40 py-40 overflow-hidden">

  {/* DEEP CINEMATIC BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b 
                  from-[#020b0c] via-[#041e22] to-[#020b0c]" />

  {/* AMBIENT ENERGY FOG */}
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                  w-[900px] h-[900px] bg-emerald-400/10 rounded-full blur-[260px]" />

  {/* SECTION INTRO */}
  <div className="relative text-center mb-32">
    <p className="text-emerald-300/80 text-xs tracking-[0.4em] uppercase mb-6">
      DxAssist · Intelligent Entry Point
    </p>

    <h2 className="text-[4.2rem] font-medium text-white leading-tight">
      Begin your
      <span className="block text-transparent bg-clip-text 
                       bg-gradient-to-r from-emerald-300 to-cyan-300">
        diagnostic journey
      </span>
    </h2>

    <p className="mt-6 max-w-xl mx-auto text-white/50 text-lg">
      Select the context that best represents your current clinical state.
      The system adapts its reasoning accordingly.
    </p>
  </div>

  {/* DECISION GATEWAY */}
  <div className="relative max-w-6xl mx-auto">

    {/* CENTRAL AXIS */}
    <div className="absolute left-1/2 top-0 bottom-0 w-px 
                    bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />

    {/* PATHS */}
    <div className="grid grid-cols-3 gap-32">

      {[
        {
          title: "Baseline Monitoring",
          subtitle: "Asymptomatic · Preventive",
          desc: "Routine analysis for proactive health monitoring and reassurance.",
          href: "/feel-healthy",
          align: "text-right pr-12",
        },
        {
          title: "Symptom Evaluation",
          subtitle: "Early Indicators",
          desc: "Context-aware analysis for emerging or unclear symptoms.",
          href: "/feel-concise",
          align: "text-center",
        },
        {
          title: "Advanced Investigation",
          subtitle: "High-risk · Ongoing Care",
          desc: "Deep diagnostic reasoning for complex or serious conditions.",
          href: "/feel-concern_about_serious_disease",
          align: "text-left pl-12",
        },
      ].map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className={`group relative ${item.align}`}
        >
          {/* NODE */}
          <div className="relative inline-block">

            {/* ENERGY RING */}
            <div className="absolute inset-0 rounded-full 
                            border border-emerald-400/40 
                            scale-125 opacity-0 
                            group-hover:opacity-100 group-hover:scale-150 
                            transition duration-700" />

            {/* CORE DOT */}
            <div className="w-5 h-5 rounded-full bg-emerald-400 
                            shadow-[0_0_30px_rgba(16,185,129,0.8)] 
                            mx-auto mb-6" />
          </div>

          {/* CONTENT */}
          <h3 className="text-white text-xl font-medium mb-1 
                         group-hover:text-emerald-300 transition">
            {item.title}
          </h3>

          <p className="text-emerald-300/70 text-xs uppercase tracking-widest mb-4">
            {item.subtitle}
          </p>

          <p className="text-white/45 text-sm leading-relaxed max-w-xs mx-auto">
            {item.desc}
          </p>
        </Link>
      ))}
    </div>
  </div>

  {/* SYSTEM FOOTNOTE */}
  <p className="relative mt-36 max-w-3xl mx-auto text-center text-white/35 text-sm leading-relaxed">
    DxAssist dynamically adjusts reasoning depth, evidence retrieval, and
    explanation fidelity based on the selected diagnostic context — ensuring
    safety, clarity, and clinical relevance at every stage.
  </p>
</section>

 <footer className="relative mt-40 overflow-hidden">

  {/* PREMIUM DARK BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-b 
                  from-[#020617] via-[#020b1a] to-[#01040b]" />

  {/* ENERGY AURAS */}
  <div className="absolute -top-48 left-1/4 w-[700px] h-[700px] 
                  bg-emerald-400/20 rounded-full blur-[220px]" />
  <div className="absolute -bottom-48 right-1/4 w-[700px] h-[700px] 
                  bg-cyan-400/20 rounded-full blur-[220px]" />

  {/* SUBTLE GRID (TECH FEEL) */}
  <div className="absolute inset-0 opacity-[0.03] 
                  bg-[linear-gradient(to_right,white_1px,transparent_1px),
                      linear-gradient(to_bottom,white_1px,transparent_1px)]
                  bg-[size:60px_60px]" />

  <div className="relative max-w-7xl mx-auto px-8 py-32 text-slate-200">

    {/* SYSTEM HEADER */}
    <div className="mb-24 flex flex-col md:flex-row 
                    items-start md:items-center justify-between gap-10">

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-white">
          DxAssist
        </h3>
        <p className="mt-2 text-slate-400 text-sm max-w-md">
          Clinical intelligence infrastructure for safe, evidence-grounded,
          AI-assisted decision support.
        </p>
      </div>

      {/* LIVE SYSTEM STATUS */}
      <div className="flex items-center gap-4 rounded-2xl 
                      border border-emerald-400/30 
                      bg-white/5 backdrop-blur-xl 
                      px-6 py-4">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full 
                           rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 
                           bg-emerald-500"></span>
        </span>
        <div>
          <p className="text-sm font-medium text-white">
            System Operational
          </p>
          <p className="text-xs text-slate-400 font-mono">
            Latency &lt; 120ms · All services online
          </p>
        </div>
      </div>
    </div>

    {/* MAIN GRID */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">

      {/* DISCLAIMER */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-emerald-300 mb-4">
          Medical & Legal Notice
        </h4>
        <p className="text-slate-400 text-sm leading-relaxed">
          DxAssist provides clinical decision support only and does not
          generate diagnoses or treatment plans. All outputs must be
          reviewed by qualified healthcare professionals.
        </p>
        <p className="mt-3 text-slate-500 text-xs leading-relaxed">
          Designed to support — never replace — medical expertise.
        </p>
      </div>

      {/* TRUST */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-emerald-300 mb-4">
          Trust & Governance
        </h4>

        <ul className="space-y-3 text-sm text-slate-400">
          <li>• Human-in-the-loop clinical oversight</li>
          <li>• Retrieval-augmented reasoning (RAG)</li>
          <li>• Privacy-first system architecture</li>
          <li>• Audit-ready output traceability</li>
        </ul>
      </div>

      {/* CONTACT FORM */}
      <div>
        <h4 className="text-xs uppercase tracking-widest text-emerald-300 mb-4">
          Contact & Collaboration
        </h4>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Work email"
            className="w-full rounded-xl bg-white/5 
                       border border-white/10 
                       px-5 py-3 text-sm text-white 
                       placeholder-slate-400
                       focus:outline-none focus:ring-2 
                       focus:ring-emerald-400/50"
          />

          <select
            className="w-full rounded-xl bg-white/5 
                       border border-white/10 
                       px-5 py-3 text-sm text-slate-300
                       focus:outline-none focus:ring-2 
                       focus:ring-emerald-400/50"
          >
            <option>Reason for contact</option>
            <option>Clinical collaboration</option>
            <option>Research & academia</option>
            <option>Product feedback</option>
            <option>Security / compliance</option>
          </select>

          <textarea
            rows={3}
            placeholder="Message"
            className="w-full rounded-xl bg-white/5 
                       border border-white/10 
                       px-5 py-3 text-sm text-white 
                       placeholder-slate-400
                       focus:outline-none focus:ring-2 
                       focus:ring-emerald-400/50"
          />

          <button
            type="submit"
            className="w-full rounded-xl 
                       bg-gradient-to-r from-emerald-400 to-cyan-400 
                       text-black font-medium py-3
                       hover:opacity-90 transition"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>

    {/* BOTTOM BAR */}
    <div className="pt-12 border-t border-white/10 
                    flex flex-col md:flex-row 
                    justify-between items-center 
                    gap-6 text-xs text-slate-400">

      <p>
        © {new Date().getFullYear()} DxAssist · All rights reserved
      </p>

      <div className="flex gap-6">
        <span className="hover:text-white cursor-pointer transition">
          Privacy
        </span>
        <span className="hover:text-white cursor-pointer transition">
          Terms
        </span>
        <span className="hover:text-white cursor-pointer transition">
          Security
        </span>
      </div>
    </div>

  </div>
</footer>


  </>

)
}
