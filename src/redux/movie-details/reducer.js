import {createReducer} from 'redux-act';
import {getMoviesByGenre} from '../../utils/movie-utils';
import {setCurrentMovie} from './actions';
import {initialState} from './initialState';

// TODO: combineReducer(catalogReducer)
// Чистый код Роберт Мартин

export const reducer = createReducer({
  [setCurrentMovie]: _setCurrentMovie,
}, initialState);

function _setCurrentMovie(state, movie) {

  const {allMovies} = state;
  const update = {
    currentMovie: movie,
    moviesLikeCurrent: movie ? getMoviesByGenre(allMovies, movie.genres[0], [movie]) : [],
  };

  return Object.assign({}, state, update);
}
