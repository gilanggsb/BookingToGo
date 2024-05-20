import React from 'react';
import {ScrollView} from 'react-native';
import usePaymentDetails from './usePaymentDetails';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {Divider} from 'react-native-paper';
import styles from './styles';
import Stepper from './components/Stepper';
import {IStepperData} from '@type/global';
import {FlatList} from 'react-native-gesture-handler';
import HotelDetail from './components/HotelDetail';
import HotelCheck from './components/HotelCheck';
import {Functional} from '@utils/helpers';
import Refundable from './components/Refundable';
import OrderDetail from './components/OrderDetail';
import UserDetail from './components/UserDetail';
import OrderType from './components/OrderType';
import OrdererDetail from './components/OrdererDetail';
import GuestData from './components/GuestData';

const stepperData: IStepperData[] = [
  {
    isActive: true,
    stepNumber: 1,
    title: 'Detail Pesanan',
  },
  {
    isActive: false,
    stepNumber: 2,
    title: 'Pembayaran',
  },
];

const PaymentDetailsScreen = () => {
  const {themeColors, paymentDetailsData} = usePaymentDetails();
  return (
    <MainView backgroundColor={themeColors.screen.background} flex={1}>
      <ScrollView>
        {/* MARK: START Stepper */}
        <FlatList<IStepperData>
          data={stepperData}
          horizontal
          contentContainerStyle={styles.stepperContentContainer}
          ItemSeparatorComponent={() => (
            <MainView justifyContent="center">
              <Divider horizontalInset style={{width: 16, height: 3}} />
            </MainView>
          )}
          renderItem={({item}) => {
            return (
              <Stepper
                key={item.stepNumber}
                isActive={item.isActive}
                stepNumber={item.stepNumber}
                themeColors={themeColors}
                title={item.title}
              />
            );
          }}
        />
        {/* MARK: END Stepper */}
        <Divider style={{height: 1}} />
        {/* MARK: START OrderDetail */}
        <OrderDetail
          themeColors={themeColors}
          choosenHotel={paymentDetailsData?.get_chosen_hotel}
        />
        {/* MARK: END OrderDetail */}
        <Divider style={{height: 1}} />
        {/* MARK: START Orderer Detail */}
        <OrdererDetail themeColors={themeColors} />
        {/* MARK: END Orderer Detail */}
        <Divider style={{height: 1}} />
        {/* MARK: START Guest Data */}
        <GuestData themeColors={themeColors} />
        {/* MARK: END Guest Data */}
      </ScrollView>
    </MainView>
  );
};

export {PaymentDetailsScreen};
