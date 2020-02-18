import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';

const MOVIE = {
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  frames: [`img/the-grand-budapest-hotel-poster.jpg`],
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
const HANDLE_CLICK = () => {};

describe(`<SmallMovieCard />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<SmallMovieCard
        movie={MOVIE}
        onHover={HANDLE_CLICK}
        onClick={HANDLE_CLICK}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
