import {TMovie, LoadingDataStatus} from '../../types';

export const getAppStatus: (state) => LoadingDataStatus = (state) => state.app.status;
export const getAppMovies: (state) => TMovie[] = (state) => state.app.movies;
