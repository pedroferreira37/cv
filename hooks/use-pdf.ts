import { jsPDF } from "jspdf";

export function usePDF() {
  const doc = new jsPDF("portrait", "pt", "a4");
  return doc;
}
