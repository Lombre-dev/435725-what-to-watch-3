import {createReducer} from 'redux-act';
import {getMoviesByGenre} from '../../utils/movie-utils';
import {movieDetailsInitialState} from '../initialState';
import {setCurrentMovie} from './actions';

// TODO: combineReducer(catalogReducer)
// Чистый код Роберт Мартин

export const reducer = createReducer({
  [setCurrentMovie]: _setCurrentMovie,
}, movieDetailsInitialState);

function _setCurrentMovie(state, movie) {

  const {allMovies} = state;
  const update = {
    currentMovie: movie,
    moviesLikeCurrent: movie ? getMoviesByGenre(allMovies, movie.genres[0], [movie]) : [],
  };

  return Object.assign({}, state, update);
}
