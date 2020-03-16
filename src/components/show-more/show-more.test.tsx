import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ShowMore from './show-more';

const HANDLE_EVENT = () => {
  // eslint-disable-next-line no-console
  console.log(`handleTestEvent`);
};

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
