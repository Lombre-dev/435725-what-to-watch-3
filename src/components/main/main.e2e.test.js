import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

const MOVIES = [
  {
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
  },
  {
    title: `Bohemian Rhapsody`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/bohemian-rhapsody.jpg`,
    frames: [`img/bohemian-rhapsody.jpg`],
    ratingScore: 7.5,
    ratingReviewsCount: 100,
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
  },
  {
    title: `Macbeth`,
    genres: [`Drama`],
    year: 2014,
    poster: `img/macbeth.jpg`,
    frames: [`img/macbeth.jpg`],
    ratingScore: 6.9,
    ratingReviewsCount: 50,
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
  },
];
const CURRENT_MOVIE = MOVIES[0];

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
