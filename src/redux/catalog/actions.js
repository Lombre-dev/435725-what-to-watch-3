import {createAction} from 'redux-act';

export const setCatalogMovies = createAction(`SET_CATALOG_MOVIES`);
export const setCatalogGenre = createAction(`SET_CATALOG_GENRE`);
export const setPromoMovie = createAction(`SET_PROMO_MOVIE`);
export const getMoreCatalogMovies = createAction(`GET_MORE_CATALOG_MOVIES`);
