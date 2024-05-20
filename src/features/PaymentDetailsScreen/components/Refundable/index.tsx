import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {ChosenHotelPrices} from '@type/response';
import {ThemeColors} from '@type/context';

type Props = {
  choosenHotelPrices?: ChosenHotelPrices;
  themeColors: ThemeColors;
};

const Refundable: FC<Props> = ({choosenHotelPrices, themeColors}) => {
  return (
    <MainView style={styles.container}>
      {choosenHotelPrices?.is_refundable && (
        <MainText
          color={themeColors.orange.base}
          fontWeight={'600'}
          fontSize={18}>
          Dapat direfund jika dibatalkan
        </MainText>
      )}
    </MainView>
  );
};

export default Refundable;
