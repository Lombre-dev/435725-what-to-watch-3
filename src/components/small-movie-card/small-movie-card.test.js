import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCard from './small-movie-card';

const MOVIE = {
  title: `Fantastic Beasts: The Crimes of Grindelwal`,
  genres: [`Drama`],
  year: 2014,
  frames: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`],
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
