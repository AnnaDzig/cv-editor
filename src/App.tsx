import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import CvEditor from "./components/CvEditor";
import CvPreview from "./components/CvPreview";
import { initialCvData } from "./data";

type CvData = typeof initialCvData;

type SavedCvVersion = {
  id: string;
  name: string;
  createdAt: string;
  data: CvData;
};

export default function App() {
  const [cvData, setCvData] = useState<CvData>(() => {
    const savedData = localStorage.getItem("currentCvData");

    return savedData ? JSON.parse(savedData) : initialCvData;
  });

  const [savedVersions, setSavedVersions] = useState<SavedCvVersion[]>(() => {
    const saved = localStorage.getItem("savedCvVersions");

    return saved ? JSON.parse(saved) : [];
  });

  const cvRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem("currentCvData", JSON.stringify(cvData));
  }, [cvData]);

  useEffect(() => {
    localStorage.setItem("savedCvVersions", JSON.stringify(savedVersions));
  }, [savedVersions]);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `${cvData.name}-CV`,
  });

  const handleSaveVersion = () => {
    const versionName = prompt("Name this CV version:");

    if (!versionName) return;

    const newVersion: SavedCvVersion = {
      id: crypto.randomUUID(),
      name: versionName,
      createdAt: new Date().toLocaleString(),
      data: cvData,
    };

    setSavedVersions((prev) => [newVersion, ...prev]);
  };

  const handleLoadVersion = (version: SavedCvVersion) => {
    setCvData(version.data);
  };

  const handleDeleteVersion = (id: string) => {
    setSavedVersions((prev) => prev.filter((version) => version.id !== id));
  };

  const handleReset = () => {
    const confirmed = confirm("Are you sure you want to reset the current CV?");

    if (!confirmed) return;

    setCvData(initialCvData);
  };

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-6">
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">CV Editor</h1>
          <p className="text-sm text-neutral-600">
            Edit your CV and download it as PDF.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleSaveVersion}
            className="rounded-full border border-[#173955] px-6 py-2.5 text-sm font-semibold text-[#173955] transition hover:bg-[#173955] hover:text-white">
            Save version
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="rounded-full border border-red-500 px-6 py-2.5 text-sm font-semibold text-red-600 transition hover:bg-red-500 hover:text-white">
            Reset
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="rounded-full bg-[#173955] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102a40]">
            Download PDF
          </button>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <aside className="w-full lg:w-[420px] print:hidden">
          <CvEditor data={cvData} setData={setCvData} />

          <section className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-lg font-bold text-neutral-900">
              Saved versions
            </h2>

            {savedVersions.length === 0 ? (
              <p className="text-sm text-neutral-500">No saved versions yet.</p>
            ) : (
              <div className="space-y-3">
                {savedVersions.map((version) => (
                  <div
                    key={version.id}
                    className="rounded-xl border border-neutral-200 p-4">
                    <div className="mb-3">
                      <p className="font-semibold text-neutral-900">
                        {version.name}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {version.createdAt}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => handleLoadVersion(version)}
                        className="rounded-full bg-neutral-200 px-4 py-1.5 text-xs font-semibold text-neutral-800 transition hover:bg-neutral-300">
                        Load
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDeleteVersion(version.id)}
                        className="rounded-full bg-red-100 px-4 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-200">
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </aside>

        <section className="flex-1 overflow-auto">
          <div ref={cvRef}>
            <CvPreview data={cvData} />
          </div>
        </section>
      </div>
    </main>
  );
}
