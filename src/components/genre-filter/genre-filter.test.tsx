import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {GenreFilter} from './genre-filter';

const GENRE = `Comedy`;
const HANDLE_EVENT = function () {};

describe(`<GenreFilter />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreFilter
        genre={GENRE}
        onSelect={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
