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
  reviews: [
    {
      author: `Some Reviewer`,
      score: 8.2,
      text: `Awesome text ...`,
      date: 1582590140667,
    }
  ]
}];
const GET_STATE = () => {
  return {
    app: {
      movies: MOVIES,
    }
  };
};

describe(`ReviewsOperations`, () => {
  it(`should be a correct call setReviewMovie`, () => {

    const api = createAPI();
    const dispatch = jest.fn();

    Operations.setReviewMovie(0)(dispatch, GET_STATE, api);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it(`should be a correct call getReviews`, () => {

    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);

    Operations.getReviews(0)(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });

    apiMock
      .onGet(`/comments/0`)
      .reply(200, []);
  });

  it(`should be a correct call addReview`, () => {

    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);
    const rating = 5;
    const comment = `Test`;

    Operations.getReviews(0, rating, comment)(dispatch, GET_STATE, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });

    apiMock
      .onPost(`/comments/0`, {rating, comment})
      .reply(200, []);
  });
});
