import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {ThemeColors} from '@type/context';
import GuestCard from '../GuestCard';
import {guestsData} from '@states/redux/paymentGuestData/paymentGuestDataSlice';
import {useAppSelector} from '@states/redux';
import FlatlistWrapper from '@components/FlatlistWrapper';
import {Pressable} from 'react-native';
import {useNavigate} from '@states/hooks';
import { IFlatListItem, IGuest } from '@type/global';

type Props = {themeColors: ThemeColors};

const GuestData: FC<Props> = ({themeColors}) => {
  const guests = useAppSelector(guestsData);
  const {navigateScreen} = useNavigate();
  const onPressChangeGuestData = () => {
    navigateScreen('PaymentAddGuestData');
  };

  return (
    <MainView style={styles.container}>
      <MainText fontSize={18} fontWeight={'600'}>
        Data Tamu
      </MainText>
      <FlatlistWrapper
        data={guests}
        renderItem={({item}:IFlatListItem<IGuest>) => (
          <GuestCard themeColors={themeColors} guest={item} />
        )}
        ListFooterComponent={() => (
          <Pressable
            onPress={onPressChangeGuestData}
            style={pressed => ({
              opacity: pressed ? 0.5 : 1,
            })}>
            <MainText
              textAlign="right"
              fontSize={15}
              color={themeColors.primary.base}
              textDecorationLine="underline">
              Ubah Data Tamu
            </MainText>
          </Pressable>
        )}
      />
    </MainView>
  );
};

export default GuestData;
