import {getAllMovies} from '../catalog/selectors';
import {setPlayerMovie} from './actions';

const Operations = {
  setPlayerMovie: (movieId) => (dispatch, getState, _api) => {

    const intMovieId = parseInt(movieId, 10);
    const allMovies = getAllMovies(getState());
    const movie = allMovies.find((value) => value.id === intMovieId);

    dispatch(setPlayerMovie(movie));
  },
};

export {Operations};
