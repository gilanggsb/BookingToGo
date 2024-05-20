import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {ThemeColors} from '@type/context';

type Props = {
  themeColors: ThemeColors;
};

const UserDetail: FC<Props> = ({themeColors}) => {
  return (
    <MainView
      style={[styles.container, {borderColor: themeColors.dark.neutral40}]}>
      <MainView>
        <MainText
          fontSize={16}
          color={themeColors.text.base}
          fontWeight={'600'}>
          Tn. Andreas Andreas
        </MainText>

        <MainText color={themeColors.dark.neutral50}>
          andreas@gmail.com
        </MainText>
        <MainText color={themeColors.dark.neutral50}>
          +628 22 2222 2222
        </MainText>
      </MainView>
      <MainView justifyContent="center">
        <MainText
          color={themeColors.primary.base}
          fontSize={16}
          textDecorationLine="underline">
          Ubah
        </MainText>
      </MainView>
    </MainView>
  );
};

export default UserDetail;
