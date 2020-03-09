import axios from 'axios';
import {ServerErrors, SERVER_RESPONSE_TIMEOUT, SERVER_URL, SERVER_USE_COOKIES} from './consts';

export function createAPI(onUnauthorizedUserAction) {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: SERVER_RESPONSE_TIMEOUT,
    withCredentials: SERVER_USE_COOKIES,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (error) => {

    const {response} = error;

    switch (response.status) {
      case ServerErrors.UNAUTHORIZED:
        onUnauthorizedUserAction();
        break;
    }
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
