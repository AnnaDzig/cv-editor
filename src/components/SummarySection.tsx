import SectionTitle from "./SectionTitle";

type SummarySectionProps = {
  summary: string;
};

export default function SummarySection({ summary }: SummarySectionProps) {
  return (
    <section>
      <SectionTitle>Summary</SectionTitle>

      <p className="mt-2 text-justify text-[15px] leading-[1.45] text-neutral-900">
        {summary}
      </p>
    </section>
  );
}
