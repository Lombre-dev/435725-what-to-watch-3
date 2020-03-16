import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../consts';
import AddReviewPage from './add-review-page';

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
const RATING_VALUE = 0;
const IS_SUBMIT_ENABLED = false;
const IS_FIELDS_ENABLED = false;
const HANDLE_EVENT = () => {};
const mockStore = configureStore([]);

describe(`<AddReviewPage />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      user: {
        authStatus: AuthorizationStatus.AUTH,
      },
    });

    const result = renderer
      .create(<Provider store={store}>
        <BrowserRouter>
          <AddReviewPage
            movie={MOVIE}
            ratingValue={RATING_VALUE}
            onRatingChange={HANDLE_EVENT}
            onCommentChange={HANDLE_EVENT}
            isFieldsEnabled={IS_FIELDS_ENABLED}
            isSubmitEnabled={IS_SUBMIT_ENABLED}
            onSubmit={HANDLE_EVENT}
          />
        </BrowserRouter>
      </Provider>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
