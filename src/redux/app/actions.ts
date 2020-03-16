import {createAction} from 'redux-act';
import {TMovie} from '../../components/types';

export const setAppLoadingStart = createAction(`SET_APP_LOADING_START`);
export const setAppMovies: (movies: TMovie[]) => void = createAction(`SET_APP_MOVIES`);
export const setAppLoadingError = createAction(`SET_APP_LOADING_COMPLETE`);
