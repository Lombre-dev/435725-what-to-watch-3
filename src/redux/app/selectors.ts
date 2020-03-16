import {TMovie} from '../../components/types';
import {LoadingDataStatus} from '../../consts';

export const getAppStatus: (state) => LoadingDataStatus = (state) => state.app.status;
export const getAppMovies: (state) => TMovie[] = (state) => state.app.movies;
