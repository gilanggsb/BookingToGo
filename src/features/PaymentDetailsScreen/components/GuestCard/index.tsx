import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {IGuest} from '@type/global';
import {ThemeColors} from '@type/context';
import {Image} from 'react-native';
import {IMAGES} from '@utils/constants/images';

type Props = {
  guest: IGuest;
  themeColors: ThemeColors;
};

const GuestCard: FC<Props> = ({guest, themeColors}) => {
  return (
    <MainView
      style={[styles.container, {borderColor: themeColors.dark.neutral40}]}>
      <Image source={IMAGES.icPerson} style={{height: 18, width: 18}} />
      <MainText fontSize={16} fontWeight={'600'}>
        {guest.name}
      </MainText>
    </MainView>
  );
};

export default GuestCard;
