import React from "react";
import type { ProjectHighlight } from "../data";

interface ProjectsSectionProps {
  projects: ProjectHighlight[];
  handleProjHeaderChange: (
    id: string,
    field: "title" | "role",
    value: string,
  ) => void;
  handleProjBulletChange: (id: string, index: number, value: string) => void;
}

export default function ProjectsSection({
  projects,
  handleProjHeaderChange,
  handleProjBulletChange,
}: ProjectsSectionProps) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
        Project Highlights
      </h3>
      {projects.map((proj) => (
        <div key={proj.id} className="text-xs">
          <div className="flex items-center gap-2 mb-1">
            <input
              type="text"
              value={proj.title}
              onChange={(e) =>
                handleProjHeaderChange(proj.id, "title", e.target.value)
              }
              className="font-bold text-slate-900 bg-transparent focus:outline-none"
            />
            <span className="text-slate-400">|</span>
            <input
              type="text"
              value={proj.role}
              onChange={(e) =>
                handleProjHeaderChange(proj.id, "role", e.target.value)
              }
              className="italic text-slate-500 bg-transparent focus:outline-none flex-1"
            />
          </div>
          <ul className="list-disc list-outside ml-4 text-slate-600 space-y-1">
            {proj.bullets.map((bullet, i) => (
              <li key={i}>
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) =>
                    handleProjBulletChange(proj.id, i, e.target.value)
                  }
                  className="w-full bg-transparent focus:outline-none text-slate-600"
                />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
