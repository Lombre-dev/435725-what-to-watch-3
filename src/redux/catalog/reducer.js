import {createReducer} from 'redux-act';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../../components/consts';
import {getMoviesByGenre} from '../../utils/movie-utils';
import {catalogInitalState} from '../initialState';
import {getMoreCatalogMovies, setCatalogGenre} from './actions';

// TODO: combineReducer(catalogReducer)
// Чистый код Роберт Мартин

export const reducer = createReducer({
  [setCatalogGenre]: _setCatalogGenre,
  [getMoreCatalogMovies]: _getMoreCatalogMovies,
}, catalogInitalState);

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
