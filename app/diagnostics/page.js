// // // // // // // // import Link from "next/link";
// // // // // // // // export default function Home() {
// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className="
// // // // // // // //         relative overflow-hidden text-white
// // // // // // // //         bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.18),transparent),
// // // // // // // //             radial-gradient(1000px_500px_at_80%_10%,rgba(34,211,238,0.18),transparent),
// // // // // // // //             linear-gradient(to_bottom,#020617,#020617,#030712)]
// // // // // // // //       "
// // // // // // // //     >
    
// // // // // // // //       <div className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-400/10 rounded-full blur-[220px]" />
// // // // // // // //       <div className="pointer-events-none absolute top-1/3 -left-52 w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[200px]" />
// // // // // // // //       <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px]" />

      
// // // // // // // //       <div
// // // // // // // //         className="pointer-events-none absolute inset-0 opacity-[0.035]"
// // // // // // // //         style={{
// // // // // // // //           backgroundImage:
// // // // // // // //             "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
// // // // // // // //           backgroundSize: "80px 80px",
// // // // // // // //         }}
// // // // // // // //       />


// // // // // // // //       <section className="relative min-h-screen flex items-center px-24">
// // // // // // // //         {/* Glass contrast layer */}
// // // // // // // //         <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

// // // // // // // //         <div className="relative max-w-3xl">
// // // // // // // //           <span
// // // // // // // //             className="
// // // // // // // //               inline-block mb-6 px-4 py-1.5 rounded-full text-sm tracking-wide
// // // // // // // //               bg-white/10 backdrop-blur
// // // // // // // //               animate-[pulse_6s_ease-in-out_infinite]
// // // // // // // //             "
// // // // // // // //           >
// // // // // // // //             AI for Clinical Intelligence
// // // // // // // //           </span>

// // // // // // // //           <h1 className="text-[5.5rem] leading-[1.05] font-extrabold mb-8">
// // // // // // // //             Healthcare,
// // // // // // // //             <br />
// // // // // // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
// // // // // // // //               re-imagined
// // // // // // // //             </span>
// // // // // // // //           </h1>

// // // // // // // //           <p className="text-lg text-white/75 max-w-xl mb-12">
// // // // // // // //             DxAssist transforms unstructured clinical notes and patient inputs
// // // // // // // //             into precise, traceable, and evidence-backed diagnostic intelligence.
// // // // // // // //             Designed to support clinicians — never replace them.
// // // // // // // //           </p>

        
// // // // // // // //           <div className="relative inline-block group">
// // // // // // // //             <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-xl opacity-60 group-hover:opacity-100 transition" />
// // // // // // // //   <Link href="/login"> <button className=" relative px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-cyan-500 text-black hover:scale-[1.03] transition-all duration-300 " > Start Diagnostic Insight → </button>

// // // // // // // // </Link>

// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

   
// // // // // // // //       <section className="relative z-10 -mt-32 px-20">
// // // // // // // //         <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/15 shadow-2xl p-14 flex justify-between">
// // // // // // // //           {[
// // // // // // // //             { title: "Unstructured → Structured", desc: "Clinical notes, simplified" },
// // // // // // // //             { title: "Evidence-Backed AI", desc: "Retrieval-augmented generation" },
// // // // // // // //             { title: "Privacy-First", desc: "Zero data resale, zero leakage" },
// // // // // // // //             { title: "Clinician-Centric", desc: "AI assists, humans decide" },
// // // // // // // //           ].map((item, i) => (
// // // // // // // //             <div key={i} className="max-w-[220px]">
// // // // // // // //               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
// // // // // // // //               <p className="text-sm text-white/60">{item.desc}</p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </section>

     
// // // // // // // //       <section className="relative py-40">
// // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent" />

// // // // // // // //         <div className="relative max-w-5xl mx-auto text-center">
// // // // // // // //           <h2 className="text-5xl font-extrabold mb-8">
// // // // // // // //             Designed for
// // // // // // // //             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
// // // // // // // //               clinical clarity
// // // // // // // //             </span>
// // // // // // // //           </h2>

// // // // // // // //           <p className="text-lg text-white/70 max-w-3xl mx-auto">
// // // // // // // //             DxAssist reduces diagnostic noise by organizing symptoms, findings,
// // // // // // // //             and evidence into prioritized hypotheses — improving speed, accuracy,
// // // // // // // //             and confidence in decision-making.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>

      
// // // // // // // //       <section className="relative px-24 pb-40">
// // // // // // // //         <div className="grid grid-cols-3 gap-10">
// // // // // // // //           {[
// // // // // // // //             { title: "I feel fine", desc: "Quick reassurance and summaries" },
// // // // // // // //             { title: "Something feels off", desc: "Early signal detection & triage" },
// // // // // // // //             { title: "Serious concern", desc: "Focused diagnostic intelligence" },
// // // // // // // //           ].map((item, i) => (
// // // // // // // //             <div
// // // // // // // //               key={i}
// // // // // // // //               className="
// // // // // // // //                 relative
// // // // // // // //                 bg-gradient-to-b from-white/[0.08] to-white/[0.02]
// // // // // // // //                 backdrop-blur-xl
// // // // // // // //                 rounded-[2rem] p-10
// // // // // // // //                 border border-white/15
// // // // // // // //                 hover:-translate-y-4
// // // // // // // //                 hover:shadow-[0_40px_120px_rgba(16,185,129,0.15)]
// // // // // // // //                 transition-all duration-700
// // // // // // // //               "
// // // // // // // //             >
// // // // // // // //               <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
// // // // // // // //               <p className="text-white/65 mb-8">{item.desc}</p>

// // // // // // // //               <span className="text-emerald-400 font-semibold tracking-wide cursor-pointer hover:underline">
// // // // // // // //                 Continue →
// // // // // // // //               </span>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </section>




// // // // // // // //       <section className="border-t border-white/10 py-16">
// // // // // // // //         <p className="max-w-5xl mx-auto text-center text-sm text-white/50 leading-relaxed">
// // // // // // // //           DxAssist uses generative AI with retrieval augmentation to assist
// // // // // // // //           clinicians by summarizing clinical data and proposing evidence-backed
// // // // // // // //           diagnostic hypotheses. It does not replace professional medical
// // // // // // // //           judgment and should be used as a clinical decision-support tool only.
// // // // // // // //         </p>
// // // // // // // //       </section>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // // "use client";

