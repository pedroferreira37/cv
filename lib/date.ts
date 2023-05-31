export const getYearsLength = (length: number) => {
  const years = [];
  const currentYear = new Date().getFullYear();

  for (let i = length; i > 0; i--) {
    years.push(currentYear - i);
  }

  years.push(currentYear);
  years.push("");
  years.reverse();

  return years;
};

export const months = [
  "",
  "Janeiro",
  "Feveiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Augusuto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
