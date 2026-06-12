import { useState } from "react";
import type { CvData } from "../data";

type BulkCvImportProps = {
  setData: React.Dispatch<React.SetStateAction<CvData>>;
};

export default function BulkCvImport({ setData }: BulkCvImportProps) {
  const [bulkText, setBulkText] = useState("");

  function handleApplyBulkData() {
    if (!bulkText.trim()) {
      alert("Please paste CV data first.");
      return;
    }

    try {
      const parsedData = JSON.parse(bulkText) as Partial<CvData>;

      setData((previousData) => ({
        ...previousData,
        ...parsedData,
      }));

      setBulkText("");
      alert("CV data was applied successfully.");
    } catch {
      alert("The pasted CV data is not valid JSON. Please check the format.");
    }
  }

  function handleClear() {
    setBulkText("");
  }

  return (
    <section className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-neutral-900">
          Paste tailored CV data
        </h2>

        <p className="mt-1 text-sm text-neutral-600">
          Paste JSON data here to update several CV sections at once. You can
          paste the full CV or only selected fields like summary, skills,
          experience, education, courses, or languages.
        </p>
      </div>

      <textarea
        value={bulkText}
        onChange={(event) => setBulkText(event.target.value)}
        placeholder='Example: { "summary": "...", "skills": ["React", "TypeScript"] }'
        className="min-h-48 w-full resize-y rounded-xl border border-neutral-300 p-3 font-mono text-sm outline-none transition focus:border-neutral-700"
      />

      <div className="mt-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={handleApplyBulkData}
          className="rounded-xl bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-neutral-700">
          Apply pasted data
        </button>

        <button
          type="button"
          onClick={handleClear}
          className="rounded-xl border border-neutral-300 px-5 py-2 text-sm font-semibold text-neutral-800 transition hover:bg-neutral-100">
          Clear
        </button>
      </div>
    </section>
  );
}
