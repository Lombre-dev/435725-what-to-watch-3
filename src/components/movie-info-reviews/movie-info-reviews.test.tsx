import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {MovieInfoReviews} from './movie-info-reviews';

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
const HANDLE_EVENT = () => {
  // eslint-disable-next-line no-console
  console.log(`handleTestEvent`);
};

describe(`<MovieInfoReviews />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<MovieInfoReviews
        movie={MOVIE}
        getReviews={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
