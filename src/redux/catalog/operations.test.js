import MockAdapter from "axios-mock-adapter";
import {createAPI} from '../../api';
import {Operations} from './operations';

describe(`CatalogOperations`, () => {
  it(`should be a correct API call to /films`, () => {

    const api = createAPI(() => {});
    const dispatch = jest.fn();
    const apiMock = new MockAdapter(api);

    Operations.getCatalog()(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
      });

    apiMock
      .onGet(`/films`)
      .reply(200, []);
  });
});
