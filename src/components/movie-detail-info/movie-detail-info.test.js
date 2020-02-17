import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetailInfo from './movie-detail-info';

const MOVIE = {
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  frames: [`img/the-grand-budapest-hotel-poster.jpg`],
  overview: {
    rating: {
      score: 8.9,
      reviewsCount: 240,
    },
    description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
    story: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
    director: `Wes Andreson`,
    actors: [
      `Bill Murray`,
      `Edward Norton`,
      `Jude Law`,
      `Willem Dafoe`,
      `Some Actor 1`,
      `Some Actor 2`,
    ],
  },
};

describe(`<MovieDetailInfo />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<MovieDetailInfo
        movie={MOVIE}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
