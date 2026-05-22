import type { Education } from "../data";
import SectionTitle from "./SectionTitle";

type EducationSectionProps = {
  education: Education[];
};

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <section className="break-inside-avoid">
      <SectionTitle>Education</SectionTitle>

      <div className="mt-2 space-y-2">
        {education.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-[1fr_auto] gap-4 text-[14px] leading-tight">
            <div>
              <p className="font-bold text-neutral-900">
                {item.school}
                {item.location ? `, ${item.location}` : ""}
              </p>
              <p className="uppercase">{item.degree}</p>
            </div>

            <p className="font-semibold text-neutral-800">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
