import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import PlayerPage from './player-page';

describe(`<PlayerPage />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <PlayerPage />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
