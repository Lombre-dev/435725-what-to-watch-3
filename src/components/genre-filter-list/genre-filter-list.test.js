import React from 'react';
import {Provider} from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import GenreFilterList from './genre-filter-list';

const GENRES = [`Comedy`, `Sci-Fi`, `Horror`];
const mockStore = configureStore([]);

describe(`<GenreFilterList />`, () => {

  const store = mockStore({

  });

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<Provider store={store}>
        <GenreFilterList
          genres={GENRES}
          currentGenre={GENRES[0]}
        />
      </Provider>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
