import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {Operations} from './operations';

const MOVIES = [{
  id: 0,
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `/img/the-grand-budapest-hotel-poster.jpg`,
  frames: [`/img/the-grand-budapest-hotel-poster.jpg`],
  ratingScore: 8.9,
  ratingReviewsCount: 240,
  preview: `/samples/sintel_trailer-480p.mp4`,
  src: `/samples/sintel_trailer-480p.mp4`,
  description: `Description`,
  story: `Story`,
  director: `Wes Andreson`,
  duration: 99,
  actors: [
    `Bill Murray`,
    `Edward Norton`,
    `Jude Law`,
    `Willem Dafoe`,
    `Some Actor 1`,
    `Some Actor 2`,
  ],
}];
const GET_STATE = () => {
  return {
    app: {
      movies: MOVIES,
    }
  };
};

describe(`MovieDetailsOperations`, () => {
  it(`should be a correct call init`, () => {

    const api = createAPI();
    const dispatch = jest.fn(() => {});

    Operations.init(0)(dispatch, () => {
      return {
        app: {
          movies: MOVIES,
        }
      };
    }, api);
    expect(dispatch).toHaveBeenCalledTimes(4);
  });

  it(`should be a correct call getReviews`, () => {

    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);

    apiMock
      .onGet(`/comments/0`)
      .reply(200, []);

    Operations.getReviews(0)(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
      });
  });

  it(`should be a correct call addReview`, () => {

    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const rating = 5;
    const comment = `Test`;

    apiMock
      .onPost(`/comments/0`, {rating, comment})
      .reply(200, []);

    Operations.getReviews(0, rating, comment)(dispatch, GET_STATE, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);
    });
  });
});
