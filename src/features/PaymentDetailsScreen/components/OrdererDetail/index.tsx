import React, {FC} from 'react';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import OrderType from '../OrderType';
import UserDetail from '../UserDetail';
import {ThemeColors} from '@type/context';

type Props = {
  themeColors: ThemeColors;
};

const OrdererDetail: FC<Props> = ({themeColors}) => {
  return (
    <MainView margin={14}>
      <MainText fontSize={18} fontWeight={'600'}>
        Detail Pemesan
      </MainText>
      <UserDetail themeColors={themeColors} />
      <OrderType themeColors={themeColors} />
    </MainView>
  );
};

export default OrdererDetail;
