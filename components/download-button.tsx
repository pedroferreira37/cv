"use client";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { JSXElementConstructor, ReactElement } from "react";

import { FiDownload } from "react-icons/fi";

type Props = {
  document: ReactElement<any, string | JSXElementConstructor<any>>;
};

export function DownloadButton({ document }: Props) {
  return (
    <div className="w-full pt-4 px-8 sticky bottom-0 bg-white shadow">
      <div className="flex justify-end items-center">
        <PDFDownloadLink
          document={document}
          fileName="somename.pdf"
          className="bg-green-default hover:bg-green-hover text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
        >
          <FiDownload size={20} />
          Download
        </PDFDownloadLink>
      </div>
    </div>
  );
}
