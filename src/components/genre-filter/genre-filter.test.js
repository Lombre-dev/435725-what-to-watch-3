import React from 'react';
import renderer from 'react-test-renderer';
import {GenreFilter} from './genre-filter';

const GENRE = `Comedy`;
const HANDLE_EVENT = () => {};

describe(`<GenreFilter />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<GenreFilter
        genre={GENRE}
        onSelect={HANDLE_EVENT}
      />, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
