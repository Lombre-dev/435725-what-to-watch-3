import {TMovie} from '../types';
import {GenreLabels} from '../consts';
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

export function getRatingScore(score: number): string {
  return score.toFixed(1).replace(`.`, `,`);
}

export function getRatingLevel(score: number): string {
  return RATING_LEVELS[Math.floor(score / RATING_SCORE_LIMIT * (RATING_LEVELS.length - 1))];
}

export function getRatingReviewsCount(reviewsCount: number): string {
  return `${reviewsCount} ${getPluralForm(reviewsCount, [`rating`, `ratings`])}`;
}

export function getActors(actors: string[]): string {

  const result: string = actors.slice(0, ACTORS_LIMIT).join(`, `);

  if (actors.length > ACTORS_LIMIT) {
    return `${result} and other`;
  }

  return result;
}

export function getDuration(minutes: number): string {

  const hours = Math.floor(minutes / 60);

  return `${hours > 0 ? `${hours}h ` : ``}${minutes - hours * 60} m`;
}

export function getMoviesByGenre(source: TMovie[], genre: string, exclude: TMovie[] = []): TMovie[] {
  return source.filter((movie) => movie.genres.includes(genre) && !exclude.includes(movie));
}

export function getGenreLabels() {
  return Object.assign({}, GenreLabels);
}

export function getGenresFromMovies(source: TMovie[]): string[] {

  const genres: string[] = [];

  source.forEach((movie) => {
    movie.genres.forEach((genre) => {
      if (genres.includes(genre)) {
        return;
      }
      genres.push(genre);
    });
  });

  return genres;
}
