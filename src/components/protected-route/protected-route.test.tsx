import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import {ProtectedRoute} from './protected-route';
import {AppPages} from '../../types';

const EXACT = true;
const PATH = AppPages.LOGIN;
const AUTH_REQUIRED = false;
const RENDER: () => React.ReactNode = () => {
  return <p>Test</p>;
};

describe(`<ProtectedRoute />`, () => {

  it(`render should be match markup`, () => {

    const result = renderer
      .create(<BrowserRouter>
        <ProtectedRoute
          exact={EXACT}
          path={PATH}
          authRequired={AUTH_REQUIRED}
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