// // // // // // // // import Link from "next/link";
// // // // // // // // import { useEffect, useState } from "react";

// // // // // // // // export default function Home() {
// // // // // // // //   const [mounted, setMounted] = useState(false);

// // // // // // // //   useEffect(() => {
// // // // // // // //     setMounted(true);
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <div
// // // // // // // //       className="
// // // // // // // //         relative overflow-hidden text-white
// // // // // // // //         bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.18),transparent),
// // // // // // // //             radial-gradient(1000px_500px_at_80%_10%,rgba(34,211,238,0.18),transparent),
// // // // // // // //             linear-gradient(to_bottom,#020617,#020617,#030712)]
// // // // // // // //       "
// // // // // // // //     >
// // // // // // // //       {/* BACKGROUND GLOWS */}
// // // // // // // //       <div className="pointer-events-none absolute -top-60 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-emerald-400/10 rounded-full blur-[220px]" />
// // // // // // // //       <div className="pointer-events-none absolute top-1/3 -left-52 w-[700px] h-[700px] bg-cyan-400/10 rounded-full blur-[200px]" />
// // // // // // // //       <div className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px]" />

// // // // // // // //       {/* GRID OVERLAY */}
// // // // // // // //       <div
// // // // // // // //         className="pointer-events-none absolute inset-0 opacity-[0.035]"
// // // // // // // //         style={{
// // // // // // // //           backgroundImage:
// // // // // // // //             "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
// // // // // // // //           backgroundSize: "80px 80px",
// // // // // // // //         }}
// // // // // // // //       />

// // // // // // // //       {/* ================= HERO ================= */}
// // // // // // // //       <section className="relative min-h-screen flex items-center px-24">
// // // // // // // //         <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

// // // // // // // //         <div
// // // // // // // //           className={`relative max-w-3xl transition-all duration-1000 ${
// // // // // // // //             mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
// // // // // // // //           }`}
// // // // // // // //         >
// // // // // // // //           <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm tracking-wide bg-white/10 backdrop-blur animate-pulse">
// // // // // // // //             AI for Clinical Intelligence
// // // // // // // //           </span>

// // // // // // // //           <h1 className="text-[5.5rem] leading-[1.05] font-extrabold mb-8">
// // // // // // // //             Healthcare,
// // // // // // // //             <br />
// // // // // // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
// // // // // // // //               re-imagined
// // // // // // // //             </span>
// // // // // // // //           </h1>

// // // // // // // //           <p className="text-lg text-white/75 max-w-xl mb-12">
// // // // // // // //             DxAssist transforms unstructured clinical notes and patient inputs
// // // // // // // //             into precise, traceable, and evidence-backed diagnostic intelligence.
// // // // // // // //             Designed to support clinicians — never replace them.
// // // // // // // //           </p>

// // // // // // // //           {/* CTA */}
// // // // // // // //           <div className="relative inline-block group">
// // // // // // // //             <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-xl opacity-50 group-hover:opacity-100 transition duration-500" />

// // // // // // // //             <Link href="/login">
// // // // // // // //               <button
// // // // // // // //                 className="
// // // // // // // //                   relative px-8 py-4 rounded-xl font-semibold
// // // // // // // //                   bg-gradient-to-r from-emerald-500 to-cyan-500
// // // // // // // //                   text-black
// // // // // // // //                   transition-all duration-300
// // // // // // // //                   hover:scale-[1.04]
// // // // // // // //                   active:scale-95
// // // // // // // //                 "
// // // // // // // //               >
// // // // // // // //                 Start Diagnostic Insight →
// // // // // // // //               </button>
// // // // // // // //             </Link>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FEATURE STRIP ================= */}
// // // // // // // //       <section className="relative z-10 -mt-32 px-20">
// // // // // // // //         <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/15 shadow-2xl p-14 flex justify-between">
// // // // // // // //           {[
// // // // // // // //             { title: "Unstructured → Structured", desc: "Clinical notes, simplified" },
// // // // // // // //             { title: "Evidence-Backed AI", desc: "Retrieval-augmented generation" },
// // // // // // // //             { title: "Privacy-First", desc: "Zero data resale, zero leakage" },
// // // // // // // //             { title: "Clinician-Centric", desc: "AI assists, humans decide" },
// // // // // // // //           ].map((item, i) => (
// // // // // // // //             <div
// // // // // // // //               key={i}
// // // // // // // //               className="
// // // // // // // //                 max-w-[220px]
// // // // // // // //                 transition-all duration-500
// // // // // // // //                 hover:-translate-y-2
// // // // // // // //               "
// // // // // // // //             >
// // // // // // // //               <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
// // // // // // // //               <p className="text-sm text-white/60">{item.desc}</p>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= CLARITY SECTION ================= */}
// // // // // // // //       <section className="relative py-40">
// // // // // // // //         <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-transparent" />

// // // // // // // //         <div className="relative max-w-5xl mx-auto text-center">
// // // // // // // //           <h2 className="text-5xl font-extrabold mb-8">
// // // // // // // //             Designed for
// // // // // // // //             <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
// // // // // // // //               clinical clarity
// // // // // // // //             </span>
// // // // // // // //           </h2>

// // // // // // // //           <p className="text-lg text-white/70 max-w-3xl mx-auto">
// // // // // // // //             DxAssist reduces diagnostic noise by organizing symptoms, findings,
// // // // // // // //             and evidence into prioritized hypotheses — improving speed, accuracy,
// // // // // // // //             and confidence in decision-making.
// // // // // // // //           </p>
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= INTERACTIVE CARDS ================= */}
// // // // // // // //       <section className="relative px-24 pb-40">
// // // // // // // //         <div className="grid grid-cols-3 gap-10">
// // // // // // // //           {[
// // // // // // // //             { title: "I feel fine", desc: "Quick reassurance and summaries" },
// // // // // // // //             { title: "Something feels off", desc: "Early signal detection & triage" },
// // // // // // // //             { title: "Serious concern", desc: "Focused diagnostic intelligence" },
// // // // // // // //           ].map((item, i) => (
// // // // // // // //             <div
// // // // // // // //               key={i}
// // // // // // // //               className="
// // // // // // // //                 group relative
// // // // // // // //                 bg-gradient-to-b from-white/[0.08] to-white/[0.02]
// // // // // // // //                 backdrop-blur-xl
// // // // // // // //                 rounded-[2rem] p-10
// // // // // // // //                 border border-white/15
// // // // // // // //                 transition-all duration-700
// // // // // // // //                 hover:-translate-y-6
// // // // // // // //                 hover:shadow-[0_40px_120px_rgba(16,185,129,0.18)]
// // // // // // // //               "
// // // // // // // //             >
// // // // // // // //               <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
// // // // // // // //               <p className="text-white/65 mb-8">{item.desc}</p>

