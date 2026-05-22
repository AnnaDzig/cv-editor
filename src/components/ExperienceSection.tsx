import React from "react";
import type { WorkExperience } from "../data";

interface ExperienceSectionProps {
  experience: WorkExperience[];
  handleExpHeaderChange: (
    id: string,
    field: keyof Omit<WorkExperience, "id" | "bullets">,
    value: string,
  ) => void;
  handleExpBulletChange: (id: string, index: number, value: string) => void;
}

export default function ExperienceSection({
  experience,
  handleExpHeaderChange,
  handleExpBulletChange,
}: ExperienceSectionProps) {
  return (
    <div className="mb-5">
      <h3 className="text-xs font-bold text-slate-900 tracking-wider uppercase border-b border-slate-300 pb-1 mb-3">
        Work Experience
      </h3>
      {experience.map((job) => (
        <div key={job.id} className="mb-4 text-xs">
          <div className="flex justify-between items-baseline gap-2 font-medium">
            <input
              type="text"
              value={job.company}
              onChange={(e) =>
                handleExpHeaderChange(job.id, "company", e.target.value)
              }
              className="bg-transparent font-bold text-slate-900 focus:outline-none flex-1"
            />
            <input
              type="text"
              value={job.timeline}
              onChange={(e) =>
                handleExpHeaderChange(job.id, "timeline", e.target.value)
              }
              className="bg-transparent text-slate-500 text-right w-40 font-semibold focus:outline-none"
            />
          </div>
          <div className="flex justify-between items-baseline gap-2 text-slate-500 italic mb-1">
            <input
              type="text"
              value={job.role}
              onChange={(e) =>
                handleExpHeaderChange(job.id, "role", e.target.value)
              }
              className="bg-transparent italic text-slate-600 focus:outline-none flex-1"
            />
            <input
              type="text"
              value={job.location}
              onChange={(e) =>
                handleExpHeaderChange(job.id, "location", e.target.value)
              }
              className="bg-transparent text-right w-40 focus:outline-none text-[11px]"
            />
          </div>
          <ul className="list-disc list-outside ml-4 text-slate-600 space-y-1">
            {job.bullets.map((bullet, i) => (
              <li key={i}>
                <input
                  type="text"
                  value={bullet}
                  onChange={(e) =>
                    handleExpBulletChange(job.id, i, e.target.value)
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
