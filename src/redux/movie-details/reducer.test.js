import {createStore} from 'redux';
import {setCurrentMovie} from './actions';
import {reducer} from './reducer';

const MOVIES = [
  {
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
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text for The Grand Budapest Hotel...`,
        date: 1582590140667,
      }
    ]
  },
  {
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
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text for The Grand Budapest Hotel...`,
        date: 1582590140667,
      }
    ]
  },
  {
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
    reviews: [
      {
        author: `Some Reviewer`,
        score: 8.2,
        text: `Awesome text for The Grand Budapest Hotel...`,
        date: 1582590140667,
      }
    ]
  },
];

const INITIAL_STATE = {
  currentMovie: undefined,
  moviesLikeCurrent: [],
  allMovies: MOVIES,
};

describe(`MovieDetailsReducer`, () => {

  it(`should be switch value of currentMovie`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      currentMovie: MOVIES[0],
    });

    store.dispatch(setCurrentMovie(MOVIES[0]));

    expect(store.getState()).toEqual(sample);
  });
});

/*
describe(`ActionCreator`, () => {

  it(`calling 'setCurrentMovie' should be equal template`, () => {
    expect(ActionCreator.setCurrentMovie(MOVIES[0]))
      .toEqual({
        type: ActionType.SET_CURRENT_MOVIE,
        payload: MOVIES[0],
      });
  });

  it(`calling 'setCatalogGenre' should be equal template`, () => {
    expect(ActionCreator.setCatalogGenre(`Comedy`))
      .toEqual({
        type: ActionType.SET_CATALOG_GENRE,
        payload: `Comedy`,
      });
  });

  it(`calling 'getMoreCatalogMovies' should be equal template`, () => {
    expect(ActionCreator.getMoreCatalogMovies())
      .toEqual({
        type: ActionType.GET_MORE_CATALOG_MOVIES,
        payload: undefined,
      });
  });
});
*/
