import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';

const MOVIE = {
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
};
const IS_PREVIEW_ACTIVE = false;
const HANDLE_EVENT = () => {};

describe(`<SmallMovieCard />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<SmallMovieCard
        movie={MOVIE}
        isPreviewActive={IS_PREVIEW_ACTIVE}
        onHover={HANDLE_EVENT}
        onLeave={HANDLE_EVENT}
        onClick={HANDLE_EVENT}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
