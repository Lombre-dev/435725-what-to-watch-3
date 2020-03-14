import {createAction} from 'redux-act';

export const clearUserData = createAction(`CLEAR_USER_DATA`);
export const setUserData = createAction(`SET_USER_DATA`);
export const setUserAuthError = createAction(`SET_USER_AUTH_ERROR`);
export const setUserAuthRequired = createAction(`SET_USER_AUTH_REQUIRED`);
export const setUserFavoriteMovies = createAction(`GET_USER_FAVORITE_MOVIES`);
