import * as React from 'react';
import {Provider} from 'react-redux';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import GenreFilters from './genre-filters';

const GENRES = [`Comedy`, `Sci-Fi`, `Horror`];
const mockStore = configureStore([]);

describe(`<GenreFilters />`, () => {

  const store = mockStore({

  });

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<Provider store={store}>
        <GenreFilters
          genres={GENRES}
          genre={GENRES[0]}
        />
      </Provider>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
