export const updateStringFormat = (text, split, separator) => {
  return text.toLowerCase().split(split).join(separator);
};
