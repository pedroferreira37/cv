"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function ResumeRender(props) {
  const [firstRender, setFirstRender] = useState(true);

  return (
    <div className="w-full h-full relative" id="element">
      <Document file={props.url} loading={undefined}>
        <Page
          pageNumber={1}
          renderMode="canvas"
          renderTextLayer={false}
          renderAnnotationLayer={false}
          loading={undefined}
          className="w-full h-full"
        ></Page>
      </Document>
    </div>
  );
}
