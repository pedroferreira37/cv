"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { pdf } from "@react-pdf/renderer";
import { useAsync } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

export interface Props {
  component: JSX.Element | null;
}

export const PdfRenderer: React.FC<Props> = ({ component }) => {
  const [previousRenderValue, setPreviousRenderValue] = useState<
    string | null | undefined
  >(null);

  const render: AsyncState<string | null> = useAsync(async () => {
    if (!component) return null;

    const blob = await pdf(component).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [component]);

  const isFirstRendering = !previousRenderValue;

  const isLatestValueRendered = previousRenderValue === render.value;

  const isBusy = render.loading || !isLatestValueRendered;

  const shouldShowPreviousDocument = !isFirstRendering && isBusy;

  const onDocumentLoadSuccess = () => {
    setPreviousRenderValue(render.value);
  };
  return (
    <div className="w-full flex justify-center relative">
      {shouldShowPreviousDocument && previousRenderValue ? (
        <Document
          key={previousRenderValue}
          file={previousRenderValue}
          loading={undefined}
          className="w-4  h-4"
        >
          <Page
            renderAnnotationLayer={false}
            renderTextLayer={false}
            pageNumber={1}
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
          renderAnnotationLayer={false}
          renderTextLayer={false}
          loading={undefined}
          className="rounded-sm shadow-xl border"
          onRenderSuccess={onDocumentLoadSuccess}
        />
      </Document>
    </div>
  );
};
