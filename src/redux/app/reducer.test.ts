import {createStore} from 'redux';
import {LoadingDataStatus} from '../../consts';
import {setAppLoadingError, setAppLoadingStart, setAppMovies} from './actions';
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

const INITIAL_STATE = {
  status: undefined,
  movies: [],
};

describe(`AppReducer`, () => {

  it(`should be switch value of status to loading`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.LOADING,
    });

    store.dispatch(setAppLoadingStart());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of movies`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.READY,
      movies: MOVIES,
    });

    store.dispatch(setAppMovies(MOVIES));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of status to error`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      status: LoadingDataStatus.ERROR,
    });

    store.dispatch(setAppLoadingError());

    expect(store.getState()).toEqual(sample);
  });
});
