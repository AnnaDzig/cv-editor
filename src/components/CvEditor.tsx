import type { CvData } from "../data";

type CvEditorProps = {
  data: CvData;
  setData: React.Dispatch<React.SetStateAction<CvData>>;
};

export default function CvEditor({ data, setData }: CvEditorProps) {
  const updateTextField = (
    field: keyof Pick<
      CvData,
      | "name"
      | "title"
      | "location"
      | "email"
      | "linkedIn"
      | "github"
      | "portfolio"
      | "summary"
      | "photoUrl"
    >,
    value: string,
  ) => {
    setData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <aside className="w-full rounded-2xl bg-white p-5 shadow-lg lg:w-[420px] print:hidden">
      <h2 className="text-xl font-bold text-neutral-900">Edit CV</h2>

      <div className="mt-5 space-y-4">
        <Input
          label="Name"
          value={data.name}
          onChange={(value) => updateTextField("name", value)}
        />

        <Input
          label="Title"
          value={data.title}
          onChange={(value) => updateTextField("title", value)}
        />

        <Input
          label="Location"
          value={data.location}
          onChange={(value) => updateTextField("location", value)}
        />

        <Input
          label="Email"
          value={data.email}
          onChange={(value) => updateTextField("email", value)}
        />

        <Input
          label="LinkedIn"
          value={data.linkedIn}
          onChange={(value) => updateTextField("linkedIn", value)}
        />

        <Input
          label="GitHub"
          value={data.github}
          onChange={(value) => updateTextField("github", value)}
        />

        <Input
          label="Portfolio"
          value={data.portfolio}
          onChange={(value) => updateTextField("portfolio", value)}
        />

        <Input
          label="Photo URL"
          value={data.photoUrl}
          onChange={(value) => updateTextField("photoUrl", value)}
        />

        <label className="block">
          <span className="text-sm font-semibold text-neutral-700">
            Summary
          </span>

          <textarea
            value={data.summary}
            onChange={(event) => updateTextField("summary", event.target.value)}
            rows={6}
            className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[#173955] focus:ring-2 focus:ring-[#173955]/20"
          />
        </label>
      </div>
    </aside>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function Input({ label, value, onChange }: InputProps) {
  return (
    <label className="block">
      <span className="text-sm font-semibold text-neutral-700">{label}</span>

      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[#173955] focus:ring-2 focus:ring-[#173955]/20"
      />
    </label>
  );
}
