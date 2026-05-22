import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import CvEditor from "./components/CvEditor";
import CvPreview from "./components/CvPreview";
import { initialCvData } from "./data";

export default function App() {
  const [cvData, setCvData] = useState(initialCvData);
  const cvRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: cvRef,
    documentTitle: `${cvData.name}-CV`,
  });

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-6">
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between print:hidden">
        <div>
          <h1 className="text-2xl font-bold text-neutral-900">CV Editor</h1>
          <p className="text-sm text-neutral-600">
            Edit your CV and download it as PDF.
          </p>
        </div>

        <button
          type="button"
          onClick={handlePrint}
          className="rounded-full bg-[#173955] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#102a40]">
          Download PDF
        </button>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <CvEditor data={cvData} setData={setCvData} />

        <section className="flex-1 overflow-auto">
          <div ref={cvRef}>
            <CvPreview data={cvData} />
          </div>
        </section>
      </div>
    </main>
  );
}
