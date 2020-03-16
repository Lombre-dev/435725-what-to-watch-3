import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {Operations} from './operations';

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
const GET_STATE = () => {
  return {
    app: {
      movies: MOVIES,
    },
    catalog: {
      promoMovie: undefined,
    },
    movie: {
      movie: undefined,
    },
  };
};

describe(`UserOperations`, () => {
  it(`should be a correct call checkAuthorization`, () => {

    const api = createAPI();
    const dispatch = jest.fn(() => {});
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/login`)
      .reply(200, []);

    Operations.checkAuthorization()(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`should be a correct call login`, () => {

    const api = createAPI();
    const dispatch = jest.fn(() => {});
    const apiMock = new MockAdapter(api);
    const email = `test@test.com`;
    const password = ``;

    apiMock
      .onPost(`login`, {email, password})
      .reply(200, []);

    Operations.login({email, password})(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`should be a correct call getFavoriteMovies`, () => {

    const api = createAPI();
    const dispatch = jest.fn(() => {});
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/favorite`)
      .reply(200, []);

    Operations.getFavoriteMovies()(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });

  it(`should be a correct call updateFavorite`, () => {

    const api = createAPI();
    const dispatch = jest.fn(() => {});
    const apiMock = new MockAdapter(api);

    apiMock
      .onPost(`/favorite/1`)
      .reply(200, []);

    Operations.updateFavoriteMovie(0, true)(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });
  });
});
