const DICTIONARY = {
  ratings: {
    ru: [`оценка`, `оценки`, `оценок`],
    en: [`rating`, `ratings`],
  },
};

export const getPluralForm = {
  ru: getPluralFormRu,
  en: getPluralFormEn,
};

export function getPluralFormByKey(count, key, language = `en`) {
  if (
    !getPluralForm[language] ||
    !DICTIONARY[key] ||
    !DICTIONARY[key][language]
  ) {
    return `getPluralFormByKey for '${key}', '${language}' not found.`;
  }
  return getPluralForm[language](count, DICTIONARY.ratings[language]);
}


function getPluralFormEn(count, numerals) {
  return numerals[count === 1 ? 0 : 1];
}

function getPluralFormRu(count, numerals) {

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
