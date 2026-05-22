import React from "react";

interface SummarySectionProps {
  summary: string;
  setSummary: (v: string) => void;
}

export default function SummarySection({
  summary,
  setSummary,
}: SummarySectionProps) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
        Summary
      </h3>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        rows={4}
        className="w-full text-xs leading-relaxed text-slate-600 bg-transparent focus:outline-none resize-none text-justify font-normal"></textarea>
    </div>
  );
}