// // // // // // // //               <span className="inline-flex items-center gap-2 text-emerald-400 font-semibold tracking-wide group-hover:gap-4 transition-all">
// // // // // // // //                 Continue →
// // // // // // // //               </span>
// // // // // // // //             </div>
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </section>

// // // // // // // //       {/* ================= FOOTER NOTE ================= */}
// // // // // // // //       <section className="border-t border-white/10 py-16">
// // // // // // // //         <p className="max-w-5xl mx-auto text-center text-sm text-white/50 leading-relaxed">
// // // // // // // //           DxAssist uses generative AI with retrieval augmentation to assist
// // // // // // // //           clinicians by summarizing clinical data and proposing evidence-backed
// // // // // // // //           diagnostic hypotheses. It does not replace professional medical
// // // // // // // //           judgment and should be used as a clinical decision-support tool only.
// // // // // // // //         </p>
// // // // // // // //       </section>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // "use client";

// // // // // // // import Link from "next/link";
// // // // // // // import { useEffect, useRef, useState } from "react";

// // // // // // // export default function Home() {
// // // // // // //   const containerRef = useRef(null);
// // // // // // //   const ctaRef = useRef(null);
// // // // // // //   const [scroll, setScroll] = useState(0);

// // // // // // //   /* ================= SCROLL PROGRESS ================= */
// // // // // // //   useEffect(() => {
// // // // // // //     const onScroll = () => {
// // // // // // //       const scrolled =
// // // // // // //         window.scrollY /
// // // // // // //         (document.documentElement.scrollHeight - window.innerHeight);
// // // // // // //       setScroll(scrolled);
// // // // // // //     };
// // // // // // //     window.addEventListener("scroll", onScroll);
// // // // // // //     return () => window.removeEventListener("scroll", onScroll);
// // // // // // //   }, []);

// // // // // // //   /* ================= BACKGROUND PARALLAX ================= */
// // // // // // //   useEffect(() => {
// // // // // // //     const el = containerRef.current;
// // // // // // //     if (!el) return;

// // // // // // //     const move = (e) => {
// // // // // // //       const x = (e.clientX / window.innerWidth - 0.5) * 20;
// // // // // // //       const y = (e.clientY / window.innerHeight - 0.5) * 20;
// // // // // // //       el.style.setProperty("--mx", `${x}px`);
// // // // // // //       el.style.setProperty("--my", `${y}px`);
// // // // // // //     };

// // // // // // //     window.addEventListener("mousemove", move);
// // // // // // //     return () => window.removeEventListener("mousemove", move);
// // // // // // //   }, []);

// // // // // // //   /* ================= MAGNETIC BUTTON ================= */
// // // // // // //   const magneticMove = (e) => {
// // // // // // //     const btn = ctaRef.current;
// // // // // // //     const rect = btn.getBoundingClientRect();
// // // // // // //     const x = e.clientX - rect.left - rect.width / 2;
// // // // // // //     const y = e.clientY - rect.top - rect.height / 2;
// // // // // // //     btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
// // // // // // //   };

// // // // // // //   const magneticLeave = () => {
// // // // // // //     ctaRef.current.style.transform = "translate(0,0)";
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div
// // // // // // //       ref={containerRef}
// // // // // // //       className="
// // // // // // //         relative overflow-hidden text-white
// // // // // // //         bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.18),transparent),
// // // // // // //             radial-gradient(1000px_500px_at_80%_10%,rgba(34,211,238,0.18),transparent),
// // // // // // //             linear-gradient(to_bottom,#020617,#020617,#030712)]
// // // // // // //       "
// // // // // // //       style={{
// // // // // // //         transform: "translate(var(--mx), var(--my))",
// // // // // // //         transition: "transform 0.2s ease-out",
// // // // // // //       }}
// // // // // // //     >
// // // // // // //       {/* ================= SCROLL INDICATOR ================= */}
// // // // // // //       <div className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-400 to-cyan-400 z-50"
// // // // // // //         style={{ width: `${scroll * 100}%` }}
// // // // // // //       />

// // // // // // //       {/* ================= HERO ================= */}
// // // // // // //       <section className="relative min-h-screen flex items-center px-24">
// // // // // // //         <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

// // // // // // //         <div className="relative max-w-3xl">
// // // // // // //           <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm bg-white/10 animate-pulse">
// // // // // // //             AI for Clinical Intelligence
// // // // // // //           </span>

// // // // // // //           <h1 className="text-[5.5rem] leading-[1.05] font-extrabold mb-8">
// // // // // // //             Healthcare,
// // // // // // //             <br />
// // // // // // //             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
// // // // // // //               re-imagined
// // // // // // //             </span>
// // // // // // //           </h1>

// // // // // // //           <p className="text-lg text-white/75 max-w-xl mb-12">
// // // // // // //             DxAssist transforms unstructured clinical notes into precise,
// // // // // // //             evidence-backed diagnostic intelligence.
// // // // // // //           </p>

// // // // // // //           {/* ================= MAGNETIC CTA ================= */}
// // // // // // //           <div className="relative inline-block group">
// // // // // // //             <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-xl opacity-60 group-hover:opacity-100 transition" />

