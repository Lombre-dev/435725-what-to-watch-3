import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCardList from './small-movie-card-list';

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
    poster: `img/macbeth.jpg`,
    frames: [`img/macbeth.jpg`],
    preview: ``,
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
const ACTIVE_ITEM_ID = 0;
const HANDLE_CALLBACK = () => {};

describe(`<SmallMovieCardList />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<SmallMovieCardList
        movies={MOVIES}
        activeItemId={ACTIVE_ITEM_ID}
        onItemHover={HANDLE_CALLBACK}
        onItemLeave={HANDLE_CALLBACK}
        onItemClick={HANDLE_CALLBACK}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
