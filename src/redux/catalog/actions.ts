import {createAction} from 'redux-act';
import {TMovie} from '../../components/types';

export const setCatalogLoadingStart = createAction(`SET_CATALOG_LOADING_START`);
export const setCatalogLoadingComplete = createAction(`SET_CATALOG_LOADING_COMPLETE`);
export const setCatalogLoadingError = createAction(`SET_CATALOG_LOADING_ERROR`);

export const setCatalogMovies: (movies: TMovie[]) => void = createAction(`SET_CATALOG_MOVIES`);
export const setCatalogGenre: (genre: string) => void = createAction(`SET_CATALOG_GENRE`);
export const setCatalogPromoMovie: (movie: TMovie) => void = createAction(`SET_CATALOG_PROMO_MOVIE`);
export const getCatalogMoreMovies = createAction(`GET_CATALOG_MORE_MOVIES`);
