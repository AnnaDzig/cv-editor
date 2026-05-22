type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h2 className="mt-5 border-b-2 border-neutral-500 pb-1 text-[18px] font-extrabold uppercase tracking-wide text-neutral-800">
      {children}
    </h2>
  );
}
