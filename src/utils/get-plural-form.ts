export function getPluralForm(count: number, numerals: string[]): string {
  return numerals[count === 1 ? 0 : 1];
}
