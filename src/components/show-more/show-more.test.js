import React from 'react';
import renderer from 'react-test-renderer';
import ShowMore from './show-more';

const HANDLE_CLICK = () => {};

describe(`<ShowMore />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ShowMore onClick={HANDLE_CLICK} />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
