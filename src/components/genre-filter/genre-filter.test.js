import React from 'react';
import renderer from 'react-test-renderer';
import {GenreFilter} from './genre-filter';

const GENRES = [`Comedy`, `Sci-Fi`, `Horror`];
const HANDLE_SELECT = () => {};

describe(`<GenreFilter />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreFilter
        genres={GENRES}
        currentGenre={GENRES[0]}
        onSelect={HANDLE_SELECT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
