import {createReducer} from 'redux-act';
import {TMovie, LoadingDataStatus} from '../../types';
import {Genres, CATALOG_MOVIES_PER_PAGE_LIMIT, GENRES_CATALOG_LIMIT} from '../../consts';
import {getGenresFromMovies, getMoviesByGenre} from '../../utils/movie-utils';
import {getCatalogMoreMovies, setCatalogGenre, setCatalogLoadingComplete, setCatalogLoadingError, setCatalogLoadingStart, setCatalogMovies, setCatalogPromoMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setCatalogLoadingStart.toString()]: _setLoadingStart,
  [setCatalogLoadingComplete.toString()]: _setLoadingComplete,
  [setCatalogLoadingError.toString()]: _setLoadingError,

  [setCatalogMovies.toString()]: _setMovies,
  [setCatalogPromoMovie.toString()]: _setPromoMovie,
  [setCatalogGenre.toString()]: _setGenre,
  [getCatalogMoreMovies.toString()]: _getMoreMovies,
}, initialState);

function _setMovies(state, movies: TMovie[]) {
  return Object.assign({}, state, {
    allMovies: movies,
    genres: [Genres.ALL].concat(getGenresFromMovies(movies)).slice(0, GENRES_CATALOG_LIMIT),
    movies: movies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
    hasMoreMovies: movies.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
  });
}

function _setPromoMovie(state, movie: TMovie) {
  return Object.assign({}, state, {promoMovie: movie});
}

function _setGenre(state, genre: string) {

  const {allMovies} = state;
  const genreMovies = genre === Genres.ALL ? allMovies : getMoviesByGenre(allMovies, genre);
  const pageMovies = genreMovies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    genre,
    movies: pageMovies,
    hasMoreMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}

function _getMoreMovies(state) {

  const {genre, movies, allMovies} = state;
  const genreMovies = genre === Genres.ALL ? allMovies : getMoviesByGenre(allMovies, genre);
  const pageMovies = genreMovies.slice(0, movies.length + CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    movies: pageMovies,
    hasMoreMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}

function _setLoadingStart(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.LOADING});
}

function _setLoadingComplete(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.READY});
}

function _setLoadingError(state) {
  return Object.assign({}, state, {status: LoadingDataStatus.ERROR});
}
