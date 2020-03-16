import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import SmallMovieCardList from './small-movie-card-list';

const GENRES = [`Drama`, `Comedy`, `Kids & Family`];
const CURRENT_GENRE = GENRES[0];
const MOVIES = [
  {
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
  },
  {
    id: 1,
    title: `Bohemian Rhapsody`,
    genres: [`Comedy`],
    year: 2014,
    poster: `/img/bohemian-rhapsody.jpg`,
    frames: [`/img/bohemian-rhapsody.jpg`],
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
    genres: [`Kids & Family`],
    year: 2014,
    preview: ``,
    src: ``,
    poster: `/img/macbeth.jpg`,
    frames: [`/img/macbeth.jpg`],
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
const ACTIVE_ITEM_ID = -1;
const HAS_MORE_MOVIES = true;
const HANDLE_EVENT = () => {};

const mockStore = configureStore([]);

describe(`<SmallMovieCardList />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      currentMovie: null,
      promoMovie: MOVIES[0],
      catalogGenres: GENRES,
      catalogGenre: CURRENT_GENRE,
      catalogMovies: MOVIES,
      hasMoreCatalogMovies: HAS_MORE_MOVIES,
    });

    const result = renderer
      .create(<Provider store={store}>
        <BrowserRouter>
          <SmallMovieCardList
            movies={MOVIES}
            activeItemId={ACTIVE_ITEM_ID}
            onItemHover={HANDLE_EVENT}
            onItemLeave={HANDLE_EVENT}
          />
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
