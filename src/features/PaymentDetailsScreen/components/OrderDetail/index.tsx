import React, {FC} from 'react';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {Functional} from '@utils/helpers';
import HotelCheck from '../HotelCheck';
import HotelDetail from '../HotelDetail';
import Refundable from '../Refundable';
import {ThemeColors} from '@type/context';
import {GetChosenHotel} from '@type/response';

type Props = {
  themeColors: ThemeColors;
  choosenHotel?: GetChosenHotel;
};

const OrderDetail: FC<Props> = ({themeColors, choosenHotel}) => {
  return (
    <MainView margin={14}>
      <MainText fontSize={18} fontWeight={'600'}>
        Detail Pesanan
      </MainText>
      <HotelDetail themeColors={themeColors} choosenHotel={choosenHotel} />
      <HotelCheck
        themeColors={themeColors}
        title="Check-In"
        date={Functional.convertDate(
          choosenHotel?.chosen_hotel_params?.check_in,
        ).format('DD MMMM YYYY')}
      />
      <MainView marginVertical={4} />
      <HotelCheck
        themeColors={themeColors}
        title="Check-Out"
        date={Functional.convertDate(
          choosenHotel?.chosen_hotel_params?.check_out,
        ).format('DD MMMM YYYY')}
      />
      <MainView marginVertical={4} />
      <Refundable
        themeColors={themeColors}
        choosenHotelPrices={choosenHotel?.chosen_hotel_prices}
      />
    </MainView>
  );
};

export default OrderDetail;
