import React from 'react';
import renderer from 'react-test-renderer';
import ReviewRating from './review-rating';

const VALUE = 0;
const LIMIT = 5;
const HANDLE_EVENT = () => {};

describe(`<ReviewRating />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<ReviewRating
        value={VALUE}
        limit={LIMIT}
        onValueChange={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
