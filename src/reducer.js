import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from './components/consts';
import {MOVIES} from './mocks/movies';
import {getGenresFromMovies, getMoviesByGenre} from './utils/movie-utils';

const initialState = {
  // app >>>
  currentMovie: undefined,
  // app <<<
  // main-page >>>
  promoMovie: MOVIES[0],

  catalogGenres: [ALL_GENRE].concat(getGenresFromMovies(MOVIES)),
  catalogGenre: ALL_GENRE,
  catalogPage: 1,
  catalogMovies: MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
  hasMoreCatalogMovies: MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
  // main-page <<<
};

export const ActionCreator = {
  setCurrentMovie: (movie) => {
    return {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: movie,
    };
  },
  setCatalogGenre: (genre) => {
    return {
      type: ActionType.SET_CATALOG_GENRE,
      payload: genre,
    };
  },
  getMoreCatalogMovies: () => {
    return {
      type: ActionType.GET_MORE_CATALOG_MOVIES,
      payload: undefined,
    };
  }
};

export const ActionType = {
  SET_CATALOG_GENRE: `SET_CATALOG_GENRE`,
  GET_MORE_CATALOG_MOVIES: `GET_MORE_CATALOG_MOVIES`,
  SET_CURRENT_MOVIE: `SET_CURRENT_MOVIE`,
};

function _setCurrentMovie(state, movie) {
  return Object.assign({}, state, {currentMovie: movie});
}

function _setCatalogGenre(state, genre) {

  const allMovies = genre === ALL_GENRE ? MOVIES : getMoviesByGenre(MOVIES, genre);
  const pageMovies = allMovies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    catalogGenre: genre,
    catalogPage: 1,
    catalogMovies: pageMovies,
    hasMoreCatalogMovies: pageMovies.length < allMovies.length,
  };

  return Object.assign({}, state, update);
}

function _getMoreCatalogMovies(state) {

  const {catalogGenre} = state;
  const catalogPage = state.catalogPage + 1;
  const allMovies = catalogGenre === ALL_GENRE ? MOVIES : getMoviesByGenre(MOVIES, catalogGenre);
  const pageMovies = allMovies.slice(0, catalogPage * CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    catalogPage,
    catalogMovies: pageMovies,
    hasMoreCatalogMovies: pageMovies.length < allMovies.length,
  };

  return Object.assign({}, state, update);
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_CURRENT_MOVIE:
      return _setCurrentMovie(state, action.payload);
    case ActionType.SET_CATALOG_GENRE:
      return _setCatalogGenre(state, action.payload);
    case ActionType.GET_MORE_CATALOG_MOVIES:
      return _getMoreCatalogMovies(state);
  }
  return state;
}
