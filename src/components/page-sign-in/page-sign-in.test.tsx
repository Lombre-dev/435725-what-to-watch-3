import * as React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../consts';
import {PageSignIn} from './page-sign-in';

const mockStore = configureStore([]);
const HANDLE_EVENT = () => {};

describe(`<PageSignIn />`, () => {

  it(`render should be match markup`, () => {

    const store = mockStore({
      user: {
        id: -1,
        name: undefined,
        email: undefined,
        avatar: undefined,
        authError: undefined,
        authStatus: AuthorizationStatus.NO_AUTH,
      }
    });

    const result = renderer
      .create(<Provider store={store}>
        <BrowserRouter>
          <PageSignIn
            onMount={HANDLE_EVENT}
            onSubmit={HANDLE_EVENT}
          />
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

    expect(result).toMatchSnapshot();
  });
});
