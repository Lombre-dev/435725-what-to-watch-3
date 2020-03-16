import {TMovie} from '../../components/types';
import {LoadingDataStatus} from '../../consts';

export const getCatalogStatus: (state) => LoadingDataStatus = (state) => state.catalog.status;
export const getCatalogPromoMovie: (state) => TMovie = (state) => state.catalog.promoMovie;
export const getCatalogGenres: (state) => string[] = (state) => state.catalog.genres;
export const getCatalogGenre: (state) => string = (state) => state.catalog.genre;
export const getCatalogMovies: (state) => TMovie[] = (state) => state.catalog.movies;
export const getCatalogHasMoreMovies: (state) => boolean = (state) => state.catalog.hasMoreMovies;
