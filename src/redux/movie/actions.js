import {createAction} from 'redux-act';

export const setDetailedMovieLoadingStart = createAction(`SET_DETAILED_MOVIE_LOADING_START`);
export const setDetailedMovieLoadingComplete = createAction(`SET_DETAILED_MOVIE_LOADING_COMPLETE`);
export const setDetailedMovieLoadingError = createAction(`SET_DETAILED_MOVIE_LOADING_ERROR`);

export const setDetailedMovieValue = createAction(`SET_DETAILED_MOVIE_VALUE`);
export const setDetailedMovieRelatedMovies = createAction(`SET_DETAILED_MOVIE_RELATED_MOVIES`);

export const addDetailedMovieReview = createAction(`ADD_DETAILED_MOVIE_REVIEW`);
export const setDetailedMovieReviews = createAction(`SET_DETAILED_MOVIE_REVIEWS`);

export const setDetailedMovieRedirectTo = createAction(`SET_DETAILED_MOVIE_REDIRECT_TO`);
