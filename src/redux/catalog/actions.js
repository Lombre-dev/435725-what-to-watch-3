import {createAction} from 'redux-act';

export const setCatalogMovies = createAction(`SET_CATALOG_MOVIES`);
export const setCatalogGenre = createAction(`SET_CATALOG_GENRE`);
export const setCatalogPromoMovie = createAction(`SET_CATALOG_PROMO_MOVIE`);
export const getCatalogMoreMovies = createAction(`GET_CATALOG_MORE_MOVIES`);
