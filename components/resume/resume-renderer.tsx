"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useAsync } from "react-use";
import { Professional } from "../templates/professional-template";
import { pdf } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function ResumeRenderer({ document, data }) {
  const [previousRenderedValue, setPreviousRenderedValue] = useState<
    string | null | undefined
  >(null);

  const render = useAsync(async () => {
    if (!data) return null;

    const blob = await pdf(document).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [data]);

  const isFirstRendering = !previousRenderedValue;

  const isLatestValueRendered = previousRenderedValue === render.value;

  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowTextLoader = isFirstRendering && isBusy;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  function onLoadSucess() {
    setPreviousRenderedValue(render.value);
  }

  return (
    <div className="h-full  flex flex-col ">
      <div
        className={`w-full h-full top-0 left-0 flex bg-gray-200 animate-pulse  items-center justify-center z-1000   ${
          shouldShowTextLoader ? "opacity-100" : "opacity-0"
        }  absolute`}
      >
        ...
      </div>

      <div className="flex flex-1  items-center justify-center w-full h-full ">
        {shouldShowPreviousDocument && previousRenderedValue ? (
          <Document
            key={previousRenderedValue}
            file={previousRenderedValue}
            loading={undefined}
            className=""
          >
            <Page
              pageNumber={1}
              className="w-full h-full "
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={undefined}
            ></Page>
          </Document>
        ) : null}

        <Document
          key={render.value}
          file={render.value}
          loading={undefined}
          className={`shadow-[rgba(0,0,0,.1)_0_2px_3px]   ${
            shouldShowPreviousDocument && previousRenderedValue
              ? "hidden"
              : null
          }`}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="w-full h-full"
            loading={undefined}
            onLoadSuccess={onLoadSucess}
          ></Page>
        </Document>
      </div>
    </div>
  );
}
