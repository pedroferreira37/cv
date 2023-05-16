"use client";
import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { pdf } from "@react-pdf/renderer";
import { useAsync } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";
import { SpinLoader } from "./spin-loader";

import Link from "next/link";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const stringfy = (component: any) => React.Children.only(component);

export const PdfRenderer = ({
  component,
  onChange,
}: {
  component: React.ReactNode;
  onChange?: any;
}) => {
  const [previousRenderValue, setPreviousRenderValue] = useState<
    string | null | undefined
  >(null);

  const render: AsyncState<string | null> = useAsync(async () => {
    if (!component) return null;

    const element = stringfy(component);
    const blob = await pdf(element).toBlob();
    const url = URL.createObjectURL(blob);

    return url;
  }, [component]);

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
          loading={""}
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
        loading={""}
      >
        <Page
          pageNumber={1}
          renderMode="canvas"
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
