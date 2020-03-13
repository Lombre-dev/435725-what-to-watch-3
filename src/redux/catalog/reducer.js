import {createReducer} from 'redux-act';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../../consts';
import {getGenresFromMovies, getMoviesByGenre} from '../../utils/movie-utils';
import {getCatalogMoreMovies, setCatalogGenre, setCatalogMovies, setCatalogPromoMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setCatalogMovies]: _setMovies,
  [setCatalogPromoMovie]: _setPromoMovie,
  [setCatalogGenre]: _setGenre,
  [getCatalogMoreMovies]: _getMoreMovies,
}, initialState);

function _setMovies(state, movies) {
  return Object.assign({}, state, {
    allMovies: movies,
    genres: [ALL_GENRE].concat(getGenresFromMovies(movies)),
    movies: movies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
    hasMoreMovies: movies.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
  });
}

function _setPromoMovie(state, movie) {
  return Object.assign({}, state, {promoMovie: movie});
}

function _setGenre(state, genre) {

  const {allMovies} = state;
  const genreMovies = genre === ALL_GENRE ? allMovies : getMoviesByGenre(allMovies, genre);
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
  const genreMovies = genre === ALL_GENRE ? allMovies : getMoviesByGenre(allMovies, genre);
  const pageMovies = genreMovies.slice(0, movies.length + CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    movies: pageMovies,
    hasMoreMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}
