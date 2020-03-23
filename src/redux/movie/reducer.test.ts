import {createStore} from 'redux';
import {AppPages, LoadingDataStatus} from '../../types';
import {setDetailedMovieLoadingComplete, setDetailedMovieLoadingError, setDetailedMovieLoadingStart, setDetailedMovieRedirectTo, setDetailedMovieRelatedMovies, setDetailedMovieReviews, setDetailedMovieValue} from './actions';
import {reducer} from './reducer';

const MOVIES = [
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
const REVEIWS = [{
  id: 1,
  author: `PropTypes.string.isRequired`,
  score: 5.5,
  text: `PropTypes.string.isRequired`,
  date: 456456456,
}];
const REDIRECT_TO = AppPages.MAIN;

const INITIAL_STATE = {
  status: undefined,
  movie: undefined,
  relatedMovies: [],
  reviews: [],
  redirectTo: undefined,
};

describe(`MovieDetailsReducer`, () => {

  it(`should be switch value of movie`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      movie: MOVIES[0],
    });

    store.dispatch(setDetailedMovieValue(MOVIES[0]));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of relatedMovies`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      relatedMovies: [MOVIES[0]],
    });

    store.dispatch(setDetailedMovieRelatedMovies([MOVIES[0]]));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of reviews`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      reviews: REVEIWS,
    });

    store.dispatch(setDetailedMovieReviews(REVEIWS));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of redirectTo`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      redirectTo: REDIRECT_TO,
    });

    store.dispatch(setDetailedMovieRedirectTo(REDIRECT_TO));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to loading`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.LOADING,
    });

    store.dispatch(setDetailedMovieLoadingStart());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to ready`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.READY,
    });

    store.dispatch(setDetailedMovieLoadingComplete());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to error`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.ERROR,
    });

    store.dispatch(setDetailedMovieLoadingError());

    expect(store.getState()).toEqual(sample);
  });
});
