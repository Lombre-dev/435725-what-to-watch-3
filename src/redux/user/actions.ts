import {AnyAction} from 'redux';
import {createAction} from 'redux-act';
import {TMovie, TUser} from '../../components/types';

export const clearUserData = createAction(`CLEAR_USER_DATA`);
export const setUserData: (user: TUser) => AnyAction = createAction(`SET_USER_DATA`);
export const setUserAuthRequired: (value: boolean) => AnyAction = createAction(`SET_USER_AUTH_REQUIRED`);
export const setUserFavoriteMovies: (movies: TMovie[]) => AnyAction = createAction(`GET_USER_FAVORITE_MOVIES`);
