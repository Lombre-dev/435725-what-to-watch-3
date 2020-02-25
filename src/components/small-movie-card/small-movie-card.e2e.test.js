import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

const ID = 0;
const MOVIE = {
  title: `The Grand Budapest Hotel`,
  genres: [`Drama`],
  year: 2014,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  frames: [`img/the-grand-budapest-hotel-poster.jpg`],
  ratingScore: 8.9,
  ratingReviewsCount: 240,
  preview: `./samples/sintel_trailer-480p.mp4`,
  description: `In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`,
  story: `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`,
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
const IS_PREVIEW_ACTIVE = false;

describe(`<SmallMovieCard />`, () => {

  it(`component should be hovered`, () => {

    const handleHover = jest.fn();
    const handleLeave = jest.fn();
    const handleClick = jest.fn();

    const result = shallow(<SmallMovieCard
      id={ID}
      movie={MOVIE}
      isPreviewActive={IS_PREVIEW_ACTIVE}
      onHover={handleHover}
      onLeave={handleLeave}
      onClick={handleClick}
    />);

    result
      .find(`.small-movie-card`)
      .simulate(`mouseEnter`);

    expect(handleHover).toHaveBeenCalledTimes(1);
  });

  it(`component should be leaved`, () => {

    const handleHover = jest.fn();
    const handleLeave = jest.fn();
    const handleClick = jest.fn();

    const result = shallow(<SmallMovieCard
      id={ID}
      movie={MOVIE}
      isPreviewActive={IS_PREVIEW_ACTIVE}
      onHover={handleHover}
      onLeave={handleLeave}
      onClick={handleClick}
    />);

    result
      .find(`.small-movie-card`)
      .simulate(`mouseLeave`);

    expect(handleLeave).toHaveBeenCalledTimes(1);
  });

  it(`component should be clicked`, () => {

    const handleHover = jest.fn();
    const handleLeave = jest.fn();
    const handleClick = jest.fn();

    const result = shallow(<SmallMovieCard
      id={ID}
      movie={MOVIE}
      isPreviewActive={IS_PREVIEW_ACTIVE}
      onHover={handleHover}
      onLeave={handleLeave}
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
