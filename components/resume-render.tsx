"use client";
import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function ResumeRender(props) {
  return (
    <div>
      <Document file={props.url}>
        <Page pageNumber={1}></Page>
      </Document>
    </div>
  );
}
