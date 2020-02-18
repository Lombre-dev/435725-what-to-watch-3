import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const MOVIE = {
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  frames: [`img/the-grand-budapest-hotel-poster.jpg`],
  ratingScore: 8.9,
  ratingReviewsCount: 240,
  description: `Description`,
  story: `Story`,
  director: `Director`,
  actors: [
    `Some Actor 1`,
    `Some Actor 2`,
    `Some Actor 3`,
    `Some Actor 4`,
    `Some Actor 5`,
  ],
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
