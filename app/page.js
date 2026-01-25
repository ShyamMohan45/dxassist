

"use client"


import { Suspense, useEffect } from "react"

// import GoogleSignButton from "./components/GoogleSignButton"
import Link from "next/link"
// import { div } from "prelude-ls"
import Three from "../dynamic/Three"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"



export default function Home() {

  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      
      
      <main className="relative">
        <div className="relative h-[760px] overflow-visible"> 

  
  <div className="absolute inset-0 z-0 pointer-events-none">
    <Three />
  </div>

  {/* OVERLAY GRADIENT */}
  <div
    className="absolute inset-0 z-10 pointer-events-none
      bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.18),transparent_60%)]"
  />

  {/* UI CONTENT */}
  <div className="relative z-20">
    <div className="absolute bottom-6 left-10 text-[9px] tracking-[0.5em] uppercase text-white/25">
      Interface 2.0 // DxAssist Global
    </div>
  </div>

</div>


        {/* <div className="relative h-[655px] overflow-hidden">

  {/* THREE.JS BACKGROUND */}
          

  {/* <div className="absolute inset-0 z-0">
    <Three />
  </div> */}

  {/* OVERLAY GRADIENT (TRANSPARENT!) */}
  {/* <div className="absolute inset-0 z-10 
                  bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.18),transparent_60%)]" />

  {/* UI CONTENT */}
  {/* <div className="relative z-20">
    <div className="absolute bottom-6 left-10 text-[9px] tracking-[0.5em] uppercase text-white/25">
      Interface 2.0 // DxAssist Global
    </div>
  </div>

</div> */}

        {/* <div className="relative h-[655px] overflow-hidden">

  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,0.18),transparent_60%)]" />

  {/* THREE.JS BACKGROUND */}
  {/* <div className="absolute inset-0 -z-10 pointer-events-none">
    <Three />
  </div>

  <div className="absolute bottom-6 left-10 text-[9px] tracking-[0.5em] uppercase text-white/25">
    Interface 2.0 // DxAssist Global
  </div>

</div> */}

