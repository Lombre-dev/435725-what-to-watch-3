import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import PageNotFound from './page-not-found';

describe(`<PageNotFound />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <PageNotFound />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
