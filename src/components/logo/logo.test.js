import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import Logo from './logo';

describe(`<Logo />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <Logo />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
