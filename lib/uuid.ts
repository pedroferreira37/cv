export const uuid = (length = 6) =>
  Array.from({ length: 3 }, () => Math.random() * 10)
    .map((num) => num.toString(36).slice(2, length + 2))
    .join("-");
