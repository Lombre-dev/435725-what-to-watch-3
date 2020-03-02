import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import MovieCatalog from './movie-catalog';


const GENRES = [`Drama`, `Comedy`, `Kids & Family`];
const CURRENT_GENRE = GENRES[0];
const MOVIES = [
  {
    title: `The Grand Budapest Hotel`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    ratingScore: 8.9,
    ratingReviewsCount: 240,
    preview: `./samples/sintel_trailer-480p.mp4`,
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
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text ...`,
        date: 1582590140667,
      }
    ]
  },
  {
    title: `Bohemian Rhapsody`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/bohemian-rhapsody.jpg`,
    frames: [`img/bohemian-rhapsody.jpg`],
    duration: 120,
    preview: ``,
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
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text...`,
        date: 1582590140667,
      }
    ]
  },
  {
    title: `Macbeth`,
    genres: [`Drama`],
    year: 2014,
    preview: ``,
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
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text...`,
        date: 1582590140667,
      }
    ]
  },
];
const HAS_MORE_MOVIES = true;
const HANDLE_EVENT = () => {};

const mockStore = configureStore([]);

describe(`<MovieCatalog />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      movieDetails: {
        currentMovie: undefined,
        moviesLikeCurrent: [],
      },
      catalog: {
        promoMovie: MOVIES[0],
        currentGenre: CURRENT_GENRE,
        genres: GENRES,
        movies: MOVIES,
        hasMoreMovies: HAS_MORE_MOVIES,
      }
    });

    const result = renderer
      .create(<Provider store={store}>
        <MovieCatalog
          onMovieListItemClick={HANDLE_EVENT}
          onShowMore={HANDLE_EVENT}
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
