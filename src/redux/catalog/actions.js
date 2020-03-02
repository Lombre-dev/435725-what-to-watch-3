import {createAction} from 'redux-act';

export const setCurrentMovie = createAction(`SET_CURRENT_MOVIE`);
export const setCatalogGenre = createAction(`SET_CATALOG_GENRE`);
export const getMoreCatalogMovies = createAction(`GET_MORE_CATALOG_MOVIES`);
