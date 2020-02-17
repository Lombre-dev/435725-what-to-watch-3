import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

const CURRENT_MOVIE = {
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  frames: [`img/the-grand-budapest-hotel-poster.jpg`],
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

describe(`<Main />`, () => {

  it(`every movie list item should be clicked`, () => {

    const handleClick = jest.fn();

    const result = mount(<Main
      currentMovie={CURRENT_MOVIE}
      movies={MOVIES}
      onMovieListItemClick={handleClick}
    />);

    result
      .find(SmallMovieCard)
      .forEach((value) => {
        value
          .find(`.small-movie-card`)
          .simulate(`click`);
      });

    expect(handleClick).toHaveBeenCalledTimes(MOVIES.length);
  });
});
