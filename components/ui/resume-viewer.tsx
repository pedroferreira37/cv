"use client";
import { Document, Page, pdfjs } from "react-pdf";
import { useAsync } from "react-use";
import { pdf } from "@react-pdf/renderer";
import { useState } from "react";
import { Resume } from "@/lib/reducer";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type Props = {
  document: React.ReactElement;
  resume: Resume;
  arrows?: boolean;
};

export function ResumeViewer({ document, resume, arrows }: Props) {
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
    setCurrentPage((prev) => (currentPage > 1 ? prev - 1 : prev));
  };

  const onNextPage = () => {
    setCurrentPage((prev) =>
      numPages > 1 && currentPage < numPages ? prev + 1 : prev
    );
  };

  const isFirstRendering = !previousRenderedValue;

  const isLatestValueRendered = previousRenderedValue === render.value;

  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowTextLoader = isFirstRendering && isBusy;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  function onLoadSucess() {
    setPreviousRenderedValue(render.value);
  }

  const onDocumentLoad = (pdf: any) => {
    setNumPages(pdf.numPages);
    setCurrentPage((prev) => Math.min(prev, pdf.numPages));
  };

  return (
    <div className="h-full  relative flex flex-col  rounded">
      <div
        className={`w-full h-full top-0 left-0 flex bg-gray-200  items-center justify-center z-1000   ${
          shouldShowTextLoader ? "opacity-100" : "opacity-0"
        }  absolute`}
      ></div>

      <div className="flex flex-1  items-center justify-center w-full h-full ">
        {shouldShowPreviousDocument && previousRenderedValue ? (
          <Document
            key={previousRenderedValue + "prev"}
            file={previousRenderedValue}
            loading={null as unknown as undefined}
            className=""
          >
            <Page
              key={currentPage + 1}
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
          loading={null as unknown as undefined}
          className={`shadow-[rgba(0,0,0,.1)_0_2px_3px]   ${
            shouldShowPreviousDocument && previousRenderedValue
              ? "hidden"
              : null
          }`}
          onLoadSuccess={onDocumentLoad}
        >
          <Page
            key={currentPage - 1}
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
        <div className="flex justify-center gap-4 items-center p-4 z-[2000]">
          <button
            onClick={onPreviousPage}
            className="r-18 disabled:opacity-50 disabled:cursor-none"
          >
            <FiArrowLeft size={18} className="mr-18 cursor-pointer" />
          </button>
          {currentPage} of {numPages}
          <button onClick={onNextPage} className="disabled:opacity-50">
            <FiArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
