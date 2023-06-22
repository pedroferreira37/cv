export const months: { value: string; label: string }[]  = [
  { value: "", label: "" },
  { value: "1", label: "Janeiro" },
  { value: "2", label: "Fevereiro" },
  { value: "3", label: "Março" },
  { value: "4", label: "Abril" },
  { value: "5", label: "Maio" },
  { value: "6", label: "Junho" },
  { value: "7", label: "Julho" },
  { value: "8", label: "Agosto" },
  { value: "9", label: "Setembro" },
  { value: "10", label: "Outubro" },
  { value: "11", label: "Novembro" },
  { value: "12", label: "Dezembro" },
];


export const years: { value: string; label: string }[] = Array.from(
  new Array<string>(40),
  (_, index) => {
    const year = new Date().getFullYear() - index;
    return index === 0 ? { value: "", label: ""} : { value: year.toString(), label: year.toString() };
  }
);
