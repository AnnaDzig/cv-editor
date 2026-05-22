import type { Experience } from "../data";
import SectionTitle from "./SectionTitle";

type ExperienceSectionProps = {
  experience: Experience[];
};

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section>
      <SectionTitle>Work Experience</SectionTitle>

      <div className="mt-3 space-y-5">
        {experience.map((job) => (
          <article key={job.id} className="break-inside-avoid">
            <div className="flex items-start justify-between gap-6 border-t border-neutral-400 pt-2">
              <div>
                <h3 className="text-[14px] font-extrabold leading-tight text-neutral-900">
                  {job.company}
                </h3>
                <p className="text-[14px] font-extrabold uppercase leading-tight text-neutral-900">
                  {job.role}
                </p>
              </div>

              <div className="min-w-[160px] text-right text-[13px] font-bold italic leading-tight text-neutral-800">
                <p>{job.period}</p>
                <p>{job.location}</p>
              </div>
            </div>

            <ul className="mt-3 list-disc space-y-1 pl-7 text-[14px] leading-[1.35] text-neutral-900">
              {job.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
