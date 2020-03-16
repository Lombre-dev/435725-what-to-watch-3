import * as React from 'react';
import * as renderer from 'react-test-renderer';
import MovieInfoTabs from './movie-info-tabs';

const CURRENT_TAB = 0;
const HANDLE_EVENT = () => {
  // eslint-disable-next-line no-console
  console.log(`handleTestEvent`);
};

describe(`<MovieInfoTabs />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<MovieInfoTabs
        currentTab={CURRENT_TAB}
        onTabClick={HANDLE_EVENT}
      />)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