// // // // // // //             <Link href="/login">
// // // // // // //               <button
// // // // // // //                 ref={ctaRef}
// // // // // // //                 onMouseMove={magneticMove}
// // // // // // //                 onMouseLeave={magneticLeave}
// // // // // // //                 className="
// // // // // // //                   relative px-10 py-5 rounded-xl font-semibold
// // // // // // //                   bg-gradient-to-r from-emerald-500 to-cyan-500
// // // // // // //                   text-black
// // // // // // //                   transition-transform duration-200
// // // // // // //                 "
// // // // // // //               >
// // // // // // //                 Start Diagnostic Insight →
// // // // // // //               </button>
// // // // // // //             </Link>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= INTERACTIVE CARDS ================= */}
// // // // // // //       <section className="px-24 pb-40">
// // // // // // //         <div className="grid grid-cols-3 gap-10">
// // // // // // //           {[
// // // // // // //             { title: "I feel fine", desc: "Quick reassurance and summaries" },
// // // // // // //             { title: "Something feels off", desc: "Early signal detection & triage" },
// // // // // // //             { title: "Serious concern", desc: "Focused diagnostic intelligence" },
// // // // // // //           ].map((item, i) => (
// // // // // // //             <div
// // // // // // //               key={i}
// // // // // // //               onMouseMove={(e) => {
// // // // // // //                 const rect = e.currentTarget.getBoundingClientRect();
// // // // // // //                 const x = (e.clientX - rect.left) / rect.width - 0.5;
// // // // // // //                 const y = (e.clientY - rect.top) / rect.height - 0.5;
// // // // // // //                 e.currentTarget.style.transform = `
// // // // // // //                   rotateX(${y * -10}deg)
// // // // // // //                   rotateY(${x * 10}deg)
// // // // // // //                   translateY(-12px)
// // // // // // //                 `;
// // // // // // //               }}
// // // // // // //               onMouseLeave={(e) => {
// // // // // // //                 e.currentTarget.style.transform =
// // // // // // //                   "rotateX(0) rotateY(0) translateY(0)";
// // // // // // //               }}
// // // // // // //               className="
// // // // // // //                 relative bg-gradient-to-b from-white/[0.08] to-white/[0.02]
// // // // // // //                 backdrop-blur-xl rounded-[2rem] p-10
// // // // // // //                 border border-white/15
// // // // // // //                 transition-all duration-300
// // // // // // //                 cursor-pointer
// // // // // // //               "
// // // // // // //             >
// // // // // // //               <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
// // // // // // //               <p className="text-white/65 mb-8">{item.desc}</p>
// // // // // // //               <span className="text-emerald-400 font-semibold">
// // // // // // //                 Continue →
// // // // // // //               </span>
// // // // // // //             </div>
// // // // // // //           ))}
// // // // // // //         </div>
// // // // // // //       </section>

// // // // // // //       {/* ================= FOOTER ================= */}
// // // // // // //       <section className="border-t border-white/10 py-16">
// // // // // // //         <p className="max-w-5xl mx-auto text-center text-sm text-white/50">
// // // // // // //           DxAssist is a clinical decision-support tool and does not replace
// // // // // // //           professional medical judgment.
// // // // // // //         </p>
// // // // // // //       </section>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }
// // // // // // "use client"

// // // // // // import Link from "next/link"
// // // // // // import { useEffect, useRef, useState } from "react"

// // // // // // export default function Home() {
// // // // // //   const containerRef = useRef(null)
// // // // // //   const buttonRef = useRef(null)
// // // // // //   const [scroll, setScroll] = useState(0)

// // // // // //   /* ================= SCROLL PROGRESS ================= */
// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       const value =
// // // // // //         window.scrollY /
// // // // // //         (document.documentElement.scrollHeight - window.innerHeight)
// // // // // //       setScroll(value)
// // // // // //     }
// // // // // //     window.addEventListener("scroll", handleScroll)
// // // // // //     return () => window.removeEventListener("scroll", handleScroll)
// // // // // //   }, [])

// // // // // //   /* ================= CURSOR LIGHT ================= */
// // // // // //   useEffect(() => {
// // // // // //     const move = (e) => {
// // // // // //       containerRef.current?.style.setProperty(
// // // // // //         "--x",
// // // // // //         `${e.clientX}px`
// // // // // //       )
// // // // // //       containerRef.current?.style.setProperty(
// // // // // //         "--y",
// // // // // //         `${e.clientY}px`
// // // // // //       )
// // // // // //     }
// // // // // //     window.addEventListener("mousemove", move)
// // // // // //     return () => window.removeEventListener("mousemove", move)
// // // // // //   }, [])

// // // // // //   /* ================= MAGNETIC CTA ================= */
// // // // // //   const magnet = (e) => {
// // // // // //     const btn = buttonRef.current
// // // // // //     const rect = btn.getBoundingClientRect()
// // // // // //     const x = e.clientX - rect.left - rect.width / 2
// // // // // //     const y = e.clientY - rect.top - rect.height / 2
// // // // // //     btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
// // // // // //   }

// // // // // //   const reset = () => {
// // // // // //     buttonRef.current.style.transform = "translate(0,0)"
// // // // // //   }

// // // // // //   return (
// // // // // //     <main
// // // // // //       ref={containerRef}
// // // // // //       className="
// // // // // //         relative min-h-screen overflow-hidden text-white
// // // // // //         bg-[#020617]
// // // // // //       "
// // // // // //     >
// // // // // //       {/* ================= SCROLL BAR ================= */}
// // // // // //       <div
// // // // // //         className="fixed top-0 left-0 h-[2px] z-50 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500"
// // // // // //         style={{ width: `${scroll * 100}%` }}
// // // // // //       />

// // // // // //       {/* ================= AURORA BACKGROUND ================= */}
// // // // // //       <div className="pointer-events-none absolute inset-0">
// // // // // //         <div className="absolute -top-40 -left-40 w-[900px] h-[900px] bg-emerald-500/20 blur-[200px]" />
// // // // // //         <div className="absolute top-1/4 -right-40 w-[900px] h-[900px] bg-cyan-500/20 blur-[200px]" />
// // // // // //         <div className="absolute bottom-0 left-1/2 w-[900px] h-[900px] bg-blue-500/10 blur-[200px]" />
// // // // // //       </div>

// // // // // //       {/* ================= CURSOR GLOW ================= */}
// // // // // //       <div
// // // // // //         className="
// // // // // //           pointer-events-none absolute inset-0
// // // // // //           bg-[radial-gradient(600px_at_var(--x)_var(--y),rgba(56,189,248,0.15),transparent_60%)]
// // // // // //         "
// // // // // //       />

// // // // // //       {/* ================= HERO ================= */}
// // // // // //       <section className="relative min-h-screen flex items-center px-24">
// // // // // //         <div className="max-w-5xl">
// // // // // //           <p className="mb-6 text-sm tracking-widest uppercase text-emerald-400">
// // // // // //             Clinical AI • Evidence • Intelligence
// // // // // //           </p>

