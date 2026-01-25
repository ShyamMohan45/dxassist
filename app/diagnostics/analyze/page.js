


"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import SeverityCard from "./SeverityCard";
import { useAuth } from "@/app/context/AuthContext";

/* Severity order for sorting */
const severityOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

export default function AnalyzePage() {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [savingToDB, setSavingToDB] = useState(false);

  const handleAnalyze = async () => {
    if (!file) return;
    if (!user) {
      setError("Please login first");
      return;
    }

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      // ✅ SEND user_id to backend in header
      const res = await fetch("http://127.0.0.1:8001/analyze", {
        method: "POST",
        body: formData,
        headers: {
          "x-user-id": user.id.toString(),
        },
        credentials: "include",
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const json = await res.json();

      setSavingToDB(true);

      // Set result from direct response fields
      setResult({
        summary: json.summary || "Clinical analysis completed.",
        conditions: Array.isArray(json.conditions) && json.conditions.length > 0
          ? json.conditions
          : [{
              name: "General Health Status",
              severity: "Low",
              justification: "No significant clinical abnormalities detected"
            }],
        evidence: Array.isArray(json.evidence) && json.evidence.length > 0
          ? json.evidence
          : ["No specific evidence markers found in the document."]
      });

      setSavingToDB(false);
    } catch (err) {
      setError(err.message || "Unable to analyze document");
      setSavingToDB(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto text-black">
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

      {!user && (
        <p className="text-red-400 mb-4">
          Please login to analyze documents. Your analysis will be saved to your account.
        </p>
      )}

      {/* File upload */}
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading || !user}
        className="bg-white text-black px-6 py-2 rounded disabled:bg-gray-400"
      >
        {loading ? "Analyzing..." : savingToDB ? "Saving to database..." : "Analyze Document"}
      </button>

      {error && <p className="text-red-400 mt-4">{error}</p>}

      {savingToDB && (
        <p className="text-green-600 mt-4">✅ Analysis saved to your account</p>
      )}

      {/* ================= RESULTS ================= */}

      {/* Clinical Summary */}
      {result?.summary && (
        <>
          <h2 className="text-2xl font-semibold mt-10">
            Clinical Summary
          </h2>
          <p className="mt-2 text-gray-700">
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

            <ul className="list-disc ml-6 mt-3 text-gray-700">
              {result.evidence.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </>
        )}
    </div>
  );
}

// initial code in haca