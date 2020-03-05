import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfoOverview from './movie-info-overview';

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
  reviews: [
    {
      author: `Some Reviewer`,
      score: 8.2,
      text: `Awesome text ...`,
      date: 1582590140667,
    }
  ]
};

describe(`<MovieInfoOverview />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<MovieInfoOverview
        movie={MOVIE}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
