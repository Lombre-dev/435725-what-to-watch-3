import {getPluralForm} from './get-plural-form';

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
  return `${reviewsCount} ${getPluralForm(reviewsCount, [`rating`, `ratings`])}`;
}

export function getActors(actors) {

  const result = actors.slice(0, ACTORS_LIMIT).join(`, `);

  if (actors.length > ACTORS_LIMIT) {
    return `${result} and other`;
  }

  return result;
}

export function getDuration(minutes) {

  const hours = Math.floor(minutes / 60);

  return `${hours > 0 ? `${hours}h ` : ``}${minutes - hours * 60} m`;
}

export function getMoviesByGenre(source, genre, exclude = []) {
  return source.filter((movie) => movie.genres.includes(genre) && !exclude.includes(movie));
}