// // // // // //           <h1 className="text-[6rem] leading-[0.95] font-extrabold mb-10">
// // // // // //             The Future of
// // // // // //             <br />
// // // // // //             <span
// // // // // //               className="
// // // // // //                 text-transparent bg-clip-text
// // // // // //                 bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500
// // // // // //                 animate-pulse
// // // // // //               "
// // // // // //             >
// // // // // //               Medical Reasoning
// // // // // //             </span>
// // // // // //           </h1>

// // // // // //           <p className="text-xl text-white/70 max-w-2xl mb-16">
// // // // // //             DxAssist converts raw clinical narratives into structured,
// // // // // //             explainable, and evidence-grounded intelligence —
// // // // // //             in real time.
// // // // // //           </p>

// // // // // //           {/* ================= CTA ================= */}
// // // // // //           <div className="relative inline-block group">
// // // // // //             <div className="absolute -inset-4 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-2xl opacity-40 group-hover:opacity-80 transition" />
// // // // // //             <Link href="/login">
// // // // // //               <button
// // // // // //                 ref={buttonRef}
// // // // // //                 onMouseMove={magnet}
// // // // // //                 onMouseLeave={reset}
// // // // // //                 className="
// // // // // //                   relative px-14 py-6 rounded-full
// // // // // //                   bg-gradient-to-r from-emerald-500 to-cyan-500
// // // // // //                   text-black font-bold tracking-wide
// // // // // //                   transition-transform duration-200
// // // // // //                 "
// // // // // //               >
// // // // // //                 Enter DxAssist →
// // // // // //               </button>
// // // // // //             </Link>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FLOWING STATEMENTS (NO CARDS) ================= */}
// // // // // //       <section className="relative py-40 overflow-hidden">
// // // // // //         <div className="space-y-24 text-center">
// // // // // //           {[
// // // // // //             "Unstructured notes → Structured insight",
// // // // // //             "Symptoms → Probabilities → Evidence",
// // // // // //             "Clinician-first. Safety-first. AI-powered.",
// // // // // //           ].map((text, i) => (
// // // // // //             <h2
// // // // // //               key={i}
// // // // // //               className="
// // // // // //                 text-5xl font-semibold
// // // // // //                 text-transparent bg-clip-text
// // // // // //                 bg-gradient-to-r from-white/90 to-white/30
// // // // // //                 hover:tracking-widest
// // // // // //                 transition-all duration-700
// // // // // //               "
// // // // // //             >
// // // // // //               {text}
// // // // // //             </h2>
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       </section>

// // // // // //       {/* ================= FOOTER ================= */}
// // // // // //       <footer className="border-t border-white/10 py-16 text-center">
// // // // // //         <p className="text-sm text-white/40 max-w-4xl mx-auto">
// // // // // //           DxAssist is a clinical decision-support system intended to assist —
// // // // // //           not replace — professional medical judgment.
// // // // // //         </p>
// // // // // //       </footer>
// // // // // //     </main>
// // // // // //   )
// // // // // // }
// // // // // "use client"

// // // // // import { useEffect, useRef, useState } from "react"
// // // // // import Link from "next/link"

// // // // // export default function Home() {
// // // // //   const root = useRef(null)
// // // // //   const [y, setY] = useState(0)

// // // // //   /* ================= SCROLL CAPTURE ================= */
// // // // //   useEffect(() => {
// // // // //     const onScroll = () => setY(window.scrollY)
// // // // //     window.addEventListener("scroll", onScroll)
// // // // //     return () => window.removeEventListener("scroll", onScroll)
// // // // //   }, [])

// // // // //   /* ================= CURSOR REVEAL ================= */
// // // // //   useEffect(() => {
// // // // //     const move = (e) => {
// // // // //       root.current?.style.setProperty("--cx", `${e.clientX}px`)
// // // // //       root.current?.style.setProperty("--cy", `${e.clientY}px`)
// // // // //     }
// // // // //     window.addEventListener("mousemove", move)
// // // // //     return () => window.removeEventListener("mousemove", move)
// // // // //   }, [])

// // // // //   return (
// // // // //     <main
// // // // //       ref={root}
// // // // //       className="relative bg-[#050505] text-white overflow-hidden"
// // // // //     >
// // // // //       {/* ================= CURSOR MASK ================= */}
// // // // //       <div
// // // // //         className="
// // // // //           pointer-events-none fixed inset-0 z-30
// // // // //           bg-[radial-gradient(300px_at_var(--cx)_var(--cy),rgba(255,255,255,0.08),transparent)]
// // // // //           transition-all duration-75
// // // // //         "
// // // // //       />

// // // // //       {/* ================= SCENE 1 ================= */}
// // // // //       <section className="min-h-screen flex items-center px-[12vw]">
// // // // //         <div>
// // // // //           <p className="text-xs tracking-[0.4em] text-white/50 mb-6">
// // // // //             CLINICAL INTELLIGENCE SYSTEM
// // // // //           </p>

// // // // //           <h1 className="text-[8vw] leading-[0.9] font-black uppercase">
// // // // //             Medicine
// // // // //             <br />
// // // // //             <span className="text-white/20">Without</span>
// // // // //             <br />
// // // // //             Guesswork
// // // // //           </h1>

// // // // //           <p className="mt-12 max-w-xl text-white/60 text-lg">
// // // // //             DxAssist translates clinical ambiguity into
// // // // //             structured medical reasoning — instantly.
// // // // //           </p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= SCENE 2 (SCROLL TYPOGRAPHY) ================= */}
// // // // //       <section className="relative h-[200vh] px-[12vw]">
// // // // //         <div className="sticky top-0 h-screen flex items-center">
// // // // //           <h2
// // // // //             className="font-extrabold uppercase leading-none"
// // // // //             style={{
// // // // //               fontSize: "14vw",
// // // // //               transform: `translateX(${-y * 0.2}px)`,
// // // // //               opacity: Math.max(0, 1 - y / 600),
// // // // //             }}
// // // // //           >
// // // // //             Symptoms
// // // // //           </h2>
// // // // //         </div>

