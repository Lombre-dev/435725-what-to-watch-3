import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfoTabs from './movie-info-tabs';

const CURRENT_TAB = 0;
const HANDLE_CLICK = () => {};

describe(`<MovieInfoTabs />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<MovieInfoTabs
        currentTab={CURRENT_TAB}
        onTabClick={HANDLE_CLICK}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