{/* 
        <div className="relative h-[655px] overflow-hidden">

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
        </div> */}

        {/* ================= HERO COPY ================= */}
       <div className="relative flex flex-col items-center justify-center 
                py-28 text-center 
                bg-gradient-to-b from-[#f8fafc] via-[#eef6f4] to-[#f1f5f9] 
                overflow-hidden">

  {/* SOFT AMBIENT GLOW (VERY SUBTLE) */}
  <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
    <div className="w-[520px] h-[180px] 
                    bg-emerald-300/8 blur-[160px] 
                    rounded-full" />
  </div>

  {/* BADGE */}
  <div className="relative mb-6 flex items-center gap-2 
                  rounded-full border border-emerald-300/40 
                  bg-white px-4 py-1.5 shadow-sm">
    <span className="h-2 w-2 rounded-full bg-emerald-500" />
    <span className="text-[15px] uppercase tracking-[0.3em] 
                     text-emerald-700">
      AI Powered Healthcare
    </span>
  </div>

  {/* HEADING */}
  {/* <h2 className="relative text-slate-900 
                 text-7xl md:text-4xl 
                 font-semibold leading-tight max-w-2xl">
    Precision Diagnostic Assistance
    <span className="block text-slate-600 font-normal text-xl mt-3">
      Built to elevate clinical decision-making
    </span>
  </h2> */}
{/* HEADING */}
<h2 className="relative text-slate-900 
               text-8xl md:text-6xl 
               font-semibold leading-tight max-w-2xl">
  Precision Diagnostic Assistance
  <span className="block text-slate-600 font-normal text-2xl mt-3">
    Built to elevate clinical decision-making
  </span>
</h2>



 
  <div className="mt-8 mb-10 flex items-center gap-4">
    <span className="h-px w-14 bg-gradient-to-r 
                     from-transparent via-emerald-400/40 to-transparent" />
    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
    <span className="h-px w-14 bg-gradient-to-r 
                     from-transparent via-emerald-400/40 to-transparent" />
  </div>

 
  <p className="relative max-w-xl text-slate-600 text-xl leading-relaxed">
    Dx Assist combines advanced generative AI with evidence-backed medical
    knowledge to transform unstructured clinical data into clear, actionable
    insights — without disrupting existing workflows.
  </p>

 
  <div className="relative mt-12 flex gap-4 justify-center flex-wrap">
    <Link href="/diagnostics"
      className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 
                 text-slate-900 font-semibold hover:opacity-90 transition transform hover:scale-105">
      Start Diagnosis
    </Link>
  </div>
</div>



       <div className="w-full bg-gradient-to-b 
                from-[#f8fafc] via-[#eef6f4] to-[#f1f5f9] 
                border-t border-slate-200">

  <div className="mt-24 max-w-5xl mx-auto relative px-6 md:px-10 py-14">

    
    <div className="absolute left-7 top-0 bottom-0 w-px 
                    bg-gradient-to-b from-transparent via-emerald-300/40 to-transparent">
      <div className="absolute left-[-2px] top-0 h-8 w-[5px] 
                      bg-emerald-400/60 blur-sm animate-[pulseDown_4s_linear_infinite]" />
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
      <div key={i} className="relative pl-24 py-12 group">

       
        <div className="absolute left-0 top-12 w-14 h-14 rounded-full 
                        border border-emerald-400/40 
                        bg-emerald-100 
                        flex flex-col items-center justify-center 
                        font-mono text-emerald-700 
                        group-hover:bg-emerald-200 transition">
          <span className="text-sm">{item.step}</span>
          <span className="text-[10px] opacity-70">NODE</span>
        </div>

      
        <div className="relative">
          <div className="flex flex-wrap items-center gap-4 mb-3">
            <h3 className="text-slate-900 text-lg font-medium tracking-wide">
              {item.title}
            </h3>

            <span className="text-[11px] uppercase tracking-widest 
                             text-emerald-700/70 font-mono">
              {item.meta}
            </span>

            <span className="ml-auto text-[11px] font-mono text-emerald-600">
              CONF {item.confidence}
            </span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            {item.desc}
          </p>

          <p className="mt-3 text-emerald-600/0 text-xs font-mono 
                        leading-relaxed 
                        group-hover:text-emerald-600/60 transition">
            ↳ System status: operational · latency &lt; 120ms · monitored
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


      </main>

   
      <section className="grid grid-cols-2 overflow-hidden relative">

        <div className="relative overflow-hidden bg-gradient-to-br from-[#f6fbfa] via-[#eef7f6] to-[#f0f4f9]">

          <div className="absolute -top-52 -left-52 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/20 via-cyan-400/10 to-transparent rounded-full blur-[160px]" />

          <div className="relative z-10 h-[72vh] flex flex-col justify-center items-center text-center px-16">

            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-emerald-700">
                AI-Driven Clinical Intelligence
              </span>
            </div>

            <h1 className="text-[4.5rem] leading-[1.05] font-semibold tracking-tight mb-8 text-slate-900">
              Enjoy care
              <span className="block bg-gradient-to-r from-emerald-500 via-cyan-500 to-teal-400 bg-clip-text text-transparent">
                again
              </span>
            </h1>

            <p className="text-lg text-slate-700 max-w-xl leading-relaxed mb-6">
              DxAssist is an advanced clinical intelligence platform that transforms
              unstructured medical data into clear, evidence-grounded diagnostic insight.
            </p>

            <p className="text-sm text-slate-500 max-w-lg leading-relaxed mb-10">
              Powered by retrieval-augmented generative models, probabilistic reasoning,
              and clinician-first safety architecture.
            </p>
          </div>
        </div>

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

      
      <section className="relative py-36 bg-white overflow-hidden">
      
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7fbfa] via-[#eef7f6] to-white" />
<div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] 
                   bg-emerald-400/15 rounded-full blur-[160px]" />
   <div className="absolute -bottom-40 left-[-10%] w-[600px] h-[600px]                    bg-cyan-400/10 rounded-full blur-[160px]" />

  
   <div className="relative max-w-6xl mx-auto rounded-[2.8rem] 
                   bg-white/70 backdrop-blur-2xl 
                   shadow-[0_30px_100px_rgba(0,0,0,0.12)] 
                   px-20 py-24">


    <div className="mb-8 flex justify-center">
       <span className="inline-flex items-center gap-3 rounded-full 
                        border border-emerald-500/20                        bg-emerald-500/10 
                       px-5 py-2 
                        text-[11px] tracking-[0.3em] uppercase 
                        text-emerald-700">
         AI ANALYSIS PIPELINE
       </span>
     </div>


     <h2 className="text-center text-[3.2rem] leading-tight font-semibold text-slate-900 mb-6">
       How DxAssist understands
       <span className="block text-slate-500 font-normal mt-2">
         clinical context & diagnostic signals
       </span>
     </h2>

 
     <p className="mx-auto max-w-2xl text-center text-slate-600 text-lg leading-relaxed mb-16">
       Our system processes unstructured clinical notes and patient data through
      a multi-stage AI reasoning pipeline designed for accuracy, traceability,
       and clinician trust.
     </p>


    <div className="relative max-w-5xl mx-auto">

    
       <div className="relative rounded-[2rem] border border-black/10 
                       bg-gradient-to-br from-white via-white to-emerald-50/40 
                       shadow-inner p-10">

   
         <div className="mb-6 flex items-center justify-between text-xs font-mono text-slate-500">
           <span>DxAssist · Analysis Engine</span>
           <span className="text-emerald-600">Status: Active</span>
         </div>

       
         <div className="h-[360px] rounded-xl 
                         bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 
                         flex items-center justify-center relative overflow-hidden">

          
           <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

     
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

      
      <section className="relative py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#f8fafc] to-[#f1f5f9]" />
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-cyan-400/12 rounded-full blur-[180px]" />
        <div className="absolute -bottom-40 right-1/4 w-[600px] h-[600px] bg-emerald-400/12 rounded-full blur-[180px]" />

        <div className="relative max-w-6xl mx-auto rounded-[2.8rem] bg-white/80 backdrop-blur-xl shadow-[0_30px_100px_rgba(0,0,0,0.08)] px-10 md:px-20 py-20">
          
          
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-emerald-600 text-xs tracking-[0.35em] uppercase font-semibold mb-3">
                  Clinical Performance Insights
                </p>
                <h2 className="text-[2.5rem] md:text-[3rem] font-semibold text-slate-900 leading-tight">
                  System Accuracy & Reliability Metrics
                  <span className="block text-slate-500 font-normal text-lg mt-3">
                    Real-world diagnostic performance across patient cohorts
                  </span>
                </h2>
              </div>
              <div className="flex items-center gap-3 rounded-xl bg-emerald-50 px-5 py-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700">Live Metrics</span>
              </div>
            </div>
          </div>

    
          <div className="relative rounded-[1.5rem] border border-slate-200/50 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart
                data={[
                  { name: "Sensitivity", value: 96.2, fill: "#10b981" },
                  { name: "Specificity", value: 94.8, fill: "#06b6d4" },
                  { name: "Accuracy", value: 95.5, fill: "#8b5cf6" },
                  { name: "PPV", value: 93.1, fill: "#f59e0b" },
                  { name: "NPV", value: 97.3, fill: "#ec4899" },
                  { name: "F1-Score", value: 94.6, fill: "#14b8a6" },
                ]}
                margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#10b981" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" style={{ fontSize: "12px", fontWeight: 500 }} />
                <YAxis stroke="#94a3b8" domain={[0, 100]} style={{ fontSize: "12px" }} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid #e2e8f0",
                    borderRadius: "8px",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  }}
                  formatter={(value) => [`${value.toFixed(1)}%`, ""]}
                  labelStyle={{ color: "#1e293b", fontWeight: "600" }}
                />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Sensitivity", desc: "True Positive Rate", value: "96.2%", color: "emerald" },
              { label: "Specificity", desc: "True Negative Rate", value: "94.8%", color: "cyan" },
              { label: "Accuracy", desc: "Overall Correctness", value: "95.5%", color: "violet" },
              { label: "Positive Predictive Value", desc: "Precision", value: "93.1%", color: "amber" },
              { label: "Negative Predictive Value", desc: "Safety Net", value: "97.3%", color: "pink" },
              { label: "F1-Score", desc: "Harmonic Mean", value: "94.6%", color: "teal" },
            ].map((metric, i) => (
              <div key={i} className="relative p-5 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:shadow-md transition">
                <div className={`h-1.5 w-8 rounded-full bg-${metric.color}-500 mb-3`} />
                <p className="font-semibold text-slate-900 text-sm">{metric.label}</p>
                <p className="text-xs text-slate-500 mt-1">{metric.desc}</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-transparent mt-2">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>

         
          <p className="mt-10 text-center text-slate-500 text-sm">
            Metrics calculated from retrospective analysis of 10,000+ clinical cases across 15 medical specialties. Continuous validation pipeline ensures model drift detection.
          </p>
        </div>
      </section>


      {/* ================= MULTILINGUAL ================= */}
      <section className="relative mt-32">
       
        <div className="absolute inset-0 bg-gradient-to-br 
                from-[#f7fbfa] via-[#eef7f6] to-[#f1f5f9]" />
<div className="absolute -top-40 left-1/2 -translate-x-1/2 
                w-[700px] h-[700px] bg-emerald-400/15 
                rounded-full blur-[180px]" />

<div className="relative max-w-6xl mx-auto px-6">

  <div className="relative rounded-[2.8rem] 
                  bg-white/70 backdrop-blur-2xl 
                  shadow-[0_30px_100px_rgba(0,0,0,0.12)] 
                  px-20 py-24">

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

    {/* VISUAL + TECH DETAILS */} <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

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

     
      <section className="relative mt-40 py-40">
     
<div className="absolute inset-0 bg-gradient-to-b 
                from-[#f8fafc] via-[#eef6f4] to-[#f1f5f9]" />


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-[900px] h-[900px] bg-emerald-300/8 rounded-full blur-[300px]" />


<div className="relative text-center mb-32">
  <p className="text-emerald-600 text-xs tracking-[0.35em] uppercase mb-6">
    DxAssist · Intelligent Entry Point
  </p>

  <h2 className="text-[4.2rem] font-medium text-slate-900 leading-tight">
    Begin your
    <span className="block text-transparent bg-clip-text 
                     bg-gradient-to-r from-emerald-500 to-cyan-500">
      diagnostic journey
    </span>
  </h2>

  <p className="mt-6 max-w-xl mx-auto text-slate-600 text-lg">
    Select the context that best represents your current clinical state.
    The system adapts its reasoning accordingly.
  </p>
</div>


<div className="relative max-w-6xl mx-auto">

 
  <div className="absolute left-1/2 top-0 bottom-0 w-px 
                  bg-gradient-to-b from-transparent via-emerald-300/40 to-transparent" />

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
       
        <div className="relative inline-block">

       
          <div className="absolute inset-0 rounded-full 
                          border border-emerald-400/30 
                          scale-125 opacity-0 
                          group-hover:opacity-100 group-hover:scale-150 
                          transition duration-700" />

     
          <div className="w-5 h-5 rounded-full bg-emerald-400 
                          shadow-[0_0_20px_rgba(16,185,129,0.35)] 
                          mx-auto mb-6" />
        </div>

       
        <h3 className="text-slate-900 text-xl font-medium mb-1 
                       group-hover:text-emerald-600 transition">
          {item.title}
        </h3>

        <p className="text-emerald-600/70 text-xs uppercase tracking-widest mb-4">
          {item.subtitle}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed max-w-xs mx-auto">
          {item.desc}
        </p>
      </Link>
    ))}
  </div>
</div>

{/* SYSTEM FOOTNOTE */}
<p className="relative mt-36 max-w-3xl mx-auto text-center text-slate-500 text-sm leading-relaxed">
  DxAssist dynamically adjusts reasoning depth, evidence retrieval, and
  explanation fidelity based on the selected diagnostic context — ensuring
  safety, clarity, and clinical relevance at every stage.
</p>


      </section>


     
      <section className="relative py-32 overflow-hidden">
      
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
        <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-emerald-400/8 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-[-10%] w-[600px] h-[600px] bg-cyan-400/6 rounded-full blur-[160px]" />

       
        <div className="relative max-w-6xl mx-auto px-8">
          
          
          <div className="text-center mb-20">
            <div className="mb-6 flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2 text-[11px] tracking-[0.3em] uppercase text-emerald-700">
                ⭐ Trusted by Healthcare Professionals
              </span>
            </div>
            
            <h2 className="text-4xl font-semibold text-slate-900 mb-4">
              Testimonials from Our Community
            </h2>
            
            <p className="max-w-2xl mx-auto text-slate-600 text-lg">
              Hear from doctors and patients who have experienced the power of AI-assisted diagnostics
            </p>
          </div>

          {/* TESTIMONIALS GRID */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* TESTIMONIAL 1 - DOCTOR */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
                {/* STARS */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl text-yellow-400">★</span>
                  ))}
                </div>

                {/* TESTIMONIAL TEXT */}
                <p className="text-slate-700 text-base leading-relaxed mb-6 flex-grow">
                  "DxAssist has revolutionized how we approach complex cases. The AI-powered insights are remarkably accurate and help us make faster, more informed decisions."
                </p>

                {/* AUTHOR INFO */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold">
                    DR
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dr. Rajesh Kumar</p>
                    <p className="text-xs text-slate-500">Senior Cardiologist</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
                
                <div className="flex gap-1 mb-4">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-xl text-yellow-400">★</span>
                  ))}
                  <span className="text-xl text-yellow-300">★</span>
                </div>

               
                <p className="text-slate-700 text-base leading-relaxed mb-6 flex-grow">
                  "The evidence-backed recommendations and transparent reasoning make this tool invaluable in my practice. It's not replacing doctors—it's empowering us."
                </p>

                {/* AUTHOR INFO */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 flex items-center justify-center text-white font-bold">
                    DR
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dr. Priya Sharma</p>
                    <p className="text-xs text-slate-500">General Practitioner</p>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-cyan-400/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-slate-200/60 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                
             
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-xl text-yellow-400">★</span>
                  ))}
                </div>

            
                <p className="text-slate-700 text-base leading-relaxed mb-6 flex-grow">
                  "Impressive accuracy combined with clinical safety protocols. This is exactly what modern healthcare needs—AI that respects the nuance of medicine."
                </p>

                
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-blue-400 flex items-center justify-center text-white font-bold">
                    DR
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Dr. Arjun Patel</p>
                    <p className="text-xs text-slate-500">Diagnostic Specialist</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        
          <div className="mt-20 pt-20 border-t border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 text-center mb-12">
              Patient Success Stories
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              
          
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200/40 hover:border-emerald-300/50 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400">★</span>
                    ))}
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    "After months of uncertainty about recurring headaches, DxAssist's analysis provided clarity that helped me and my doctor identify the root cause. Life-changing!"
                  </p>
                  
                  <p className="font-semibold text-slate-900">Priya M.</p>
                  <p className="text-sm text-slate-500">Patient | India</p>
                </div>
              </div>

              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-blue-400/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200/40 hover:border-emerald-300/50 transition-all duration-300">
                  <div className="flex gap-1 mb-4">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-lg text-yellow-400">★</span>
                    ))}
                    <span className="text-lg text-yellow-300">★</span>
                  </div>
                  
                  <p className="text-slate-700 mb-4 leading-relaxed">
                    "The AI analysis gave me confidence in my doctor's recommendations. Having evidence-backed explanations made all the difference in my treatment decision."
                  </p>
                  
                  <p className="font-semibold text-slate-900">Amit S.</p>
                  <p className="text-sm text-slate-500">Patient | Delhi</p>
                </div>
              </div>

            </div>
          </div>

          
          <div className="mt-20 pt-20 border-t border-slate-200">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              
              <div className="group">
                <p className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">5K+</p>
                <p className="text-slate-600 text-sm">Healthcare Professionals</p>
              </div>

              <div className="group">
                <p className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">98%</p>
                <p className="text-slate-600 text-sm">User Satisfaction</p>
              </div>

              <div className="group">
                <p className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">50K+</p>
                <p className="text-slate-600 text-sm">Analyses Performed</p>
              </div>

              <div className="group">
                <p className="text-4xl font-bold text-emerald-600 mb-2 group-hover:scale-110 transition-transform">30+</p>
                <p className="text-slate-600 text-sm">Countries Using DxAssist</p>
              </div>

            </div>
          </div>

        </div>
      </section>


     
      <footer className="relative mt-40 overflow-hidden">
      
