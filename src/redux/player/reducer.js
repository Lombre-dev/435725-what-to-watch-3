import {createReducer} from 'redux-act';
import {releasePlayerMovie, setPlayerMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setPlayerMovie]: _setPlayerMovie,
  [releasePlayerMovie]: _releasePlayerMovie,
}, initialState);

function _setPlayerMovie(state, movie) {
  return Object.assign({}, state, {movie});
}

function _releasePlayerMovie(state) {
  return Object.assign({}, state, {movie: undefined});
}
