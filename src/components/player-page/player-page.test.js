import React from 'react';
import renderer from 'react-test-renderer';
import {PlayerPage} from './player-page';

describe(`<PlayerPage />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<PlayerPage />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
