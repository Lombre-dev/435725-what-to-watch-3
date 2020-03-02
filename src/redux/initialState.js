import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../components/consts';
import {MOVIES} from '../mocks/movies';
import {getGenresFromMovies} from '../utils/movie-utils';

export const initialState = {
  currentMovie: undefined,
  promoMovie: MOVIES[0],

  // TODO: разбить на дочерние редьюсеры
  allMovies: MOVIES,
  catalogGenres: [ALL_GENRE].concat(getGenresFromMovies(MOVIES)),
  catalogGenre: ALL_GENRE,
  catalogMovies: MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
  hasMoreCatalogMovies: MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
};
