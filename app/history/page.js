"use client"

export default function KnowledgeBasePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#eef7f6] via-[#f6fbff] to-[#eef2ff] px-6 lg:px-16 py-10">

      {/* HERO HEADER */}
      <header className="relative mb-14 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-700 via-cyan-700 to-blue-700 p-10 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl font-serif mb-4 tracking-wide">
            Medical Knowledge Base
          </h1>
          <p className="text-lg text-white/90">
            Our Retrieval-Augmented Generation (RAG) engine grounds AI-generated
            clinical insights in verified medical literature for safety,
            accuracy, and transparency.
          </p>
        </div>
      </header>

      {/* SEARCH BAR */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row gap-4 items-center bg-white/70 backdrop-blur-xl p-6 rounded-2xl shadow-xl">
          <input
            type="text"
            placeholder="Search medical guidelines, journals, conditions..."
            className="
              flex-1 px-6 py-4 rounded-xl
              border border-gray-200
              bg-white
              text-gray-700
              focus:outline-none focus:ring-2 focus:ring-teal-500
              transition
            "
          />
          <button
            className="
              px-8 py-4 rounded-xl font-semibold
              bg-gradient-to-r from-teal-600 to-cyan-600
              text-white
              hover:scale-[1.04] hover:shadow-xl
              transition-all duration-300
            "
          >
            Explore Evidence
          </button>
        </div>
      </section>

      {/* MAIN GRID */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-10">

        {/* LEFT: SOURCES */}
        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-semibold text-teal-900 mb-6">
            Retrieved Medical Sources
          </h2>

          {/* SOURCE CARD */}
          <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-gray-900">
              WHO Clinical Guidelines
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Diagnostic criteria for community-acquired pneumonia based on
              respiratory symptoms, imaging, and biomarkers.
            </p>
            <span className="inline-block mt-3 text-xs font-semibold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
              Global Guideline
            </span>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition">
            <h3 className="text-lg font-medium text-gray-900">
              Journal of Internal Medicine (2023)
            </h3>
            <p className="text-sm text-gray-600 mt-2 leading-relaxed">
              Peer-reviewed study comparing bacterial vs viral pneumonia using
              inflammatory biomarkers.
            </p>
            <span className="inline-block mt-3 text-xs font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
              Research Paper
            </span>
          </div>
        </div>

        {/* RIGHT: RAG CONTEXT */}
        <div className="group bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl p-8 hover:shadow-2xl transition">
          <h2 className="text-3xl font-semibold text-teal-900 mb-6">
            AI Reasoning & Traceability
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            Before generating summaries or differential diagnoses, the AI
            retrieves verified clinical sources. This grounding process
            eliminates hallucinations and ensures explainable decision support.
          </p>

          <div className="relative rounded-2xl bg-gradient-to-r from-teal-50 to-cyan-50 p-6 border-l-4 border-teal-600 mb-6">
            <p className="text-sm text-gray-800 leading-relaxed">
              <strong>Clinical Example:</strong>  
              Pneumonia was suggested after matching patient symptoms with WHO
              guideline criteria and cross-validating findings against
              peer-reviewed research.
            </p>
          </div>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              ✅ Evidence-backed AI outputs
            </li>
            <li className="flex items-center gap-2">
              ✅ Clinician trust & audit readiness
            </li>
            <li className="flex items-center gap-2">
              ✅ Safe, non-hallucinated recommendations
            </li>
          </ul>
        </div>

      </section>

      {/* FOOTER */}
      <footer className="mt-16 text-center text-sm text-gray-500">
        Powered by Retrieval-Augmented Generation (RAG).  
        This system supports clinicians and does not replace professional
        medical judgment.
      </footer>

    </main>
  )
}
