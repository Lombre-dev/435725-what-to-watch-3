import {AuthorizationStatus} from '../../types';

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
