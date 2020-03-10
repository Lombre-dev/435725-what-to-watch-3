export const getPromoMovie = (state) => state.catalog.promoMovie;
export const getGenres = (state) => state.catalog.genres;
export const getCurrentGenre = (state) => state.catalog.currentGenre;
export const getMovies = (state) => state.catalog.movies;
export const getHasMoreMovies = (state) => state.catalog.hasMoreMovies;

export const getAllMovies = (state) => state.catalog.allMovies;
export const getFavoriteMovies = (state) => {
  return state.catalog.allMovies.filter((movie) => movie.isFavorite);
};
