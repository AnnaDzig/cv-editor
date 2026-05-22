import React from "react";
import type { EducationItem } from "../data";

interface EducationSectionProps {
  education: EducationItem[];
  handleEducationChange: (
    id: string,
    field: keyof EducationItem,
    value: string,
  ) => void;
}

export default function EducationSection({
  education,
  handleEducationChange,
}: EducationSectionProps) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-2">
        Education
      </h3>
      <div className="space-y-2 text-xs text-slate-600">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex justify-between items-baseline gap-2">
            <div className="flex gap-1 items-center flex-1">
              <span>•</span>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) =>
                  handleEducationChange(edu.id, "degree", e.target.value)
                }
                className="font-bold text-slate-800 bg-transparent focus:outline-none w-1/2"
              />
              <span className="text-slate-400">|</span>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) =>
                  handleEducationChange(edu.id, "institution", e.target.value)
                }
                className="text-slate-500 bg-transparent focus:outline-none w-5/12"
              />
            </div>
            <input
              type="text"
              value={edu.timeline}
              onChange={(e) =>
                handleEducationChange(edu.id, "timeline", e.target.value)
              }
              className="text-slate-400 text-right focus:outline-none w-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
