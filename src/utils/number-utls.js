const DICTIONARY = {
  ratings: [`rating`, `ratings`],
};

export function getPluralFormOfRatings(count) {
  return getPluralForm(count, DICTIONARY.ratings);
}

export function getPluralForm(count, numerals) {
  return numerals[count === 1 ? 0 : 1];
}
