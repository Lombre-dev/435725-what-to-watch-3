import {AnyAction} from 'redux';
import {createAction} from 'redux-act';
import {TMovie} from '../../types';

export const setCatalogLoadingStart = createAction(`SET_CATALOG_LOADING_START`);
export const setCatalogLoadingComplete = createAction(`SET_CATALOG_LOADING_COMPLETE`);
export const setCatalogLoadingError = createAction(`SET_CATALOG_LOADING_ERROR`);

export const setCatalogMovies: (movies: TMovie[]) => AnyAction = createAction(`SET_CATALOG_MOVIES`);
export const setCatalogGenre: (genre: string) => AnyAction = createAction(`SET_CATALOG_GENRE`);
export const setCatalogPromoMovie: (movie: TMovie) => AnyAction = createAction(`SET_CATALOG_PROMO_MOVIE`);
export const getCatalogMoreMovies = createAction(`GET_CATALOG_MORE_MOVIES`);
