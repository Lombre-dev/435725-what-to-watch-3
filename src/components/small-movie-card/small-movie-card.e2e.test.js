import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const MOVIE = {
  title: `Fantastic Beasts: The Crimes of Grindelwal`,
  genres: [`Drama`],
  year: 2014,
  frames: [`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`],
};

describe(`<SmallMovieCard />`, () => {

  it(`component should be hovered`, () => {

    const handleHover = jest.fn();
    const handleClick = jest.fn();

    const result = shallow(<SmallMovieCard
      movie={MOVIE}
      onHover={handleHover}
      onClick={handleClick}
    />);

    result
      .find(`.small-movie-card`)
      .simulate(`mouseEnter`);

    expect(handleHover).toHaveBeenCalledTimes(1);
  });

  it(`component should be clicked`, () => {

    const handleHover = jest.fn();
    const handleClick = jest.fn();

    const result = shallow(<SmallMovieCard
      movie={MOVIE}
      onHover={handleHover}
      onClick={handleClick}
    />);

    result
      .find(`.small-movie-card`)
      .simulate(`click`, {
        preventDefault() {}
      });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
