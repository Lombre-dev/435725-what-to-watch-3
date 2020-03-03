import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../components/consts';
import {MOVIES} from '../mocks/movies';
import {getGenresFromMovies} from '../utils/movie-utils';

export const movieDetailsInitialState = {
  currentMovie: undefined,
  moviesLikeCurrent: [],
  allMovies: MOVIES,
};

export const catalogInitalState = {
  allMovies: MOVIES,

  promoMovie: MOVIES[0],
  genres: [ALL_GENRE].concat(getGenresFromMovies(MOVIES)),
  currentGenre: ALL_GENRE,
  movies: MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
  hasMoreMovies: MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
};