// // // // //         <div className="absolute bottom-[20%] right-[10%]">
// // // // //           <h2
// // // // //             className="font-extrabold uppercase leading-none text-white/20"
// // // // //             style={{
// // // // //               fontSize: "14vw",
// // // // //               transform: `translateX(${y * 0.15}px)`,
// // // // //             }}
// // // // //           >
// // // // //             Evidence
// // // // //           </h2>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= SCENE 3 (FLOATING DATA) ================= */}
// // // // //       <section className="min-h-screen px-[12vw] flex items-center">
// // // // //         <div className="space-y-16">
// // // // //           {[
// // // // //             "Clinical notes are chaotic",
// // // // //             "AI must be explainable",
// // // // //             "Doctors deserve clarity",
// // // // //           ].map((t, i) => (
// // // // //             <p
// // // // //               key={i}
// // // // //               className="text-4xl font-medium text-white/70"
// // // // //               style={{
// // // // //                 transform: `translateX(${Math.sin((y + i * 200) / 300) * 40}px)`,
// // // // //               }}
// // // // //             >
// // // // //               {t}
// // // // //             </p>
// // // // //           ))}
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ================= SCENE 4 (MINIMAL CTA) ================= */}
// // // // //       <section className="min-h-screen flex items-center justify-center">
// // // // //         <Link href="/login">
// // // // //           <button
// // // // //             className="
// // // // //               group relative text-2xl uppercase tracking-widest
// // // // //               text-white/80 hover:text-white
// // // // //               transition-all duration-500
// // // // //             "
// // // // //           >
// // // // //             Enter DxAssist
// // // // //             <span
// // // // //               className="
// // // // //                 block h-[1px] bg-white w-0
// // // // //                 group-hover:w-full
// // // // //                 transition-all duration-500
// // // // //               "
// // // // //             />
// // // // //           </button>
// // // // //         </Link>
// // // // //       </section>

// // // // //       {/* ================= FOOTER ================= */}
// // // // //       <footer className="py-20 text-center text-xs text-white/40">
// // // // //         DxAssist is a clinical decision-support system.
// // // // //       </footer>
// // // // //     </main>
// // // // //   )
// // // // // }
// // // // "use client"

// // // // import { useEffect, useRef, useState } from "react"
// // // // import Link from "next/link"

// // // // export default function Home() {
// // // //   const root = useRef(null)
// // // //   const [scrollY, setScrollY] = useState(0)

// // // //   /* ================= SCROLL ================= */
// // // //   useEffect(() => {
// // // //     const onScroll = () => setScrollY(window.scrollY)
// // // //     window.addEventListener("scroll", onScroll)
// // // //     return () => window.removeEventListener("scroll", onScroll)
// // // //   }, [])

// // // //   /* ================= CURSOR FOCUS ================= */
// // // //   useEffect(() => {
// // // //     const move = (e) => {
// // // //       root.current?.style.setProperty("--cx", `${e.clientX}px`)
// // // //       root.current?.style.setProperty("--cy", `${e.clientY}px`)
// // // //     }
// // // //     window.addEventListener("mousemove", move)
// // // //     return () => window.removeEventListener("mousemove", move)
// // // //   }, [])

// // // //   return (
// // // //     <main
// // // //       ref={root}
// // // //       className="relative bg-[#06090f] text-white overflow-hidden"
// // // //     >
// // // //       {/* ================= CURSOR SPOTLIGHT ================= */}
// // // //       <div
// // // //         className="
// // // //           pointer-events-none fixed inset-0 z-20
// // // //           bg-[radial-gradient(400px_at_var(--cx)_var(--cy),rgba(255,255,255,0.06),transparent_65%)]
// // // //           transition-opacity duration-300
// // // //         "
// // // //       />

// // // //       {/* ================= SCENE 1 : CHAOS ================= */}
// // // //       <section className="min-h-screen flex items-center px-[12vw]">
// // // //         <div className="max-w-4xl">
// // // //           <p className="text-xs tracking-[0.35em] text-white/50 mb-6">
// // // //             CLINICAL REALITY
// // // //           </p>

// // // //           <h1 className="text-[7vw] leading-[0.95] font-black">
// // // //             Medicine
// // // //             <br />
// // // //             Is
// // // //             <span className="text-white/20"> Messy</span>
// // // //           </h1>

// // // //           <p className="mt-10 text-lg text-white/60 max-w-xl">
// // // //             Unstructured notes. Time pressure. Cognitive overload.
// // // //             Clinical decisions begin in chaos.
// // // //           </p>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= SCENE 2 : STRUCTURE ================= */}
// // // //       <section className="relative h-[180vh]">
// // // //         <div className="sticky top-0 h-screen flex items-center px-[12vw]">
// // // //           <div className="w-full">
// // // //             <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
// // // //               STRUCTURING SIGNAL
// // // //             </p>

// // // //             <h2
// // // //               className="font-extrabold uppercase"
// // // //               style={{
// // // //                 fontSize: "10vw",
// // // //                 transform: `translateX(${Math.min(scrollY * 0.15, 160)}px)`,
// // // //               }}
// // // //             >
// // // //               Symptoms
// // // //             </h2>

// // // //             <h2
// // // //               className="font-extrabold uppercase text-white/20 mt-4"
// // // //               style={{
// // // //                 fontSize: "10vw",
// // // //                 transform: `translateX(${Math.max(-scrollY * 0.15, -160)}px)`,
// // // //               }}
// // // //             >
// // // //               Evidence
// // // //             </h2>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= SCENE 3 : REASONING ================= */}
// // // //       <section className="min-h-screen px-[12vw] flex items-center">
// // // //         <div className="grid grid-cols-12 gap-y-16 w-full">
// // // //           <div className="col-span-5">
// // // //             <p className="text-xs tracking-[0.35em] text-white/40 mb-4">
// // // //               AI REASONING
// // // //             </p>
// // // //             <h3 className="text-4xl font-semibold">
// // // //               Explainable by design
// // // //             </h3>
// // // //           </div>

// // // //           <div className="col-span-6 col-start-7 space-y-8 text-white/65 text-lg">
// // // //             <p>
// // // //               DxAssist converts narrative clinical input into
// // // //               probabilistic medical reasoning.
// // // //             </p>
// // // //             <p>
// // // //               Each suggestion is traceable to evidence —
// // // //               no black boxes, no hallucinations.
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= SCENE 4 : DECISION ================= */}
// // // //       <section className="min-h-screen flex items-center justify-center">
// // // //         <div className="text-center">
// // // //           <p className="text-xs tracking-[0.35em] text-white/40 mb-6">
// // // //             CLINICAL DECISION
// // // //           </p>

// // // //           <h2 className="text-[4vw] font-bold mb-12">
// // // //             From ambiguity
// // // //             <br />
// // // //             to confidence
// // // //           </h2>

