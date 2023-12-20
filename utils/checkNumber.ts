export const checkLengthNumber = (value: string | undefined) => {
  if (!value) return;

  if (value.startsWith("48")) {
    return value.length === 11;
  }
};
