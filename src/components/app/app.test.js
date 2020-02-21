import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const MOVIES = [
  {
    title: `The Grand Budapest Hotel`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/the-grand-budapest-hotel-poster.jpg`,
    frames: [`img/the-grand-budapest-hotel-poster.jpg`],
    preview: ``,
    ratingScore: 8.9,
    ratingReviewsCount: 240,
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
    title: `Bohemian Rhapsody`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/bohemian-rhapsody.jpg`,
    frames: [`img/bohemian-rhapsody.jpg`],
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
  },
  {
    title: `Macbeth`,
    genres: [`Drama`],
    year: 2014,
    preview: ``,
    poster: `img/macbeth.jpg`,
    frames: [`img/macbeth.jpg`],
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
const CURRENT_MOVIE = MOVIES[0];

describe(`<App />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<App
        currentMovie={CURRENT_MOVIE}
        movies={MOVIES}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
