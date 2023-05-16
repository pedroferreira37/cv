"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { pdf } from "@react-pdf/renderer";
import { useAsync } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";
import { SpinLoader } from "./spin-loader";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export const ResumeViewer = ({ layout }) => {
  const [previousRenderValue, setPreviousRenderValue] = useState<
    string | null | undefined
  >(null);

  const render: AsyncState<string | null> = useAsync(async () => {
    if (!layout) return null;

    const blob = await pdf(layout).toBlob();
    const url = URL.createObjectURL(blob);

    console.log(url);

    return url;
  }, [layout]);

  const isFirstRendering = !previousRenderValue;

  const isLatestValueRendered = previousRenderValue === render.value;

  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowTextLoader = isFirstRendering && isBusy;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  const onDocumentLoadSuccess = () => {
    setPreviousRenderValue(render.value);
  };

  return (
    <div className="w-full h-full relative">
      {shouldShowTextLoader && (
        <div className="w-full h-full absolute top-0 left-0 flex items-center bg-white justify-center z-[1000] shadow animate-pulse rounded ">
          <SpinLoader size={20} />
        </div>
      )}
      {shouldShowPreviousDocument && previousRenderValue ? (
        <Document
          key={previousRenderValue}
          file={previousRenderValue}
          loading={undefined}
        >
          <Page
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={1}
            className="w-full h-full"
          />
        </Document>
      ) : null}
      <Document
        key={render.value}
        file={render.value}
        className={`${
          shouldShowPreviousDocument && previousRenderValue
            ? "hidden"
            : undefined
        } border-full`}
        loading={undefined}
      >
        <Page
          pageNumber={1}
          renderMode="canvas"
          width={800}
          height={1400}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          loading={undefined}
          className="rounded-sm shadow-xl border w-full h-full"
          onRenderSuccess={onDocumentLoadSuccess}
        />
      </Document>
    </div>
  );
};
