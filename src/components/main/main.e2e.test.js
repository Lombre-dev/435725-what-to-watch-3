import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Main from './main';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`<Main />`, () => {

  it(`movie card title should be clicked`, () => {

    const currentMovie = {
      title: `The Grand Budapest Hotel`,
      genres: [`Drama`],
      year: 2014,
      poster: `img/the-grand-budapest-hotel-poster.jpg`,
    };
    const movieList = [
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
    const handleMovieCardTitleClick = jest.fn();

    const result = shallow(<Main
      currentMovie={currentMovie}
      movieList={movieList}
      onMovieCardTitleClick={handleMovieCardTitleClick}
    />);

    result
      .find(`.small-movie-card__link`)
      .forEach((value) => {
        value.simulate(`click`);
      });

    expect(handleMovieCardTitleClick).toHaveBeenCalledTimes(movieList.length);
  });
});
