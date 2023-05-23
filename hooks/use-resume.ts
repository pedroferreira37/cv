import html2canvas from "html2canvas";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export function useResume(id: string, scale: Record<string, number>) {
  const element = document.getElementById(id);

  const canvas = await html2canvas(element as HTMLElement, scale);

  const content = [
    {
      image: canvas.toDataURL(),
      width: 600,
      style: {
        alignment: "center",
      },
    },
  ];

  const pdfmakeConfig = {
    content,
    pageMargins: [0, 0, 0, 0],
  };

  const pdfFile = pdfMake.createPdf(pdfmakeConfig);

  return pdfFile;
}
