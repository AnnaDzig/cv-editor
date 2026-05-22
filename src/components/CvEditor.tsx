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

  const updateSkillGroupTitle = (groupId: string, value: string) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((group) =>
        group.id === groupId ? { ...group, title: value } : group,
      ),
    }));
  };

  const updateSkillItem = (
    groupId: string,
    itemIndex: number,
    value: string,
  ) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((group) =>
        group.id === groupId
          ? {
              ...group,
              items: group.items.map((item, index) =>
                index === itemIndex ? value : item,
              ),
            }
          : group,
      ),
    }));
  };

  const addSkillItem = (groupId: string) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((group) =>
        group.id === groupId
          ? {
              ...group,
              items: [...group.items, "New skill: Description"],
            }
          : group,
      ),
    }));
  };

  const removeSkillItem = (groupId: string, itemIndex: number) => {
    setData((prev) => ({
      ...prev,
      skills: prev.skills.map((group) =>
        group.id === groupId
          ? {
              ...group,
              items: group.items.filter((_, index) => index !== itemIndex),
            }
          : group,
      ),
    }));
  };

  const updateLanguage = (indexToUpdate: number, value: string) => {
    setData((prev) => ({
      ...prev,
      languages: prev.languages.map((language, index) =>
        index === indexToUpdate ? value : language,
      ),
    }));
  };

  const addLanguage = () => {
    setData((prev) => ({
      ...prev,
      languages: [...prev.languages, "New language — Level"],
    }));
  };

  const removeLanguage = (indexToRemove: number) => {
    setData((prev) => ({
      ...prev,
      languages: prev.languages.filter((_, index) => index !== indexToRemove),
    }));
  };

  return (
    <aside className="w-full rounded-2xl bg-white p-5 shadow-lg lg:w-[420px] print:hidden">
      <h2 className="text-xl font-bold text-neutral-900">Edit CV</h2>

      <div className="mt-5 space-y-6">
        <EditorSection title="Personal information">
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
        </EditorSection>

        <EditorSection title="Summary">
          <label className="block">
            <span className="text-sm font-semibold text-neutral-700">
              Summary
            </span>

            <textarea
              value={data.summary}
              onChange={(event) =>
                updateTextField("summary", event.target.value)
              }
              rows={6}
              className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[#173955] focus:ring-2 focus:ring-[#173955]/20"
            />
          </label>
        </EditorSection>

        <EditorSection title="Skills">
          <div className="space-y-5">
            {data.skills.map((group) => (
              <div
                key={group.id}
                className="rounded-xl border border-neutral-200 bg-neutral-50 p-3">
                <Input
                  label="Skill group title"
                  value={group.title}
                  onChange={(value) => updateSkillGroupTitle(group.id, value)}
                />

                <div className="mt-3 space-y-3">
                  {group.items.map((item, index) => (
                    <div key={`${group.id}-${index}`} className="flex gap-2">
                      <input
                        value={item}
                        onChange={(event) =>
                          updateSkillItem(group.id, index, event.target.value)
                        }
                        className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[#173955] focus:ring-2 focus:ring-[#173955]/20"
                      />

                      <button
                        type="button"
                        onClick={() => removeSkillItem(group.id, index)}
                        className="rounded-lg border border-red-200 px-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                        ×
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => addSkillItem(group.id)}
                  className="mt-3 rounded-full border border-[#173955] px-4 py-1.5 text-sm font-semibold text-[#173955] transition hover:bg-[#173955] hover:text-white">
                  Add skill
                </button>
              </div>
            ))}
          </div>
        </EditorSection>

        <EditorSection title="Languages">
          <div className="space-y-3">
            {data.languages.map((language, index) => (
              <div key={index} className="flex gap-2">
                <input
                  value={language}
                  onChange={(event) =>
                    updateLanguage(index, event.target.value)
                  }
                  className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:border-[#173955] focus:ring-2 focus:ring-[#173955]/20"
                />

                <button
                  type="button"
                  onClick={() => removeLanguage(index)}
                  className="rounded-lg border border-red-200 px-3 text-sm font-semibold text-red-600 transition hover:bg-red-50">
                  ×
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={addLanguage}
              className="rounded-full border border-[#173955] px-4 py-1.5 text-sm font-semibold text-[#173955] transition hover:bg-[#173955] hover:text-white">
              Add language
            </button>
          </div>
        </EditorSection>
      </div>
    </aside>
  );
}

type EditorSectionProps = {
  title: string;
  children: React.ReactNode;
};

function EditorSection({ title, children }: EditorSectionProps) {
  return (
    <section>
      <h3 className="mb-3 border-b border-neutral-200 pb-2 text-sm font-bold uppercase tracking-wide text-neutral-500">
        {title}
      </h3>

      <div className="space-y-4">{children}</div>
    </section>
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
