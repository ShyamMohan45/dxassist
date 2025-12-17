
export default function Home() {
  return (
    <div className="relative overflow-hidden bg-neutral-950 text-white">

      {/* ================= AMBIENT BACKGROUND ================= */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-500/20 rounded-full blur-[180px]" />
      <div className="pointer-events-none absolute top-1/3 -left-40 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[160px]" />

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center px-24">
        <div className="max-w-3xl">

          <span className="inline-block mb-6 px-4 py-1.5 rounded-full text-sm tracking-wide bg-white/10 backdrop-blur">
            AI for Clinical Intelligence
          </span>

          <h1 className="text-[5.5rem] leading-[1.05] font-extrabold mb-8">
            Healthcare,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">
              re-imagined
            </span>
          </h1>

          <p className="text-lg text-white/75 max-w-xl mb-12">
            DxAssist transforms unstructured clinical notes and patient inputs
            into precise, traceable, and evidence-backed diagnostic intelligence.
            Designed to support clinicians — never replace them.
          </p>

          {/* CTA */}
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-cyan-400 blur-xl opacity-60 group-hover:opacity-100 transition" />
            <div className="relative">
              
            </div>
          </div>
        </div>
      </section>

      {/* ================= FLOATING FEATURE STRIP ================= */}
      <section className="relative z-10 -mt-32 px-20">
        <div className="bg-white/5 backdrop-blur-2xl rounded-[2rem] border border-white/10 shadow-2xl p-14 flex justify-between">
          {[
            { title: "Unstructured → Structured", desc: "Clinical notes, simplified" },
            { title: "Evidence-Backed AI", desc: "Retrieval-augmented generation" },
            { title: "Privacy-First", desc: "Zero data resale, zero leakage" },
            { title: "Clinician-Centric", desc: "AI assists, humans decide" },
          ].map((item, i) => (
            <div key={i} className="max-w-[220px]">
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-white/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= VISUAL BREAK ================= */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold mb-8">
            Designed for
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              clinical clarity
            </span>
          </h2>

          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            DxAssist reduces diagnostic noise by organizing symptoms, findings,
            and evidence into prioritized hypotheses — improving speed, accuracy,
            and confidence in decision-making.
          </p>
        </div>
      </section>

      {/* ================= PATH SELECTION ================= */}
      <section className="relative px-24 pb-40">
        <div className="grid grid-cols-3 gap-10">

          {[
            {
              title: "I feel fine",
              desc: "Quick reassurance and summaries",
            },
            {
              title: "Something feels off",
              desc: "Early signal detection & triage",
            },
            {
              title: "Serious concern",
              desc: "Focused diagnostic intelligence",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="
                relative bg-white/5 backdrop-blur-xl
                rounded-[2rem] p-10
                border border-white/10
                hover:-translate-y-4
                hover:shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                transition-all duration-700
              "
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-white/65 mb-8">
                {item.desc}
              </p>

              <span className="text-emerald-400 font-semibold tracking-wide cursor-pointer hover:underline">
                Continue →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FOOTNOTE ================= */}
      <section className="border-t border-white/10 py-16">
        <p className="max-w-5xl mx-auto text-center text-sm text-white/50 leading-relaxed">
          DxAssist uses generative AI with retrieval augmentation to assist
          clinicians by summarizing clinical data and proposing evidence-backed
          diagnostic hypotheses. It does not replace professional medical
          judgment and should be used as a clinical decision-support tool only.
        </p>
      </section>
    </div>
  );
}
