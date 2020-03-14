import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {AuthorizationStatus, LoadingDataStatus} from '../../consts';
import {App} from './app';

const GENRES = [`Drama`, `Comedy`, `Kids & Family`];
const CURRENT_GENRE = GENRES[0];
const MOVIES = [
  {
    id: 0,
    title: `The Grand Budapest Hotel`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    preview: `./samples/sintel_trailer-480p.mp4`,
    src: `./samples/sintel_trailer-480p.mp4`,
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    story: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
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
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/bohemian-rhapsody.jpg`,
    frames: [`img/bohemian-rhapsody.jpg`],
    duration: 120,
    preview: ``,
    src: ``,
    ratingScore: 7.5,
    ratingReviewsCount: 100,
    description: `Description`,
    story: `Story`,
    director: `Director`,
    actors: [
      `Some Actor 1`,
      `Some Actor 2`,
      `Some Actor 3`,
      `Some Actor 4`,
      `Some Actor 5`,
    ],
  },
  {
    id: 2,
    title: `Macbeth`,
    genres: [`Drama`],
    year: 2014,
    preview: ``,
    src: ``,
    poster: `img/macbeth.jpg`,
    frames: [`img/macbeth.jpg`],
    duration: 100,
    ratingScore: 6.9,
    ratingReviewsCount: 50,
    description: `Description`,
    story: `Story`,
    director: `Director`,
    actors: [
      `Some Actor 1`,
      `Some Actor 2`,
      `Some Actor 3`,
      `Some Actor 4`,
      `Some Actor 5`,
    ],
  },
];
const HAS_MORE_MOVIES = true;
const LOADING_DATA_STATUS = LoadingDataStatus.LOADING;
const HANDLE_EVENT = () => {};

const mockStore = configureStore([thunk]);

describe(`<App />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      app: {
        status: LOADING_DATA_STATUS,
      },
      movie: {
        movie: undefined,
        moviesLike: [],
      },
      catalog: {
        promoMovie: MOVIES[0],
        genre: CURRENT_GENRE,
        genres: GENRES,
        movies: MOVIES,
        hasMoreMovies: HAS_MORE_MOVIES,
      },
      user: {
        id: -1,
        name: undefined,
        email: undefined,
        avatar: undefined,
        authError: undefined,
        authStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    const result = renderer
      .create(<Provider store={store}>
        <App
          status={LOADING_DATA_STATUS}
          onMount={HANDLE_EVENT}
        />
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
