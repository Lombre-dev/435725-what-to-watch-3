
import {ALL_GENRE} from '../../consts';

export const initialState = {
  allMovies: [],

  promoMovie: undefined, // MOVIES[0]
  genres: [ALL_GENRE], // [ALL_GENRE].concat(getGenresFromMovies(MOVIES)),
  currentGenre: ALL_GENRE,
  movies: [], // MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
  hasMoreMovies: false, // MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
};
