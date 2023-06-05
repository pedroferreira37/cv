export const months = [
  "",
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const years: string[] = Array.from(new Array<string>(40), (_, index) =>
  index === 0 ? "" : (new Date().getFullYear() - index).toString()
);
