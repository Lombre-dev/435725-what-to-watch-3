import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import {BigMovieCard} from './big-movie-card';

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
const IS_CAN_REVIEWED = false;
const HANDLE_EVENT = () => {};

describe(`<BigMovieCard />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <BigMovieCard
          movie={MOVIE}
          isCanReviewed={IS_CAN_REVIEWED}
          updateFavoriteStatus={HANDLE_EVENT}
        />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
