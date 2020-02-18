import {getPluralFormOfRatings} from './number-utls';

const RATING_SCORE_LIMIT = 10;
const RATING_LEVELS = [
  `Bad`,
  `Normal`,
  `Good`,
  `Very good`,
  `Awesome`,
];
const ACTORS_LIMIT = 4;

export function getRatingScore(score) {
  return score.toFixed(1).replace(`.`, `,`);
}

export function getRatingLevel(score) {
  return RATING_LEVELS[Math.floor(score / RATING_SCORE_LIMIT * (RATING_LEVELS.length - 1))];
}

export function getRatingReviewsCount(reviewsCount) {
  return `${reviewsCount} ${getPluralFormOfRatings(reviewsCount)}`;
}

export function getActors(actors) {

  const result = actors.slice(0, ACTORS_LIMIT).join(`, `);

  if (actors.length > ACTORS_LIMIT) {
    return `${result} and other`;
  }

  return result;
}
