import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {Operations} from './operations';

describe(`AppOperations`, () => {
  it(`should be a correct call init`, () => {

    const api = createAPI();
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);

    Operations.init()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);
      });

    apiMock
      .onGet(`/films`)
      .reply(200, []);
  });
});
