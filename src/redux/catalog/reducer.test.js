import {createStore} from 'redux';
import {ALL_GENRE, CATALOG_MOVIES_PER_PAGE_LIMIT} from '../../consts';
import {getGenresFromMovies} from '../../utils/movie-utils';
import {getMoreCatalogMovies, setCatalogGenre} from './actions';
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
const PROMO_MOVIE = MOVIES[0];
const CATALOG_GENRE = ALL_GENRE;
const CATALOG_GENRES = [ALL_GENRE].concat(getGenresFromMovies(MOVIES));
const CATALOG_MOVIES = MOVIES.slice(0, CATALOG_MOVIES_PER_PAGE_LIMIT);
const HAS_MORE_CATALOG_MOVIES = MOVIES.length > CATALOG_MOVIES_PER_PAGE_LIMIT;

const INITIAL_STATE = {
  allMovies: CATALOG_MOVIES,

  promoMovie: PROMO_MOVIE,
  genres: CATALOG_GENRES,
  currentGenre: CATALOG_GENRE,
  movies: CATALOG_MOVIES,
  hasMoreMovies: HAS_MORE_CATALOG_MOVIES,
};

describe(`CatalogReducer`, () => {

  it(`should be switch value of currentGenre`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      currentGenre: `Comedy`,
      movies: [MOVIES[1]],
      hasMoreMovies: false,
    });

    store.dispatch(setCatalogGenre(`Comedy`));

    expect(store.getState()).toEqual(sample);
  });

  it(`should be new movies added to movie catalog`, () => {

    const store = createStore(reducer, Object.assign({}, INITIAL_STATE));
    const sample = Object.assign({}, INITIAL_STATE, {
      movies: MOVIES.slice(0, 2 * CATALOG_MOVIES_PER_PAGE_LIMIT),
    });

    store.dispatch(getMoreCatalogMovies());

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
