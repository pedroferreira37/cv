"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useAsync } from "react-use";
import { pdf } from "@react-pdf/renderer";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { Loader } from "./loader";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export function Resume({ document, resume, arrows }) {
  const [numPages, setNumPages] = useState<number | null>(null);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [previousRenderedValue, setPreviousRenderedValue] = useState<
    string | null | undefined
  >(null);

  const render = useAsync(async () => {
    if (!resume) return null;

    const blob = await pdf(document).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [resume]);

  const onPreviousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const onNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const isFirstRendering = !previousRenderedValue;

  const isLatestValueRendered = previousRenderedValue === render.value;

  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowTextLoader = isFirstRendering && isBusy;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  function onLoadSucess() {
    setPreviousRenderedValue(render.value);
  }

  const onDocumentLoad = (document) => {
    setNumPages(document.numPages);
    setCurrentPage((prev) => Math.min(prev, document.numPages));
  };

  return (
    <div className="h-full  flex flex-col border-[0.5px] border-gray-200">
      <div
        className={`w-full h-full top-0 left-0 flex bg-gray-200 animate-pulse  items-center justify-center z-1000   ${
          shouldShowTextLoader ? "opacity-100" : "opacity-0"
        }  absolute`}
      >
        <Loader size={18} />
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
              key={currentPage}
              pageNumber={currentPage}
              className="w-full h-full "
              renderTextLayer={false}
              renderAnnotationLayer={false}
              loading={null as unknown as undefined}
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
          onLoadSuccess={onDocumentLoad}
        >
          <Page
            key={currentPage}
            pageNumber={currentPage}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="w-full h-full"
            loading={null as unknown as undefined}
            onRenderSuccess={onLoadSucess}
          ></Page>
        </Document>
      </div>
      {arrows && (
        <div className="flex justify-between py-4">
          <div>
            {currentPage !== 1 && (
              <button onClick={onPreviousPage} className="rounded-full  group ">
                <FiArrowLeft
                  size={18}
                  className="group-hover:animate-wiggle "
                />
              </button>
            )}
          </div>
          <div>
            {currentPage} de {numPages} Páginas
          </div>
          <div>
            {currentPage < numPages && (
              <button onClick={onNextPage} className="rounded-full  group ">
                <FiArrowRight
                  className="group-hover:animate-wiggle"
                  size={18}
                />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
