import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMore from './show-more';

const HANDLE_EVENT = () => {};

describe(`<ShowMore />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ShowMore
        onClick={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
