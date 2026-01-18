// "use client"

// import { useState } from "react"
// import SeverityCard from "./SeverityCard"

// export default function AnalyzePage() {
//   const [file, setFile] = useState(null)
//   const [result, setResult] = useState(null)
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(false)

//   const handleAnalyze = async () => {
//     if (!file) return

//     setLoading(true)
//     setError(null)

//     const formData = new FormData()
//     formData.append("file", file)

//     try {
//       const res = await fetch("http://127.0.0.1:8000/analyze", {
//         method: "POST",
//         body: formData,
//         credentials: "include",
//       })

//       const json = await res.json()
//       setResult(json.data)

//     } catch (err) {
//       setError("Unable to analyze document")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="p-8 max-w-6xl mx-auto text-white">
//       <h1 className="text-3xl font-bold mb-4">
//         Clinical Document Analysis
//       </h1>

//       {/* File Upload */}
//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="mb-4"
//       />

//       {/* Analyze Button */}
//       <button
//         onClick={handleAnalyze}
//         disabled={loading}
//         className="bg-white text-black px-6 py-2 rounded"
//       >
//         {loading ? "Analyzing..." : "Analyze Document"}
//       </button>

//       {error && (
//         <p className="text-red-400 mt-4">{error}</p>
//       )}

//       {/* ============================= */}
//       {/* ✅ ADD YOUR CODE RIGHT HERE ✅ */}
//       {/* ============================= */}

//       {/* Clinical Summary */}
//       {result?.summary && (
//         <>
//           <h2 className="text-2xl font-semibold mt-10">
//             Clinical Summary
//           </h2>
//           <p className="mt-2 text-white/80">
//             {result.summary}
//           </p>
//         </>
//       )}

//       {/* Clinical Priorities */}
//       {Array.isArray(result?.conditions) &&
//         result.conditions.length > 0 && (
//           <>
//             <h2 className="text-2xl font-semibold mt-10">
//               Clinical Priorities
//             </h2>
//             <div className="grid md:grid-cols-3 gap-6 mt-4">
//               {result.conditions.map((c, i) => (
//                 <SeverityCard key={i} condition={c} />
//               ))}
//             </div>
//           </>
//         )}

//       {/* Evidence & Citations */}
//       {Array.isArray(result?.evidence) &&
//         result.evidence.length > 0 && (
//           <>
//             <h2 className="text-2xl font-semibold mt-10">
//               🔍 Evidence & Citations
//             </h2>
//             <ul className="list-disc ml-6 mt-3 text-white/70">
//               {result.evidence.map((e, i) => (
//                 <li key={i}>{e}</li>
//               ))}
//             </ul>
//           </>
//         )}
//     </div>
//   )
// }



"use client";
import Link from "next/link";
import { useState } from "react";
import SeverityCard from "./SeverityCard";

/* Severity order for sorting */
const severityOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export default function AnalyzePage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("http://127.0.0.1:8001/analyze", {
        method: "POST",
        body: formData,
        credentials: "include",
      });

      const json = await res.json();
      setResult(json.data);
    } catch (err) {
      setError("Unable to analyze document");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-4">
        Clinical Document Analysis
      </h1>
      <div>
        <Link
      href="/diagnostics/history"
      className="inline-block text-sm text-blue-400 hover:underline mb-6"
    >
      View Past Analyses →
    </Link>
</div>
      {/* File upload */}
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="bg-white text-black px-6 py-2 rounded"
      >
        {loading ? "Analyzing..." : "Analyze Document"}
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {/* ================= RESULTS ================= */}

      {/* Clinical Summary */}
      {result?.summary && (
        <>
          <h2 className="text-2xl font-semibold mt-10">
            Clinical Summary
          </h2>
          <p className="mt-2 text-white/80">
            {result.summary}
          </p>
        </>
      )}

      {/* Clinical Priorities (SORTED) */}
      {Array.isArray(result?.conditions) &&
        result.conditions.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-10">
              Clinical Priorities
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mt-4">
              {[...result.conditions]
                .sort(
                  (a, b) =>
                    (severityOrder[a.severity] || 99) -
                    (severityOrder[b.severity] || 99)
                )
                .map((c, i) => (
                  <SeverityCard key={i} condition={c} />
                ))}
            </div>
          </>
        )}

      {/* Evidence & Citations */}
      {Array.isArray(result?.evidence) &&
        result.evidence.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mt-10">
              🔍 Evidence & Citations
            </h2>

            <ul className="list-disc ml-6 mt-3 text-white/70">
              {result.evidence.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
}
