import axios, {AxiosInstance, AxiosError} from 'axios';
import {logApi} from '.';
import {
  ApiProps,
  IAxiosError,
  IErrorBase,
  IErrorResponseBase,
  IStockError,
} from '@type/api';
import {Api} from './api';

export class ApiService extends Api {
  constructor() {
    super();
  }
  private static service: (props: ApiProps) => AxiosInstance = (
    props: ApiProps,
  ) => {
    return this.api();
  };

  public static get: <T = any>(props: ApiProps) => Promise<T | IErrorBase<T>> =
    async <T,>(props: ApiProps) => {
      try {
        const fullResponse = props?.fullResponse ?? false;
        const finalHeader = {
          ...props.headers,
          ...this.generateHeaderhWithNewToken(props),
        };
        const res = await this.service(props).get(props?.url, {
          ...props.config,
          headers: finalHeader,
        });
        logApi({
          nameFunction: 'apiGet',
          tags: props?.tags,
          res: res,
        });
        return Promise.resolve(fullResponse ? res : res.data);
      } catch (e: AxiosError | any) {
        if ((props.retry ?? 0) > 0) {
          return await this.get({
            ...props,
            retry: props.retry ? props.retry - 1 : 0,
          });
        }

        logApi({
          nameFunction: 'apiGet',
          tags: props?.tags,
          e: e,
        });
        const errorData = e?.response?.data?.message || 'Terjadi Kesalahan';
        return Promise.reject(e);
      }
    };

  public static post: <T = any>(props: ApiProps) => Promise<T | IErrorBase<T>> =
    async <T,>(props: ApiProps) => {
      try {
        const fullResponse = props?.fullResponse ?? false;
        const finalHeader = {
          ...props.headers,
          ...this.generateHeaderhWithNewToken(props),
        };
        const res = await this.service(props).post(props?.url, props?.body, {
          ...props.config,
          headers: finalHeader,
        });
        logApi({
          nameFunction: 'apiPost',
          tags: props?.tags,
          body: props?.body,
          res: res,
        });
        return Promise.resolve(fullResponse ? res : res.data);
      } catch (e: AxiosError | any) {
        if ((props.retry ?? 0) > 0) {
          return await this.post({
            ...props,
            retry: props.retry ? props.retry - 1 : 0,
          });
        }
        logApi({
          nameFunction: 'apiPost',
          tags: props?.tags,
          body: props?.body,
          e: e,
        });
        // const errorData = e?.response?.data?.message || "Terjadi Kesalahan";
        return Promise.reject(e);
      }
    };

  public static put: <T = any>(props: ApiProps) => Promise<T | IErrorBase<T>> =
    async <T,>(props: ApiProps) => {
      try {
        const fullResponse = props?.fullResponse ?? false;
        const finalHeader = {
          ...props.headers,
          ...this.generateHeaderhWithNewToken(props),
        };
        const res = await this.service(props).put(props?.url, props?.body, {
          ...props.config,
          headers: finalHeader,
        });
        logApi({
          nameFunction: 'apiPut',
          tags: props?.tags,
          body: props?.body,
          res: res,
        });
        return Promise.resolve(fullResponse ? res : res.data);
      } catch (e: AxiosError | any) {
        if ((props.retry ?? 0) > 0) {
          return await this.put({
            ...props,
            retry: props.retry ? props.retry - 1 : 0,
          });
        }

        logApi({
          nameFunction: 'apiPut',
          tags: props?.tags,
          body: props?.body,
          e: e,
        });
        // const errorData = e?.response?.data?.message || "Terjadi Kesalahan";
        return Promise.reject(e);
      }
    };

  public static delete: <T = any>(
    props: ApiProps,
  ) => Promise<T | IErrorBase<T>> = async <T,>(props: ApiProps) => {
    try {
      const fullResponse = props?.fullResponse ?? false;
      const finalHeader = {
        ...props.headers,
        ...this.generateHeaderhWithNewToken(props),
      };
      const res = await this.service(props).delete(props?.url, {
        data: props?.body,
        headers: finalHeader,
      });
      logApi({
        nameFunction: 'apiDelete',
        tags: props?.tags,
        body: props?.body,
        res: res,
      });
      return Promise.resolve(fullResponse ? res : res.data);
    } catch (e: AxiosError | any) {
      if ((props.retry ?? 0) > 0) {
        return await this.delete({
          ...props,
          retry: props.retry ? props.retry - 1 : 0,
        });
      }
      logApi({
        nameFunction: 'apiDelete',
        tags: props?.tags,
        body: props?.body,
        e: e,
      });
      // const errorData = e?.response?.data?.message || "Terjadi Kesalahan";
      return Promise.reject(e);
    }
  };

  public static axiosErrorHandler = <T,>(error: unknown) => {
    if (axios.isAxiosError(error)) {
      return {
        error: error,
        errorResponseData: error.response?.data,
        type: 'axios-error',
      } as IAxiosError<IErrorResponseBase>;
    }
    // } else {
    return {
      error: error,
      type: 'stock-error',
    } as IStockError<T>;
  };

  private static generateHeaderhWithNewToken = (props: ApiProps) => {
    return {
      Authorization: props.token,
    };
  };
}
