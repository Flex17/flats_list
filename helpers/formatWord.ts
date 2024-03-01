export const formatWord = (
  num: number,
  singular: string,
  pluralFew: string,
  pluralMany: string,
) => {
  const lastDigit = num % 10;
  const lastTwoDigits = num % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `${num} ${singular}`;
  } if (lastDigit >= 2 && lastDigit <= 4 && !(lastTwoDigits >= 12 && lastTwoDigits <= 14)) {
    return `${num} ${pluralFew}`;
  }
  return `${num} ${pluralMany}`;
};
