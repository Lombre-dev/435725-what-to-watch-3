import {AnyAction} from 'redux';
import {createAction} from 'redux-act';
import {TMovie, TReview} from '../../components/types';

export const setDetailedMovieLoadingStart = createAction(`SET_DETAILED_MOVIE_LOADING_START`);
export const setDetailedMovieLoadingComplete = createAction(`SET_DETAILED_MOVIE_LOADING_COMPLETE`);
export const setDetailedMovieLoadingError = createAction(`SET_DETAILED_MOVIE_LOADING_ERROR`);

export const setDetailedMovieValue: (movie: TMovie) => AnyAction = createAction(`SET_DETAILED_MOVIE_VALUE`);
export const setDetailedMovieRelatedMovies: (movies: TMovie[]) => AnyAction = createAction(`SET_DETAILED_MOVIE_RELATED_MOVIES`);

export const addDetailedMovieReview = createAction(`ADD_DETAILED_MOVIE_REVIEW`);
export const setDetailedMovieReviews: (reviews: TReview[]) => AnyAction = createAction(`SET_DETAILED_MOVIE_REVIEWS`);

export const setDetailedMovieRedirectTo: (link: string | undefined) => AnyAction = createAction(`SET_DETAILED_MOVIE_REDIRECT_TO`);
