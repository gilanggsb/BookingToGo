import {ConvertToQueryStringProps} from '@type/global';
import dayjs from 'dayjs';
import queryString from 'query-string';
import DeviceInfo from 'react-native-device-info';

class Functional {
  static appVersion = DeviceInfo.getVersion();

  static convertDate = (date?: dayjs.ConfigType, props?: ConvertDateProps) => {
    const {toUTC = true} = props ?? {};
    let currDate = dayjs(date).utc().locale('id');

    if (
      !this.isStringContains(date?.toString() || '', 'Z') ||
      props?.useLocalTime
    ) {
      currDate = dayjs(date).utc(true).locale('id');
    }

    if (this.isStringContains(date?.toString() || '', 'gmt')) {
      currDate = dayjs(date).locale('id');
    }

    if (!toUTC) {
      currDate = dayjs(date).locale('id');
    }

    return currDate;
  };

  static isStringContains = (
    data: string,
    compareData?: string,
    listCompareData?: string[],
    lowerCase: boolean = true,
  ): boolean => {
    //default comparison
    if (!listCompareData) {
      if (!lowerCase) {
        return data?.includes?.(compareData || '');
      }
      return data
        ?.toLocaleLowerCase?.()
        .includes?.((compareData || '')?.toLocaleLowerCase?.());
    }

    //compare with listCompareData
    if (!lowerCase) {
      return (
        listCompareData?.findIndex(item => this.isStringContains(data, item)) !=
        -1
      );
    }

    const lowCaseListCompareData = listCompareData?.map(item =>
      item?.toLowerCase?.(),
    );

    return (
      lowCaseListCompareData?.findIndex?.(item =>
        this.isStringContains(data, item),
      ) != -1
    );
  };

  static isText = (data: unknown): data is string => {
    return typeof data === 'string';
  };

  static isObject = (object: any) => {
    return object != null && typeof object === 'object';
  };

  static isDeepEqual = (object1: any, object2: any) => {
    const objKeys1 = Object.keys(object1);
    const objKeys2 = Object.keys(object2);

    if (objKeys1.length !== objKeys2.length) return false;

    for (var key of objKeys1) {
      const value1 = object1[key];
      const value2 = object2[key];

      const isObjects = this.isObject(value1) && this.isObject(value2);

      if (
        (isObjects && !this.isDeepEqual(value1, value2)) ||
        (!isObjects && value1 !== value2)
      ) {
        return false;
      }
    }
    return true;
  };

  static removeAttrFromObject = <O extends object, A extends keyof O>(
    object: O,
    attr: A[],
  ): Omit<O, A> => {
    const newObject = {...object};

    for (const key of attr) {
      if (key in newObject) {
        delete newObject[key];
      }
    }

    return newObject;
  };

  static capitalizeEachWord(data: string) {
    return data
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  static camelCaseToSnakeCase = (camelCaseString: string) => {
    return camelCaseString.replace(
      /[A-Z]/g,
      match => `_${match.toLowerCase()}`,
    );
  };

  static convertToQueryString = (
    params: Record<string, any>,
    options?: ConvertToQueryStringProps,
  ) => {
    try {
      let mappedParams: any = {};
      for (const key in params) {
        const paramsData = params[key];
        mappedParams[key] = paramsData;
        if (Array.isArray(paramsData)) {
          mappedParams[key] = paramsData.join(',');
        }
      }

      const resQueryString = queryString.stringify(
        mappedParams,
        options?.queryStringOpt,
      );

      if (options?.toSnakeCase) {
        return this.camelCaseToSnakeCase(resQueryString);
      }

      return resQueryString;
    } catch (error) {
      return '';
    }
  };

  static removeItem<T>(arr: Array<T>, value: T): Array<T> {
    const index = arr.indexOf(value);
    console.log('🚀 ~ Functional ~ arr:', arr);
    console.log('🚀 ~ Functional ~ index:', index);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }
}

export {Functional};
