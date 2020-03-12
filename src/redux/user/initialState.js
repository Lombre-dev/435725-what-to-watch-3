import {AuthorizationStatus} from '../../consts';

export const initialState = {
  id: -1,
  name: undefined,
  email: undefined,
  avatar: undefined,
  authRequired: false,
  authError: undefined,
  authStatus: AuthorizationStatus.NO_AUTH,
  favoriteMovies: [],
};
