import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from './components/consts';
import {MOVIES} from './mocks/movies';
import {ActionCreator, ActionType, reducer} from './reducer';
import {getGenresFromMovies, getMoviesByGenre} from './utils/movie-utils';

// TODO: Обсудить использование моков в reducer.test.js
const PROMO_MOVIE = MOVIES[0];
const CATALOG_GENRE = ALL_GENRE;
const CATALOG_GENRES = [ALL_GENRE].concat(getGenresFromMovies(MOVIES));
const CATALOG_PAGE = 1;
const CATALOG_MOVIES = MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
const HAS_MORE_CATALOG_MOVIES = MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT;

const INITIAL_STATE = {
  // app >>>
  currentMovie: undefined,
  // app <<<
  // main-page >>>
  promoMovie: PROMO_MOVIE,

  catalogGenres: CATALOG_GENRES,
  catalogGenre: CATALOG_GENRE,
  catalogPage: CATALOG_PAGE,
  catalogMovies: CATALOG_MOVIES,
  hasMoreCatalogMovies: HAS_MORE_CATALOG_MOVIES,
  // main-page <<<
};

describe(`Reducer`, () => {

  /* TODO: обсудить этот тест
  it(`should be equal initial state`, () => {
    expect(reducer(void 0, {}))
      .toEqual(INITIAL_STATE);
  });
  */

  it(`should be switch value of catalogGenre`, () => {

    const sample = Object.assign({}, {
      currentMovie: undefined,
      catalogGenre: `Comedy`,
      promoMovie: MOVIES[0],
      catalogGenres: CATALOG_GENRES,
      catalogPage: CATALOG_PAGE,
      catalogMovies: getMoviesByGenre(MOVIES, `Comedy`),
      hasMoreCatalogMovies: false,
    });

    expect(reducer(void 0, {
      type: ActionType.SET_CATALOG_GENRE,
      payload: `Comedy`,
    }))
      .toEqual(sample);
  });

  it(`should be switch value of currentMovie`, () => {

    const sample = Object.assign({}, INITIAL_STATE, {currentMovie: MOVIES[0]});

    expect(reducer(void 0, {
      type: ActionType.SET_CURRENT_MOVIE,
      payload: MOVIES[0],
    }))
      .toEqual(sample);
  });

  it(`should be increased catalog page, new movies added to movie catalog`, () => {

    const sample = Object.assign({}, INITIAL_STATE, {
      catalogPage: 2,
      catalogMovies: MOVIES.slice(0, 2 * CATALOG_MOVIES_PER_PAGE_LIMIT),
    });

    expect(reducer(void 0, {
      type: ActionType.GET_MORE_CATALOG_MOVIES,
      payload: undefined,
    }))
      .toEqual(sample);
  });
});

describe(`ActionCreator`, () => {

  it(`calling 'setCurrentMovie' should be equal template`, () => {
    expect(ActionCreator.setCurrentMovie(MOVIES[0]))
      .toEqual({
        type: ActionType.SET_CURRENT_MOVIE,
        payload: MOVIES[0],
      });
  });

  it(`calling 'setCatalogGenre' should be equal template`, () => {
    expect(ActionCreator.setCatalogGenre(`Comedy`))
      .toEqual({
        type: ActionType.SET_CATALOG_GENRE,
        payload: `Comedy`,
      });
  });

  it(`calling 'getMoreCatalogMovies' should be equal template`, () => {
    expect(ActionCreator.getMoreCatalogMovies())
      .toEqual({
        type: ActionType.GET_MORE_CATALOG_MOVIES,
        payload: undefined,
      });
  });
});
