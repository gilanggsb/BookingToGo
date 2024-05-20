import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {ThemeColors} from '@type/context';

type Props = {
  title: string;
  date?: string;
  themeColors: ThemeColors;
};

const HotelCheck: FC<Props> = ({date, title, themeColors}) => {
  return (
    <MainView style={styles.container}>
      <MainText fontSize={16} fontWeight={'600'}>
        {title}
      </MainText>
      <MainText
        fontSize={16}
        color={themeColors?.dark.neutral60}
        fontWeight={'400'}>
        {date}
      </MainText>
    </MainView>
  );
};

export default HotelCheck;
