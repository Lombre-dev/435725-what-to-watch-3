import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer';

describe(`<Footer />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<Footer />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
