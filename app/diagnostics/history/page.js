"use client";

import { useEffect, useState } from "react";
import SeverityCard from "../analyze/SeverityCard";

export default function PastAnalysesPage() {
  const [analyses, setAnalyses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/analyses", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((json) => {
        setAnalyses(json.data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="p-8 text-white">
        Loading past analyses...
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto text-white">
      <h1 className="text-3xl font-bold mb-6">
        View Past Analyses
      </h1>

      {analyses.length === 0 && (
        <p className="text-white/60">
          No past analyses found.
        </p>
      )}

      {analyses.map((a) => (
        <div
          key={a.id}
          className="border border-white/10 rounded-lg p-6 mb-8"
        >
          <p className="text-sm text-white/50 mb-2">
            {new Date(a.created_at).toLocaleString()}
          </p>

          {/* Summary */}
          <h2 className="text-xl font-semibold">
            Clinical Summary
          </h2>
          <p className="mt-2 text-white/80">
            {a.summary}
          </p>

          {/* Conditions */}
          {Array.isArray(a.conditions) && a.conditions.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-6">
                Clinical Priorities
              </h3>

              <div className="grid md:grid-cols-3 gap-4 mt-3">
                {a.conditions.map((c, i) => (
                  <SeverityCard key={i} condition={c} />
                ))}
              </div>
            </>
          )}

          {/* Evidence */}
          {Array.isArray(a.evidence) && a.evidence.length > 0 && (
            <>
              <h3 className="text-lg font-semibold mt-6">
                🔍 Evidence & Citations
              </h3>

              <ul className="list-disc ml-6 mt-2 text-white/70">
                {a.evidence.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
