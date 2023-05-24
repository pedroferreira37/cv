"use client";
import { Professional } from "./professional-template";
import { useResume } from "@/hooks/use-resume";
import html2canvas from "html2canvas";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { useCallback } from "react";

import { FiDownload } from "react-icons/fi";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

type Config = {
  content: {
    image: string | undefined;
    width: number;
    style: { alignment: string };
  }[];
  pageMargins: number[];
};

const renderResume = (props) => {
  switch (props.type) {
    case "professional":
      return <Professional {...props} />;
  }
};

export function Resume(props) {
  console.log(props);
  const resume = renderResume(props);

  const download = (id: string) => {
    const DOM = document.getElementById(id) as HTMLElement;

    html2canvas(DOM, { scale: 8 }).then((ctx: HTMLCanvasElement) => {
      const config: Config = {
        content: [
          {
            image: ctx.toDataURL(),
            width: 600,
            style: {
              alignment: "center",
            },
          },
        ],
        pageMargins: [0, 0, 0, 0],
      };

      const pdf = pdfMake.createPdf(config);
      pdf.download();
    });
  };

  return (
    <div className=" flex items-center justify-center px-8 pt-8">
      <div className="grid grid-cols-1 grid-rows-[1fr_100px]">
        <div className="bg-white   w-[37rem] h-[50rem] mt-2" id={props.type}>
          {resume}
        </div>
        <div className="flex items-center justify-end">
          <div
            role="button"
            className="bg-green-default hover:bg-green-hover text-white text-sm px-4 py-2 rounded flex gap-2 items-center"
            id={props.type}
            onClick={(e) => download(e.target.id)}
          >
            <FiDownload size={20} />
            Download
          </div>
        </div>
      </div>
    </div>
  );
}
