import SectionTitle from "./SectionTitle";

type LanguagesSectionProps = {
  languages: string[];
};

export default function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <section className="break-inside-avoid">
      <SectionTitle>Languages</SectionTitle>

      <div className="mt-2 grid grid-cols-2 gap-x-8 gap-y-1 text-[14px]">
        {languages.map((language) => (
          <p key={language}>{language}</p>
        ))}
      </div>
    </section>
  );
}
