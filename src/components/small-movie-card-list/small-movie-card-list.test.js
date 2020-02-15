import React from 'react';
import renderer from 'react-test-renderer';
import SmallMovieCardList from './small-movie-card-list';

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

describe(`<SmallMovieCardList />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<SmallMovieCardList
        movies={MOVIES}
        onMovieCardTitleClickCallback={HANDLE_CLICK}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
