import {createReducer} from 'redux-act';
import {setPlayerMovie} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setPlayerMovie]: _setPlayerMovie,
}, initialState);

function _setPlayerMovie(state, movie) {
  return Object.assign({}, state, {movie});
}
