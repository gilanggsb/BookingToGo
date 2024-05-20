import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import IcRadioButtonOn from '@assets/svg/ic_radio_button_on.svg';
import IcRadioButtonOff from '@assets/svg/ic_radio_button_off.svg';
import {GestureDetector} from 'react-native-gesture-handler';
import {Pressable} from 'react-native';

type Props = {
  isActive: boolean;
  label: string;
  onPress?: VoidCallBack;
};

const RadioButton: FC<Props> = ({isActive, label, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <MainView style={styles.container}>
        {isActive ? (
          <IcRadioButtonOn width={18} />
        ) : (
          <IcRadioButtonOff width={18} />
        )}
        <MainText>{label}</MainText>
      </MainView>
    </Pressable>
  );
};

export default RadioButton;
