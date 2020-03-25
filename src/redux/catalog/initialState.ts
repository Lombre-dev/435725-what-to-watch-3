import {Genres} from '../../consts';

export const initialState = {
  status: undefined,

  allMovies: [],

  promoMovie: undefined,
  genres: [Genres.ALL],
  genre: Genres.ALL,
  movies: [],
  hasMoreMovies: false,
};
