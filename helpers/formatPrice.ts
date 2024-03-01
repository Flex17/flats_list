export const formatPrice = (numberString: number | string | undefined) => {
  const reversedNumber = numberString?.toString()
    .split('')
    .reverse()
    .join('');
  const arr = reversedNumber?.match(/.{1,3}/g);
  if (arr === null) return '';

  return arr?.join(' ')
    .split('')
    .reverse()
    .join('');
};
