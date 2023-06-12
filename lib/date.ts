export const months: { [key: number]: string } = {
  0: "Janeiro",
  1: "Fevereiro",
  2: "Março",
  3: "Abril",
  4: "Maio",
  5: "Junho",
  6: "Julho",
  7: "Agosto",
  8: "Setembro",
  9: "Outubro",
  10: "Novembro",
  11: "Dezembro",
};

export const years: number[] = Array.from(
  new Array<string>(40),
  (_, index) => new Date().getFullYear() - index
);
