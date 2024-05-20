import React, {FC, useState} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {ThemeColors} from '@type/context';
import RadioButton from '../RadioButton';

type IOrderType = 'others' | 'self';

type Props = {
  themeColors: ThemeColors;
};

const OrderType: FC<Props> = ({themeColors}) => {
  const [orderType, setOrderType] = useState<IOrderType>('self');
  return (
    <MainView style={styles.container}>
      <RadioButton
        isActive={orderType === 'self'}
        label="Saya memesan untuk sendiri"
        onPress={() => setOrderType('self')}
      />
      <RadioButton
        isActive={orderType === 'others'}
        label="Saya memesan untuk orang lain"
        onPress={() => setOrderType('others')}
      />
    </MainView>
  );
};

export default OrderType;
