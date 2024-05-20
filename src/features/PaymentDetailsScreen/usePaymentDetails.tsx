import {Header} from '@components/Header';
import {useNavigate, useThemeContext} from '@states/hooks';
import {useGetPaymentDetailsQuery} from '@states/redux/paymentDetailsApi/paymentDetailsApi';
import {useLayoutEffect} from 'react';

const usePaymentDetails = () => {
  const {navigateScreen, navigation} = useNavigate();
  const {themeColors} = useThemeContext();
  const {data} = useGetPaymentDetailsQuery('bVonXoSUHK');
  const paymentDetailsData = data?.chosen_hotel?.data;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Header
          label={'Payment Details'}
          backgroundColor={themeColors.primary.base}
          colorLabel={themeColors.white}
        />
      ),
    });
  }, []);

  return {themeColors, paymentDetailsData};
};
export default usePaymentDetails;
