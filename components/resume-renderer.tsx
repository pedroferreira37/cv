"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useAsync } from "react-use";
import { Professional } from "./professional-template";
import { pdf } from "@react-pdf/renderer";
import { FiDownload } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const renderResume = (props) => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
  }
};

export function ResumeRenderer({ props, onUrlChange }) {
  const render = useAsync(async () => {
    if (!props) return null;

    const resume = renderResume(props);
    const blob = await pdf(resume).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [props]);

  useEffect(() => onUrlChange(render.value), [render.value]);
  return (
    <div>
      <Document file={render.value || ""}>
        <Page
          pageNumber={1}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        ></Page>
      </Document>
      <div></div>
    </div>
  );
}
