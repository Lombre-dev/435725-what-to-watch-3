const DICTIONARY = {
  ratings: {
    ru: [`оценка`, `оценки`, `оценок`],
    en: [`rating`, `ratings`],
  },
};

export const getNumeralOf = {
  ru: getRuNumeralOf,
  en: getEnNumeralOf,
};

export function getNumeralFromDictionary(count, key, language = `en`) {
  if (
    !getNumeralOf[language] ||
    !DICTIONARY[key] ||
    !DICTIONARY[key][language]
  ) {
    return `getNumeral for '${key}', '${language}' not found.`;
  }
  return getNumeralOf[language](count, DICTIONARY.ratings[language]);
}


function getEnNumeralOf(count, numerals) {
  return numerals[count === 1 ? 0 : 1];
}

function getRuNumeralOf(count, numerals) {

  let remainder = count % 100;

  if (remainder > 10 && remainder < 15) {
    return numerals[2];
  } else {
    remainder %= 10;
    if (remainder > 1 && remainder < 5) {
      return numerals[1];
    } else if (remainder === 1) {
      return numerals[0];
    }
  }
  return numerals[2];
}
