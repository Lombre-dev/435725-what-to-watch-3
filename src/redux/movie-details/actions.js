import {createAction} from 'redux-act';

export const setDetailedMovieLoadingStart = createAction(`SET_DETAILED_MOVIE_LOADING_START`);
export const setDetailedMovie = createAction(`SET_DETAILED_MOVIE`);
export const setMoviesLikeDetailedMovie = createAction(`SET_MOVIES_LIKE_DETAILED_MOVIE`);
export const setDetailedMovieLoadingComplete = createAction(`SET_DETAILED_MOVIE_LOADING_COMPLETE`);
