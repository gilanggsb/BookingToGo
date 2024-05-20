import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {ThemeColors} from '@type/context';
import {MainText} from '@components/MainText';
import IcChevronDownBlue from '@assets/svg/ic24_chevron_down_blue.svg';
import {InputText} from '@components/InputText';
import {Screen} from '@utils/helpers';
import {Image, Pressable} from 'react-native';
import {IMAGES} from '@utils/constants/images';
import {IGuest} from '@type/global';

type Props = {
  themeColors: ThemeColors;
  guest: IGuest;
  onPressRemoveGuest?: VoidCallBack;
  onPressAddGuest?: VoidCallBack;
};

const AddGuest: FC<Props> = ({
  themeColors,
  guest,
  onPressRemoveGuest,
  onPressAddGuest,
}) => {
  return (
    <MainView style={styles.container}>
      <Pressable
        onPress={onPressAddGuest}
        style={{flexDirection: 'row', gap: 8, flex: 2}}>
        <MainView
          style={[
            styles.typeContainer,
            {borderColor: themeColors.dark.neutral40},
          ]}>
          <MainText
            color={themeColors.primary.base}
            fontSize={16}
            fontWeight={'600'}>
            {guest.title}
          </MainText>
          <IcChevronDownBlue width={20} height={20} />
        </MainView>
        <MainView flex={2}>
          <InputText
            height={44}
            borderWidth={1}
            borderRadius={8}
            disabled={true}
            onPress={onPressAddGuest}
            value={guest.name}
            textColor={themeColors.primary.base}
            borderColor={themeColors.dark.neutral40}
            onChangeText={text => {}}
          />
        </MainView>
      </Pressable>

      <Pressable onPress={onPressRemoveGuest} style={{flex:1/5}}>
        <Image source={IMAGES.icTrash} style={{width: 28, height: 28}} />
      </Pressable>
    </MainView>
  );
};

export default AddGuest;
