import {TMovie, TReview} from '../../components/types';
import {LoadingDataStatus} from '../../consts';

export const getDetailedMovie: (state) => TMovie = (state) => state.movie.movie;
export const getDetailedMovieStatus: (state) => LoadingDataStatus = (state) => state.movie.status;
export const getDetailedMovieRelatedMovies: (state) => TMovie[] = (state) => state.movie.relatedMovies;
export const getDetailedMovieReviews: (state) => TReview[] = (state) => state.movie.reviews;
export const getDetailedMovieRedirectTo: (state) => string = (state) => state.movie.redirectTo;
