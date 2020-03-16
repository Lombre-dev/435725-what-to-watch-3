import {createStore} from 'redux';
import {AuthorizationStatus} from '../../consts';
import {clearUserData, setUserAuthRequired, setUserData, setUserFavoriteMovies} from './actions';
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
  id: -1,
  name: undefined,
  email: undefined,
  avatar: undefined,
  authRequired: false,
  authError: undefined,
  authStatus: AuthorizationStatus.NO_AUTH,
  favoriteMovies: [],
};
const ID = 0;
const NAME = `Test`;
const EMAIL = `test@test.com`;
const AVATAR = `test.jpg`;

describe(`MovieDetailsReducer`, () => {

  it(`should be switch clear userData`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE);

    store.dispatch(clearUserData());

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch set userData`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      id: ID,
      name: NAME,
      email: EMAIL,
      avatar: AVATAR,
    });

    store.dispatch(setUserData({id: ID, name: NAME, email: EMAIL, avatar: AVATAR}));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of authRequired`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      authRequired: true,
    });

    store.dispatch(setUserAuthRequired(true));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be switch value of favoriteMovies`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      favoriteMovies: MOVIES,
    });

    store.dispatch(setUserFavoriteMovies(MOVIES));

    expect(store.getState()).toEqual(sample);
  });
});
