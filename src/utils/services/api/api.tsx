import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError,
} from 'axios';
import {baseApiConfig} from '@utils/config/apiConfig';
import {X_API_KEY, X_APPLICATION_ID} from '@utils/config';

export class Api {
  constructor() {}
  protected static api: () => AxiosInstance = () => {
    const api = axios.create(baseApiConfig);
    api.interceptors.request.use(Api.interceptRequest);

    api.interceptors.response.use(
      Api.interceptResponse,
      Api.interceptErrorResponse,
    );
    return api;
  };

  private static readonly interceptErrorResponse = function (
    error: AxiosError,
  ) {
    return Promise.reject(error);
  };

  private static readonly interceptResponse = function (
    response: AxiosResponse,
  ) {
    return Promise.resolve(response);
  };

  private static readonly interceptRequest = async function (
    config: InternalAxiosRequestConfig,
  ) {
    if (!config.headers.Authorization) {
      config.headers['X-Parse-REST-API-Key'] = X_API_KEY;
      config.headers['X-Parse-Application-Id'] = X_APPLICATION_ID;
    }

    return config;
  };
}
