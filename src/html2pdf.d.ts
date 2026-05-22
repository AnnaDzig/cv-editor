declare module "html2pdf.js" {
  interface Html2PdfOptions {
    margin?: number | [number, number, number, number];
    filename?: string;
    image?: { type: string; quality: number };
    html2canvas?: { scale: number; useCORS: boolean; letterRendering: boolean };
    jsPDF?: {
      unit: string;
      format: string | [number, number];
      orientation: string;
    };
    pagebreak?: {
      mode?: string | string[];
      before?: string;
      after?: string;
      avoid?: string;
    };
  }

  interface Html2PdfWorker {
    set: (options: Html2PdfOptions) => Html2PdfWorker;
    from: (element: HTMLElement) => Html2PdfWorker;
    save: () => Promise<void>;
  }

  function html2pdf(): Html2PdfWorker;
  function html2pdf(
    element: HTMLElement,
    options?: Html2PdfOptions,
  ): Promise<void>;

  export default html2pdf;
}