// // // //           <Link href="/login">
// // // //             <button
// // // //               className="
// // // //                 group relative px-14 py-5
// // // //                 border border-white/30
// // // //                 uppercase tracking-widest
// // // //                 text-sm
// // // //                 hover:border-white
// // // //                 transition-all duration-500
// // // //               "
// // // //             >
// // // //               Enter DxAssist
// // // //               <span
// // // //                 className="
// // // //                   absolute left-0 bottom-0 h-[1px] w-0 bg-white
// // // //                   group-hover:w-full
// // // //                   transition-all duration-500
// // // //                 "
// // // //               />
// // // //             </button>
// // // //           </Link>
// // // //         </div>
// // // //       </section>

// // // //       {/* ================= FOOTER ================= */}
// // // //       <footer className="py-20 text-center text-xs text-white/35">
// // // //         DxAssist supports — not replaces — professional medical judgment.
// // // //       </footer>
// // // //     </main>
// // // //   )
// }





// "use client"

// import { useRouter } from "next/navigation"
// import { useAuth } from "@/app/context/AuthContext"
// import { useEffect, useRef, useState } from "react"
// import Link from "next/link"

// export default function Home() {
//   const root = useRef(null)
//   const [scrollY, setScrollY] = useState(0)

//   const router = useRouter()
// const { user, loading } = useAuth()

// const handleEnterDxAssist = () => {
//   if (loading) return

//   if (!user) {
//     router.push("/login")
//   } else {
//     router.push("/diagnostics/analyze")
//   }
// }


//   useEffect(() => {
//     const onScroll = () => setScrollY(window.scrollY)
//     window.addEventListener("scroll", onScroll)
//     return () => window.removeEventListener("scroll", onScroll)
//   }, [])

  
//   useEffect(() => {
//     const move = (e) => {
//       root.current?.style.setProperty("--cx", `${e.clientX}px`)
//       root.current?.style.setProperty("--cy", `${e.clientY}px`)
//     }
//     window.addEventListener("mousemove", move)
//     return () => window.removeEventListener("mousemove", move)
//   }, [])

//   return (
//     <main
//       ref={root}
//       className="relative bg-[#05070c] text-white overflow-hidden"
//     >
      
//       <div
//         className="
//           pointer-events-none fixed inset-0 z-10
//           bg-[radial-gradient(500px_at_var(--cx)_var(--cy),rgba(255,255,255,0.05),transparent_70%)]
//         "
//       />

     
//       <section className="min-h-screen flex items-center px-[14vw]">
//         <div className="max-w-5xl">
//           <p className="text-[11px] tracking-[0.45em] text-white/40 mb-10">
//             CLINICAL INTELLIGENCE SYSTEM
//           </p>

//           <h1 className="text-[7.5vw] leading-[0.95] font-extrabold">
//             Medicine
//             <br />
//             requires
//             <br />
//             <span className="text-white/20">clarity</span>
//           </h1>

//           <p className="mt-16 text-xl text-white/55 max-w-2xl">
//             Most clinical decisions begin with fragmented narratives,
//             incomplete signals, and cognitive pressure.
//           </p>

//           <p className="mt-6 text-xl text-white/55 max-w-2xl">
//             DxAssist exists to reduce ambiguity —
//             not by replacing clinicians,
//             but by organizing medical reasoning.
//           </p>
//         </div>
//       </section>

      
//       <section className="min-h-screen px-[14vw] flex items-center">
//         <div className="w-full">
//           <p className="text-[11px] tracking-[0.45em] text-white/40 mb-12">
//             FROM CHAOS TO SIGNAL
//           </p>

//           <div className="space-y-20">
//             <h2
//               className="font-black uppercase leading-none"
//               style={{
//                 fontSize: "9vw",
//                 transform: `translateX(${Math.min(scrollY * 0.08, 120)}px)`,
//               }}
//             >
//               Symptoms
//             </h2>

//             <h2
//               className="font-black uppercase leading-none text-white/20"
//               style={{
//                 fontSize: "9vw",
//                 transform: `translateX(${Math.max(-scrollY * 0.08, -120)}px)`,
//               }}
//             >
//               Context
//             </h2>

//             <h2
//               className="font-black uppercase leading-none text-white/10"
//               style={{
//                 fontSize: "9vw",
//               }}
//             >
//               Evidence
//             </h2>
//           </div>
//         </div>
//       </section>

      
//       <section className="min-h-screen px-[14vw] flex items-center">
//         <div className="grid grid-cols-12 w-full gap-y-20">
//           <div className="col-span-4">
//             <p className="text-[11px] tracking-[0.45em] text-white/40 mb-6">
//               REASONING LAYER
//             </p>
//             <h3 className="text-4xl font-semibold leading-snug">
//               Explainable
//               <br />
//               medical intelligence
//             </h3>
//           </div>

//           <div className="col-span-6 col-start-7 space-y-10 text-white/55 text-lg">
//             <p>
//               DxAssist transforms narrative clinical notes into
//               structured reasoning paths.
//             </p>

//             <p>
//               Probabilities are derived from medical literature,
//               guidelines, and contextual patient signals —
//               never intuition alone.
//             </p>

//             <p>
//               Every recommendation can be interrogated,
//               traced, and understood.
//             </p>
//           </div>
//         </div>
//       </section>

      
//       <section className="min-h-screen px-[14vw] flex items-center">
//         <div className="max-w-3xl">
//           <p className="text-[11px] tracking-[0.45em] text-white/40 mb-8">
//             CLINICAL CONFIDENCE
//           </p>

//           <h2 className="text-[4vw] leading-tight font-semibold mb-16">
//             Decisions should feel
//             <br />
//             grounded —
//             <br />
//             not rushed
//           </h2>


         
           
//                    {/* <button onClick={handleEnterDxAssist}
//             className="
//               group relative text-2xl uppercase tracking-widest
//               text-white/80 hover:text-white
//               transition-all duration-500
//             "
//           >
//             Enter DxAssist
//             <span
//               className="
//                 block h-[1px] bg-white w-0
//                 group-hover:w-full
//                 transition-all duration-500
//               "
//             />
//           </button> */}


