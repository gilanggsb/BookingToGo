import {combineReducers} from '@reduxjs/toolkit';
import {
  paymentDetailsApi,
  paymentDetailsApiReducer,
} from './paymentDetailsApi/paymentDetailsApi';
import paymentGuestDataReducer from './paymentGuestData/paymentGuestDataSlice';

export const rootReducer = combineReducers({
  pamyentGuestData: paymentGuestDataReducer,
  [paymentDetailsApi.reducerPath]: paymentDetailsApiReducer,
});
