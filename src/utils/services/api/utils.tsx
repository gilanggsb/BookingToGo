import { AxiosResponse } from 'axios';
import { ApiLog } from '@type/api';
// HOW TO USE getValueByDottedString
// const nestedObject = {
//   ID: 1,
//   created_by: 1,
//   user: {
//     id: 1,
//     username: 'cahyo@gmail.com',
//     email: 'cahyo@gmail.com',
//     gender: 'L',
//     user_type: {
//       id: 1,
//       name: 'Murid',
//       icon_mobile: '64202140b1a4fd6bb6741cb6',
//       description: 'Belajar dengan metode Pintar',
//     },
//   },
//   guru: "Gilang",
// };
// *** SINGLE OBJECT ***
// console.log(
//   getObjectData("guru", nestedObject),
// );
// result : Gilang
// *** NESTED OBJECT ***
// console.log(
// getValueByDottedString("user.user_type.name", nestedObject),
// );
// result : 64202140b1a4fd6bb6741cb6
const getValueByDottedString = (dottedString: string, obj: any) => {
  if (dottedString.indexOf('.') === -1) {
    return obj[dottedString];
  }
  const dottedArray = dottedString.split('.');
  dottedArray.forEach(key => {
    obj = obj[key];
  });
  return obj;
};

const assignValueByDottedString = (
  obj: any,
  dottedString: string,
  value: any,
): void => {
  const keys = dottedString.split('.');
  let currentObj = obj;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];

    if (!currentObj.hasOwnProperty(key)) {
      currentObj[key] = {};
    }

    currentObj = currentObj[key];
  }

  const lastKey = keys[keys.length - 1];
  currentObj[lastKey] = value;
};

const logApi = (props: ApiLog) => {
  if (!props?.tags) {
    return;
  }

  if (props?.e && props?.e?.constructor?.name?.toLowerCase() !== 'axioserror') {
    console.log('************** API LOG **************');
    console.log(
      `${props?.nameFunction} `,
      props?.tags,
      ' error : ',
      JSON.stringify(props?.e),
    );
    console.log('************** API LOG **************');
    return;
  }

  if (props?.isDownload) {
    console.log('************** API LOG **************');
    console.log(
      `${props?.nameFunction}`,
      props?.tags,
      'fileDownloaded on :',
      JSON.stringify(props?.res),
    );
    console.log('************** API LOG **************');
    return;
  }

  let url = '';
  let statusCode: any = 0;
  let body = JSON.stringify(props?.body || '');
  let data = '';
  let isError = props?.e ? 'error' : '';

  if (isError) {
    url = props?.e?.request?._url || `${props?.e?.config?.baseURL}${props?.e?.config?.url}`;
    statusCode = props?.e?.response?.status;
    body = props?.e?.config?.data || '';
    data = JSON.stringify(props?.e?.response?.data) || '';
  } else {
    url = props?.res?.request?._url;
    statusCode = props?.res?.status;
    data =
      JSON.stringify(props?.res?.data?.data) || JSON.stringify(props?.res?.data);
  }

  console.log('************** API LOG **************');
  generateCurl(
    props?.res || props?.e,
    url,
    props?.nameFunction,
    props?.tags,
    isError,
  );
  console.log(
    `${props?.nameFunction}`,
    props?.tags,
    isError,
    'statusCode :',
    statusCode,
    '\n',
  );

  console.log(`${props?.nameFunction}`, props?.tags, isError, 'url :', url, '\n');
  console.log(
    `${props?.nameFunction}`,
    props?.tags,
    isError,
    'body :',
    body,
    '\n',
  );

  console.log(
    `${props?.nameFunction}`,
    props?.tags,
    isError,
    'data :',
    data,
    '\n',
  );
  console.log('************** API LOG **************');
};

const generateCurl = (
  res: AxiosResponse<any, any> | any,
  url: string,
  nameFunction: string,
  tags: string,
  isError?: string,
) => {
  const { params, headers, data } = res?.config || false;
  let curlCommand = `curl --location "${url}"`;

  // Add headers
  for (const [key, value] of Object.entries(headers)) {
    curlCommand += ` --header "${key}: ${value}"`;
  }

  // Add query parameters
  if (params) {
    const queryParams = new URLSearchParams(params).toString();
    curlCommand += ` --data-urlencode "${queryParams}"`;
  }

  // Add request body
  if (data) {
    const requestBody = data;
    curlCommand += ` --data '${requestBody}'`;
  }

  console.log(nameFunction, tags, isError, 'curl :', curlCommand);
};

const getHeaders = async () => {
//   const token = (await StorageService.getToken()) || '';
  return {
    Authorization: 'Bearer ' + '',
  };
};

const getHeadersFormData = () => {
  return {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data',
  };
};

export {
  assignValueByDottedString,
  getValueByDottedString,
  logApi,
  generateCurl,
  getHeaders,
  getHeadersFormData,
};