//           <p>if you want to summarisation of your unstructured clinical notes then click below the button the Enter dxassist</p>
//           <button
//             onClick={handleEnterDxAssist}
//             disabled={loading}
//             className="
//               group relative text-2xl uppercase tracking-widest
//               text-white/80 hover:text-white
//               transition-all duration-500
//               disabled:opacity-40 disabled:cursor-not-allowed
//             "
//           >
//             {loading ? "Checking session…" : "Enter DxAssist"}
//             <span
//               className="
//                 block h-[1px] bg-white w-0
//                 group-hover:w-full
//                 transition-all duration-500
//               "
//             />
//           </button>
//             <section className="mt-10">
//           <p>if you get diagnosis of your skin disease by uploading image then</p>
//                     <button className="
//               group relative text-2xl uppercase tracking-widest
//               text-white/80 hover:text-white
//               transition-all duration-500
//               disabled:opacity-40 disabled:cursor-not-allowed
//             ">Click Here
//                       <span
//               className="
//                 block h-[1px] bg-white w-0
//                 group-hover:w-full
//                 transition-all duration-500
//               "
//             />
//                     </button>
//                     </section>


          
// </div>
//       </section>

    
//       <footer className="py-28 text-center text-xs text-white/35">
//         DxAssist supports clinical decision-making.
//         <br />
//         It does not replace professional medical judgment.
//       </footer>
//     </main>
//   )
// }





"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function Home() {
  const root = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  const router = useRouter()
  const { user, loading } = useAuth()

  const handleEnterDxAssist = () => {
    if (loading) return

    if (!user) {
      router.push("/login")
    } else {
      router.push("/diagnostics/analyze")
    }
  }

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const move = (e) => {
      root.current?.style.setProperty("--cx", `${e.clientX}px`)
      root.current?.style.setProperty("--cy", `${e.clientY}px`)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <main
      ref={root}
      className="relative bg-[#f5f9ff] text-black overflow-hidden"
    >
      {/* SOFT MEDICAL GLOW */}
      <div
        className="
          pointer-events-none fixed inset-0 z-10
          bg-[radial-gradient(600px_at_var(--cx)_var(--cy),rgba(37,99,235,0.12),transparent_70%)]
        "
      />

      {/* HERO */}
      <section className="min-h-screen flex items-center px-[14vw]">
        <div className="max-w-5xl">
          <p className="text-[11px] tracking-[0.45em] text-slate-500 mb-10">
            CLINICAL INTELLIGENCE SYSTEM
          </p>

          <h1 className="text-[7.5vw] leading-[0.95] font-extrabold text-slate-900">
            Medicine
            <br />
            requires
            <br />
            <span className="text-blue-600/70">clarity</span>
          </h1>

          <p className="mt-16 text-xl text-slate-600 max-w-2xl">
            Most clinical decisions begin with fragmented narratives,
            incomplete signals, and cognitive pressure.
          </p>

          <p className="mt-6 text-xl text-slate-600 max-w-2xl">
            DxAssist exists to reduce ambiguity —
            not by replacing clinicians,
            but by organizing medical reasoning.
          </p>
        </div>
      </section>

      {/* SCROLL TYPOGRAPHY */}
      <section className="min-h-screen px-[14vw] flex items-center">
        <div className="w-full">
          <p className="text-[11px] tracking-[0.45em] text-slate-500 mb-12">
            FROM CHAOS TO SIGNAL
          </p>

          <div className="space-y-20">
            <h2
              className="font-black uppercase leading-none text-slate-900"
              style={{
                fontSize: "9vw",
                transform: `translateX(${Math.min(scrollY * 0.08, 120)}px)`,
              }}
            >
              Symptoms
            </h2>

            <h2
              className="font-black uppercase leading-none text-slate-400"
              style={{
                fontSize: "9vw",
                transform: `translateX(${Math.max(-scrollY * 0.08, -120)}px)`,
              }}
            >
              Context
            </h2>

            <h2
              className="font-black uppercase leading-none text-slate-300"
              style={{
                fontSize: "9vw",
              }}
            >
              Evidence
            </h2>
          </div>
        </div>
      </section>

      {/* REASONING */}
      <section className="min-h-screen px-[14vw] flex items-center">
        <div className="grid grid-cols-12 w-full gap-y-20">
          <div className="col-span-4">
            <p className="text-[11px] tracking-[0.45em] text-slate-500 mb-6">
              REASONING LAYER
            </p>
            <h3 className="text-4xl font-semibold leading-snug text-slate-900">
              Explainable
              <br />
              medical intelligence
            </h3>
          </div>

          <div className="col-span-6 col-start-7 space-y-10 text-slate-600 text-lg">
            <p>
              DxAssist transforms narrative clinical notes into
              structured reasoning paths.
            </p>

            <p>
              Probabilities are derived from medical literature,
              guidelines, and contextual patient signals —
              never intuition alone.
            </p>

            <p>
              Every recommendation can be interrogated,
              traced, and understood.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-screen px-[14vw] flex items-center">
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.45em] text-slate-500 mb-8">
            CLINICAL CONFIDENCE
          </p>

          <h2 className="text-[4vw] leading-tight font-semibold mb-16 text-slate-900">
            Decisions should feel
            <br />
            grounded —
            <br />
            not rushed
          </h2>

          <p className="mb-6 text-slate-600">
            If you want summarisation of unstructured clinical notes,
            click below to enter DxAssist.
          </p>

          <button
            onClick={handleEnterDxAssist}
            disabled={loading}
            className="
              group relative text-2xl uppercase tracking-widest
              text-blue-700 hover:text-blue-900
              transition-all duration-500
              disabled:opacity-40 disabled:cursor-not-allowed
            "
          >
            {loading ? "Checking session…" : "Enter DxAssist"}
            <span
              className="
                block h-[2px] bg-blue-600 w-0
                group-hover:w-full
                transition-all duration-500
              "
            />
          </button>

          <section className="mt-10">
            <p className="mb-4 text-slate-600">
              If you want diagnosis of your skin disease by uploading an image
            </p>
            <button
              className="
                group relative text-2xl uppercase tracking-widest
                text-teal-700 hover:text-teal-900
                transition-all duration-500
              "
            >
              Click Here
              <span
                className="
                  block h-[2px] bg-teal-600 w-0
                  group-hover:w-full
                  transition-all duration-500
                "
              />
            </button>
          </section>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-28 text-center text-xs text-slate-500">
        DxAssist supports clinical decision-making.
        <br />
        It does not replace professional medical judgment.
      </footer>
    </main>
  )
}