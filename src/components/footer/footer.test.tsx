import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {default as Footer} from './footer';

describe(`<Footer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <Footer />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
