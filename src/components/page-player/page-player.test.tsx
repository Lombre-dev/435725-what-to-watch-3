import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {PlayerState} from '../../types';
import {PagePlayer} from './page-player';

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
const MOVIE_STATE = PlayerState.INITED;

describe(`<PagePlayer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <PagePlayer
          movie={MOVIE}
          movieState={MOVIE_STATE}
        />
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
