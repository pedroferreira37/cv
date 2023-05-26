"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useAsync } from "react-use";
import { Professional } from "./professional-template";
import { pdf } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const renderResume = (props) => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
  }
};

export function ResumeRenderer({ props, onUrlChange }) {
  const [previousRenderedValue, setPreviousRenderedValue] = useState<
    string | null | undefined
  >(null);

  const render = useAsync(async () => {
    if (!props) return null;

    const resume = renderResume(props);
    const blob = await pdf(resume).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [props]);

  const isFirstRendering = !previousRenderedValue;

  const isLatestValueRendered = previousRenderedValue === render.value;

  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowTextLoader = isFirstRendering && isBusy;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  useEffect(() => onUrlChange && onUrlChange(render.value), [render.value]);

  function onLoadSucess() {
    setPreviousRenderedValue(render.value);
  }

  return (
    <div className="h-full relative flex flex-col ">
      <div
        className={`w-full h-full top-0 left-0 flex bg-white items-center justify-center z-1000   ${
          shouldShowTextLoader ? "opacity-100 " : "opacity-0"
        }  absolute`}
      >
        Carregando...
      </div>

      <div className="flex flex-1 p-4 items-center justify-center w-full ">
        {shouldShowPreviousDocument && previousRenderedValue ? (
          <Document file={previousRenderedValue} loading={null} className="">
            <Page
              pageNumber={1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={null}
            ></Page>
          </Document>
        ) : null}

        <Document
          file={render.value}
          loading={null}
          className={`border  ${
            shouldShowPreviousDocument ? "hidden" : "visible shadow"
          }`}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            loading={null}
            onLoadSuccess={onLoadSucess}
          ></Page>
        </Document>
      </div>
    </div>
  );
}
