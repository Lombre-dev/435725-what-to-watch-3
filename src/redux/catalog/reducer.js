import {createReducer} from 'redux-act';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../../consts';
import {getGenresFromMovies, getMoviesByGenre} from '../../utils/movie-utils';
import {getMoreCatalogMovies, setCatalogGenre, setCatalogMovies, setPromoMovie} from './actions';
import {initialState} from './initialState';
import {formatMovie} from './mappers';

export const reducer = createReducer({
  [setCatalogMovies]: _setCatalogMovies,
  [setPromoMovie]: _setPromoMovie,
  [setCatalogGenre]: _setCatalogGenre,
  [getMoreCatalogMovies]: _getMoreCatalogMovies,
}, initialState);

function _setCatalogMovies(state, movies) {

  const formattedMovies = movies.map((movie) => formatMovie(movie));

  return Object.assign({}, state, {
    allMovies: formattedMovies,
    genres: [ALL_GENRE].concat(getGenresFromMovies(formattedMovies)),
    movies: formattedMovies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT),
    hasMoreMovies: formattedMovies.length > CATALOG_MOVIES_PER_PAGE_LIMIT,
  });
}

function _setPromoMovie(state, movie) {
  return Object.assign({}, state, {promoMovie: formatMovie(movie)});
}

function _setCatalogGenre(state, genre) {

  const {allMovies} = state;
  const genreMovies = genre === ALL_GENRE ? allMovies : getMoviesByGenre(allMovies, genre);
  const pageMovies = genreMovies.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    currentGenre: genre,
    movies: pageMovies,
    hasMoreMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}

function _getMoreCatalogMovies(state) {

  const {currentGenre, movies, allMovies} = state;
  const genreMovies = currentGenre === ALL_GENRE ? allMovies : getMoviesByGenre(allMovies, currentGenre);
  const pageMovies = genreMovies.slice(0, movies.length + CATALOG_MOVIES_PER_PAGE_LIMIT);
  const update = {
    movies: pageMovies,
    hasMoreMovies: pageMovies.length < genreMovies.length,
  };

  return Object.assign({}, state, update);
}
