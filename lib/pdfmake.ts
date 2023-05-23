import html2canvas from "html2canvas";
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

export const pdf = {
  _element: null,
  create(id: string) {
    this._element = document.getElementById(id);
  },
  download() {},
};
