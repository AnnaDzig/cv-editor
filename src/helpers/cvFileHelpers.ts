import type { CvData } from "../data";

export function downloadCvJson(data: CvData) {
  const safeFileName = data.fileName.trim() || "cv-version";

  const json = JSON.stringify(data, null, 2);

  const blob = new Blob([json], {
    type: "application/json",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeFileName}.json`;
  link.click();

  URL.revokeObjectURL(url);
}

export function readCvJsonFile(
  file: File,
  onSuccess: (data: CvData) => void,
  onError?: (message: string) => void,
) {
  const reader = new FileReader();

  reader.onload = () => {
    try {
      const result = reader.result;

      if (typeof result !== "string") {
        throw new Error("Invalid file format.");
      }

      const parsedData = JSON.parse(result) as CvData;

      if (!parsedData.name || !parsedData.title) {
        throw new Error("This does not look like a valid CV file.");
      }

      onSuccess(parsedData);
    } catch {
      onError?.(
        "Could not open this CV file. Please upload a valid CV JSON file.",
      );
    }
  };

  reader.onerror = () => {
    onError?.("Something went wrong while reading the file.");
  };

  reader.readAsText(file);
}
