export const calcSpace = (space?: number | string) => {
  if (!space) {
    return 0;
  }

  if (typeof space === "number") {
    return `${space * 16}px`;
  }

  if (typeof space === "string") {
    return space;
  }

  return space;
};
