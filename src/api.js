import axios from 'axios';
import {SERVER_RESPONSE_TIMEOUT, SERVER_URL, SERVER_USE_COOKIES} from './consts';

export function createAPI() {
  const api = axios.create({
    baseURL: SERVER_URL,
    timeout: SERVER_RESPONSE_TIMEOUT,
    withCredentials: SERVER_USE_COOKIES,
  });

  const onSuccess = (response) => {
    return response;
  };

  const onFail = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
}
