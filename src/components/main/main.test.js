import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main';

const CURRENT_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
};
const MOVIES = [
  {
    title: `Fantastic Beasts: The Crimes of Grindelwal`,
    genres: [`Drama`],
    year: 2014,
    frames: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`],
  },
  {
    title: `Bohemian Rhapsody`,
    genres: [`Drama`],
    year: 2014,
    frames: [`img/bohemian-rhapsody.jpg`],
  },
  {
    title: `Macbeth`,
    genres: [`Drama`],
    year: 2014,
    frames: [`img/macbeth.jpg`],
  },
];
const HANDLE_CLICK = () => {};

describe(`<Main />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<Main
        currentMovie={CURRENT_MOVIE}
        movies={MOVIES}
        onMovieCardTitleClick={HANDLE_CLICK}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
