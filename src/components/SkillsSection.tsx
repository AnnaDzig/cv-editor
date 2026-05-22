import type { SkillGroup } from "../data";
import SectionTitle from "./SectionTitle";

type SkillsSectionProps = {
  skills: SkillGroup[];
};

export default function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section>
      <SectionTitle>Skills</SectionTitle>

      <div className="mt-2 space-y-3">
        {skills.map((group) => (
          <div key={group.id}>
            <h3 className="text-[15px] font-extrabold uppercase text-neutral-900">
              {group.title}
            </h3>

            <ul className="mt-1 list-disc space-y-1 pl-7 text-[14px] leading-[1.35] text-neutral-900">
              {group.items.map((item) => {
                const [label, value] = item.split(":");

                return (
                  <li key={item}>
                    {value ? (
                      <>
                        <strong>{label}:</strong>
                        {value}
                      </>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
