import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {AuthorizationStatus, LoadingDataStatus} from '../../types';
import {PageMovie} from './page-movie';

const MATCH = {params: {id: `0`}};
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
};
const RELATED_MOVIES = [];
const LOADING_DATA_STATUS = LoadingDataStatus.READY;
const mockStore = configureStore([thunk]);

describe(`<PageMovie />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      user: {
        authState: AuthorizationStatus.AUTH,
      },
    });

    const result = renderer
      .create(<Provider store={store}>
        <BrowserRouter>
          <PageMovie
            match={MATCH}
            status={LOADING_DATA_STATUS}
            movie={MOVIE}
            relatedMovies={RELATED_MOVIES}
            updateMovie={HANDLE_EVENT}
            resetRedirect={HANDLE_EVENT}
          />
        </BrowserRouter>
      </Provider>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
