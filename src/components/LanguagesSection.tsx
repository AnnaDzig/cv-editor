import React from "react";

export default function LanguagesSection() {
  return (
    <div>
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-1.5">
        Languages
      </h3>
      <p className="text-xs text-slate-600 leading-relaxed font-medium">
        <strong>English:</strong> Fluent &nbsp;|&nbsp; <strong>Danish:</strong>{" "}
        Intermediate &nbsp;|&nbsp; <strong>Ukrainian:</strong> Native
        &nbsp;|&nbsp; <strong>Polish:</strong> Fluent &nbsp;|&nbsp;{" "}
        <strong>Russian:</strong> Native
      </p>
    </div>
  );
}
