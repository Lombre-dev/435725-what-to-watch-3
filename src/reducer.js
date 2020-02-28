import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from './components/consts';
import {getMoviesByGenre} from './utils/movie-utils';

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

  const {allMovies} = state;
  const genreMovies = genre === ALL_GENRE ? allMovies : getMoviesByGenre(allMovies, genre);
  const pageMovies = genreMovies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    catalogGenre: genre,
    catalogMovies: pageMovies,
    hasMoreCatalogMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}

function _getMoreCatalogMovies(state) {

  const {catalogGenre, catalogMovies, allMovies} = state;
  const genreMovies = catalogGenre === ALL_GENRE ? allMovies : getMoviesByGenre(allMovies, catalogGenre);
  const pageMovies = genreMovies.slice(0, catalogMovies.length + CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    catalogMovies: pageMovies,
    hasMoreCatalogMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}

export function reducer(state, action) {
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
