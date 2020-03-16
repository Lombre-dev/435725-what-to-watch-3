import axios from 'axios';
import {ServerConfig} from './consts';

export function createAPI() {
  const api = axios.create({
    baseURL: ServerConfig.URL,
    timeout: ServerConfig.RESPONSE_TIMEOUT,
    withCredentials: ServerConfig.USE_COOKIES,
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
