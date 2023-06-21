export const months: {   value: number, label: string }[] = [
  { value: 0, label: "Janeiro" },
  { value: 1, label: "Fevereiro" },
  { value: 2, label: "Março" },
  { value: 3, label: "Abril" },
  { value: 4, label: "Maio" },
  { value: 5, label: "Junho" },
  { value: 6, label: "Julho" },
  { value: 7, label: "Agosto" },
  { value: 8, label: "Setembro" },
  { value: 9, label: "Outubro" },
  { value: 10, label: "Novembro" },
  { value: 11, label: "Dezembro" }
]



export const years: {value: number, label: number}[] = Array.from(
  new Array<string>(40),
  (_, index) => {
    const year = new Date().getFullYear() - index
    return { value: year, label: year}
  }
  )