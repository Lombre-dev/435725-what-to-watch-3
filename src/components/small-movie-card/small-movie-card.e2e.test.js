import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import SmallMovieCard from './small-movie-card';

Enzyme.configure({
  adapter: new Adapter(),
});

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
const IS_PREVIEW_ACTIVE = false;

describe(`<SmallMovieCard />`, () => {

  it(`component should be hovered`, () => {

    const handleHover = jest.fn();
    const handleLeave = jest.fn();

    const result = mount(<BrowserRouter>
      <SmallMovieCard
        movie={MOVIE}
        isPreviewActive={IS_PREVIEW_ACTIVE}
        onHover={handleHover}
        onLeave={handleLeave}
      />
    </BrowserRouter>);

    result
      .find(`.small-movie-card`)
      .simulate(`mouseEnter`);

    expect(handleHover).toHaveBeenCalledTimes(1);
  });

  it(`component should be leaved`, () => {

    const handleHover = jest.fn();
    const handleLeave = jest.fn();

    const result = mount(<BrowserRouter>
      <SmallMovieCard
        movie={MOVIE}
        isPreviewActive={IS_PREVIEW_ACTIVE}
        onHover={handleHover}
        onLeave={handleLeave}
      />
    </BrowserRouter>);

    result
      .find(`.small-movie-card`)
      .simulate(`mouseLeave`);

    expect(handleLeave).toHaveBeenCalledTimes(1);
  });

  /*
  it(`component should be clicked`, () => {

    const handleHover = jest.fn();
    const handleLeave = jest.fn();

    const result = shallow(<SmallMovieCard
      movie={MOVIE}
      isPreviewActive={IS_PREVIEW_ACTIVE}
      onHover={handleHover}
      onLeave={handleLeave}
    />);

    result
      .find(`.small-movie-card`)
      .simulate(`click`, {
        preventDefault() {}
      });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  */
});
