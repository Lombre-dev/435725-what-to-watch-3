import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import NotFoundPage from './not-found-page';

describe(`<NotFoundPage />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <NotFoundPage />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
