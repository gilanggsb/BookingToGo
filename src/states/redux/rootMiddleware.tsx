import {GetDefaultMiddleware} from 'node_modules/@reduxjs/toolkit/dist/getDefaultMiddleware';
import { paymentDetailsApi } from './paymentDetailsApi/paymentDetailsApi';

export const rootMidleware = (getDefaultMiddleware: GetDefaultMiddleware) => {
  return getDefaultMiddleware({
    serializableCheck: false,
  })
    .concat(paymentDetailsApi.middleware);
};
