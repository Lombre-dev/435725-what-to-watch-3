import {createStore} from 'redux';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../../consts';
import {getGenresFromMovies} from '../../utils/movie-utils';
import {getCatalogMoreMovies, setCatalogGenre, setCatalogLoadingComplete, setCatalogLoadingError, setCatalogLoadingStart, setCatalogMovies, setCatalogPromoMovie} from './actions';
import {reducer} from './reducer';
import {LoadingDataStatus} from '../../types';

const ALL_MOVIES = [
  {
    id: 0,
    title: `movie 1`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    preview: `./samples/sintel_trailer-480p.mp4`,
    src: `./samples/sintel_trailer-480p.mp4`,
    description: `description`,
    story: `story`,
    director: `Wes Andreson`,
    duration: 99,
    actors: [
      `Some Actor 1`,
      `Some Actor 2`,
    ],
  },
  {
    id: 1,
    title: `movie 2`,
    genres: [`Comedy`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    preview: `./samples/sintel_trailer-480p.mp4`,
    src: `./samples/sintel_trailer-480p.mp4`,
    description: `description`,
    story: `story`,
    director: `Wes Andreson`,
    duration: 99,
    actors: [
      `Some Actor 1`,
      `Some Actor 2`,
    ],
  },
  {
    id: 2,
    title: `movie 3`,
    genres: [`Kids & Family`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    preview: `./samples/sintel_trailer-480p.mp4`,
    src: `./samples/sintel_trailer-480p.mp4`,
    description: `description`,
    story: `story`,
    director: `Wes Andreson`,
    duration: 99,
    actors: [
      `Some Actor 1`,
      `Some Actor 2`,
    ],
  },
];
const PROMO_MOVIE = ALL_MOVIES[0];
const GENRE = ALL_GENRE;
const GENRES = [ALL_GENRE].concat(getGenresFromMovies(ALL_MOVIES));
const MOVIES = ALL_MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
const HAS_MORE_MOVIES = ALL_MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT;

const INITIAL_STATE = {
  allMovies: ALL_MOVIES,

  promoMovie: PROMO_MOVIE,
  genres: GENRES,
  genre: GENRE,
  movies: MOVIES,
  hasMoreMovies: HAS_MORE_MOVIES,
};

describe(`CatalogReducer`, () => {


  it(`should be switch value of movies`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      movies: ALL_MOVIES,
    });

    store.dispatch(setCatalogMovies(ALL_MOVIES));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of genre`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      genre: `Comedy`,
      movies: [ALL_MOVIES[1]],
      hasMoreMovies: false,
    });

    store.dispatch(setCatalogGenre(`Comedy`));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of promoMovie`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      promoMovie: ALL_MOVIES[0],
    });

    store.dispatch(setCatalogPromoMovie(ALL_MOVIES[0]));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be new movies added to movie catalog`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      movies: ALL_MOVIES.slice(0, 2 * CATALOG_MOVIES_PER_PAGE_LIMIT),
    });

    store.dispatch(getCatalogMoreMovies());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to loading`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.LOADING,
    });

    store.dispatch(setCatalogLoadingStart());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to ready`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.READY,
    });

    store.dispatch(setCatalogLoadingComplete());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to error`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.ERROR,
    });

    store.dispatch(setCatalogLoadingError());

    expect(store.getState()).toEqual(sample);
  });
});
