import {createReducer} from 'redux-act';
import {LoadingDataStatus} from '../../consts';
import {formatMovies} from '../app/mappers';
import {setAppLoadingError, setAppLoadingStart, setAppMovies} from './actions';
import {initialState} from './initialState';

export const reducer = createReducer({
  [setAppLoadingStart]: _setLoadingStart,
  [setAppMovies]: _setMovies,
  [setAppLoadingError]: _setLoadingError,
}, initialState);

function _setLoadingStart(state) {
  return Object.assign({}, state, {
    status: LoadingDataStatus.LOADING,
    movies: [],
  });
}

function _setMovies(state, movies) {
  return Object.assign({}, state, {
    status: LoadingDataStatus.READY,
    movies: formatMovies(movies),
  });
}

function _setLoadingError(state) {
  return Object.assign({}, state, {
    status: LoadingDataStatus.ERROR,
  });
}
