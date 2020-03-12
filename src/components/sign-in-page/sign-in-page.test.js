import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {AuthorizationStatus} from '../../consts';
import {SignInPage} from './sign-in-page';

const mockStore = configureStore([]);
const HANDLE_EVENT = () => {};

describe(`<SignInPage />`, () => {

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
          <SignInPage
            init={HANDLE_EVENT}
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
