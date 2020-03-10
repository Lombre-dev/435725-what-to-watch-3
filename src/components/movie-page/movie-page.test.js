import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../consts';
import {MoviePage} from './movie-page';

const MATCH = {params: {id: 0}};
const HANDLE_EVENT = () => {};
const MOVIE = {
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
};
const MOVIES_LIKE_CURRENT = [];
const mockStore = configureStore([]);

describe(`<MoviePage />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      user: {
        authState: AuthorizationStatus.AUTH,
      },
    });

    const result = renderer
      .create(<Provider store={store}>
        <BrowserRouter>
          <MoviePage
            match={MATCH}
            movie={MOVIE}
            moviesLikeCurrent={MOVIES_LIKE_CURRENT}
            setMovie={HANDLE_EVENT}
          />
        </BrowserRouter>
      </Provider>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