<div
  className="absolute inset-0 bg-gradient-to-b 
             from-[#f8fafc] via-[#eef6f4] to-[#f1f5f9]"
/>


<div
  className="absolute -top-48 left-1/4 w-[700px] h-[700px] 
             bg-emerald-300/10 rounded-full blur-[260px]"
/>
<div
  className="absolute -bottom-48 right-1/4 w-[700px] h-[700px] 
             bg-sky-300/8 rounded-full blur-[300px]"
/>


<div
  className="absolute inset-0 opacity-[0.02] 
             bg-[linear-gradient(to_right,#94a3b8_1px,transparent_1px),
                 linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)]
             bg-[size:80px_80px]"
/>

<div className="relative max-w-7xl mx-auto px-8 py-32 text-slate-700">

  
  <div
    className="mb-24 flex flex-col md:flex-row 
               items-start md:items-center justify-between gap-10"
  >
    <div>
      <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
        DxAssist
      </h3>
      <p className="mt-2 text-slate-500 text-sm max-w-md">
        Clinical intelligence infrastructure for safe, evidence-grounded,
        AI-assisted decision support.
      </p>
    </div>

    {/* SYSTEM STATUS */}
    <div
      className="flex items-center gap-4 rounded-2xl 
                 border border-emerald-400/30 
                 bg-white/70 backdrop-blur-xl 
                 px-6 py-4 shadow-sm"
    >
      <span className="relative flex h-3 w-3">
        <span
          className="animate-ping absolute inline-flex h-full w-full 
                     rounded-full bg-emerald-400 opacity-40"
        />
        <span
          className="relative inline-flex rounded-full h-3 w-3 
                     bg-emerald-500"
        />
      </span>

      <div>
        <p className="text-sm font-medium text-slate-900">
          System Operational
        </p>
        <p className="text-xs text-slate-500 font-mono">
          Latency &lt; 120ms · All services online
        </p>
      </div>
    </div>
  </div>

  {/* MAIN GRID */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-20 mb-24">

    {/* DISCLAIMER */}
    <div>
      <h4 className="text-xs uppercase tracking-widest text-emerald-600 mb-4">
        Medical & Legal Notice
      </h4>
      <p className="text-slate-600 text-sm leading-relaxed">
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
      <h4 className="text-xs uppercase tracking-widest text-emerald-600 mb-4">
        Trust & Governance
      </h4>
      <ul className="space-y-3 text-sm text-slate-600">
        <li>• Human-in-the-loop clinical oversight</li>
        <li>• Retrieval-augmented reasoning (RAG)</li>
        <li>• Privacy-first system architecture</li>
        <li>• Audit-ready output traceability</li>
      </ul>
    </div>

    {/* CONTACT FORM */}
    <div>
      <h4 className="text-xs uppercase tracking-widest text-emerald-600 mb-4">
        Contact & Collaboration
      </h4>

      <form className="space-y-4">
        <input
          type="email"
          placeholder="Work email"
          className="w-full rounded-xl bg-white 
                     border border-slate-200 
                     px-5 py-3 text-sm text-slate-900 
                     placeholder-slate-400
                     focus:outline-none focus:ring-2 
                     focus:ring-emerald-400/40"
        />

        <select
          className="w-full rounded-xl bg-white 
                     border border-slate-200 
                     px-5 py-3 text-sm text-slate-600
                     focus:outline-none focus:ring-2 
                     focus:ring-emerald-400/40"
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
          className="w-full rounded-xl bg-white 
                     border border-slate-200 
                     px-5 py-3 text-sm text-slate-900 
                     placeholder-slate-400
                     focus:outline-none focus:ring-2 
                     focus:ring-emerald-400/40"
        />

        <button
          type="submit"
          className="w-full rounded-xl 
                     bg-gradient-to-r from-emerald-400 to-cyan-400 
                     text-slate-900 font-medium py-3
                     hover:opacity-90 transition"
        >
          Submit Request
        </button>
      </form>
    </div>
  </div>

  {/* FOOTER */}
  <div
    className="pt-12 border-t border-slate-200 
               flex flex-col md:flex-row 
               justify-between items-center 
               gap-6 text-xs text-slate-500"
  >
    <p>
      © {new Date().getFullYear()} DxAssist · All rights reserved
    </p>

    <div className="flex gap-6">
      <span className="hover:text-slate-900 cursor-pointer transition">
        Privacy
      </span>
      <span className="hover:text-slate-900 cursor-pointer transition">
        Terms
      </span>
      <span className="hover:text-slate-900 cursor-pointer transition">
        Security
      </span>
    </div>
  </div>
</div>

      </footer>

    </>
  )
}