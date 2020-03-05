import {createReducer} from 'redux-act';
import {releasePlayerMovie, setPlayerMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setPlayerMovie]: _setPlayerMovie,
  [releasePlayerMovie]: _releasePlayerMovie,
}, initialState);

function _setPlayerMovie(state, id) {

  const intId = parseInt(id, 10);
  const {allMovies} = state;

  return Object.assign({}, state, {movie: allMovies.find((value) => value.id === intId)});
}

function _releasePlayerMovie(state) {
  return Object.assign({}, state, {movie: undefined});
}
