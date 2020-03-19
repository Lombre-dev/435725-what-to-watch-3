import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {GenreFilterItem} from './genre-filter-item';

const GENRE = `Comedy`;
const HANDLE_EVENT = () => {};

describe(`<GenreFilter />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreFilterItem
        genre={GENRE}
        onSelect={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
