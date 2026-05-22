import React from "react";

interface SkillsSectionProps {
  frontendSkills: string;
  setFrontendSkills: (v: string) => void;
  backendSkills: string;
  setBackendSkills: (v: string) => void;
  productSkills: string;
  setProductSkills: (v: string) => void;
  toolsSkills: string;
  setToolsSkills: (v: string) => void;
}

export default function SkillsSection({
  frontendSkills,
  setFrontendSkills,
  backendSkills,
  setBackendSkills,
  productSkills,
  setProductSkills,
  toolsSkills,
  setToolsSkills,
}: SkillsSectionProps) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
        Skills
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs text-slate-600">
        <div>
          <span className="font-bold block text-slate-800">Frontend:</span>
          <input
            type="text"
            value={frontendSkills}
            onChange={(e) => setFrontendSkills(e.target.value)}
            className="w-full bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 text-slate-600"
          />
        </div>
        <div>
          <span className="font-bold block text-slate-800">
            Backend & Data:
          </span>
          <input
            type="text"
            value={backendSkills}
            onChange={(e) => setBackendSkills(e.target.value)}
            className="w-full bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 text-slate-600"
          />
        </div>
        <div>
          <span className="font-bold block text-slate-800">Product & UX:</span>
          <input
            type="text"
            value={productSkills}
            onChange={(e) => setProductSkills(e.target.value)}
            className="w-full bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 text-slate-600"
          />
        </div>
        <div>
          <span className="font-bold block text-slate-800">
            Tools & Workflow:
          </span>
          <input
            type="text"
            value={toolsSkills}
            onChange={(e) => setToolsSkills(e.target.value)}
            className="w-full bg-transparent focus:outline-none border-b border-transparent hover:border-slate-100 text-slate-600"
          />
        </div>
      </div>
    </div>
  );
}
