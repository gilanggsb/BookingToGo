import {
  IGetFromStorage,
  IGetFromStorageProps,
  IGetStorage,
  IRemoveFromStorage,
  ISaveStorage,
  ISaveToStorage,
} from '@type/storage';
import {StorageKeys} from '@utils/constants/storageKeys';
import {Functional} from '@utils/helpers';
import {MMKV} from 'react-native-mmkv';

export class StorageService {
  protected static service: CallBackWithParams<MMKV, void> = () => {
    const storage = new MMKV();
    return storage;
  };

  static async saveToStorage(props: ISaveToStorage) {
    try {
      const mappedData = {
        data: props.data,
        ttl: props.ttl?.toString(),
        removeWhenExpired: props.removeWhenExpired,
      };
      const stringifyData = JSON.stringify(mappedData);
      await this.save({...props, data: stringifyData});
    } catch (error) {}
  }

  static async getFromStorage<T = any>(
    props: IGetFromStorageProps<T>,
  ): Promise<IGetFromStorage<T> | undefined> {
    try {
      const data = await this.get({...props});
      if (!data) return;

      const resData: IGetFromStorage<T> = {
        ...props,
        data: data?.data,
      };

      if (!data?.ttl) return resData;

      const isExpired = Functional.convertDate().isAfter(
        Functional.convertDate(data?.ttl),
      );

      if (data.removeWhenExpired || props.removeWhenExpired) {
        if (isExpired) {
          this.remove({...props});
        }
      }

      return {
        ...resData,
        ttl: data?.ttl,
        isExpired,
      };
    } catch (error) {}
  }

  protected static async get<T = any>(props: IGetStorage<T>) {
    try {
      const dataString = this.service().getString(StorageKeys[props.key]);
      if (!dataString) return;
      return JSON.parse(dataString) as T;
    } catch (error) {}
  }

  protected static async save(props: ISaveStorage) {
    try {
      this.service().set(StorageKeys[props.key], props.data);
    } catch (error) {}
  }

  static async remove(props: IRemoveFromStorage): Promise<void> {
    try {
      if (typeof props.key === 'string') {
        this.service().delete(StorageKeys[props.key]);
        return;
      }

      props.key.forEach(key => this.remove({key}));
      return;
    } catch (error) {}
  }
}
