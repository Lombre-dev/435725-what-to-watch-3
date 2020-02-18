export function getPluralForm(count, numerals) {
  return numerals[count === 1 ? 0 : 1];
}
