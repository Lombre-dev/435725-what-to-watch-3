import {createReducer} from 'redux-act';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../../components/consts';
import {getMoviesByGenre} from '../../utils/movie-utils';
import {getMoreCatalogMovies, setCatalogGenre, setCurrentMovie} from './actions';

// TODO: combineReducer(catalogReducer)
// Чистый код Роберт Мартин

export const reducer = createReducer({
  [setCurrentMovie]: _setCurrentMovie,
  [setCatalogGenre]: _setCatalogGenre,
  [getMoreCatalogMovies]: _getMoreCatalogMovies,
});

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
