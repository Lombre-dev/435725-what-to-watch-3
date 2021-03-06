import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ReviewRating from './review-rating';

const VALUE = 0;
const LIMIT = 5;
const IS_ENABLED = true;
const HANDLE_EVENT = () => {};

describe(`<ReviewRating />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ReviewRating
        value={VALUE}
        limit={LIMIT}
        isEnabled={IS_ENABLED}
        onValueChange={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
