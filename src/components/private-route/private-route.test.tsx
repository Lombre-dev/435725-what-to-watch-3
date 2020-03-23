import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {AuthorizationStatus, AppPages} from '../../types';
import {PrivateRoute} from './private-route';

const EXACT = true;
const PATH = AppPages.LOGIN;
const AUTH_STATUS = AuthorizationStatus.AUTH;
const RENDER: () => React.ReactNode = () => {
  return <p>Test</p>;
};

describe(`<PrivateRoute />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <PrivateRoute
          exact={EXACT}
          path={PATH}
          authStatus={AUTH_STATUS}
          render={RENDER}
        />
      </BrowserRouter>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
