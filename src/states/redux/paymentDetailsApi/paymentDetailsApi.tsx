import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import {IBaseErrorResponse, IResponsePaymentDetail} from '@type/response';
import {URL_PATH} from '@utils/config';
import {showErrorToast} from '@utils/helpers/utils';
import {ApiService} from '@utils/services';
import {isAxiosError} from 'axios';

export const paymentDetailsApi = createApi({
  reducerPath: 'paymentDetailsApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getPaymentDetails: builder.query<IResponsePaymentDetail, string>({
      queryFn: async hotelId => {
        try {
          const resData = await ApiService.get({
            url: URL_PATH.getPaymentDetails(hotelId),
          });
          return {data: resData};
        } catch (error) {
          if (isAxiosError(error)) {
            const errData: IBaseErrorResponse = error.response?.data;
            showErrorToast(errData.message || 'Terjadi Kesalahan');
          }
          return {error: error};
        }
      },
    }),
  }),
});

export const paymentDetailsApiReducer = paymentDetailsApi.reducer;
export const {useGetPaymentDetailsQuery} = paymentDetailsApi;
