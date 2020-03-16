import {createAction} from 'redux-act';
import {TMovie, TUser} from '../../components/types';

export const clearUserData = createAction(`CLEAR_USER_DATA`);
export const setUserData: (user: TUser) => void = createAction(`SET_USER_DATA`);
export const setUserAuthError = createAction(`SET_USER_AUTH_ERROR`);
export const setUserAuthRequired: (value: boolean) => void = createAction(`SET_USER_AUTH_REQUIRED`);
export const setUserFavoriteMovies: (movies: TMovie[]) => void = createAction(`GET_USER_FAVORITE_MOVIES`);
