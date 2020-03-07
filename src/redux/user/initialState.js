import {AuthorizationStatus} from '../../consts';

export const initialState = {
  id: -1,
  name: undefined,
  email: undefined,
  avatar: undefined,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};
