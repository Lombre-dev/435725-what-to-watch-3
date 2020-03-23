import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {AuthorizationStatus} from '../../types';
import {UserBlock} from './user-block';

const STATUS = AuthorizationStatus.AUTH;
const NAME = `Test`;
const AVATAR = `Avatar.jpg`;

describe(`<UserBlock />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <UserBlock
          status={STATUS}
          name={NAME}
          avatar={AVATAR}
        />
      </BrowserRouter>)
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
