import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Footer from './footer';

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
