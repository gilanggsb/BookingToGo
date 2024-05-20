import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import ModalWrapper from '@components/ModalWrapper';
import {View} from 'react-native';
import {ThemeColors} from '@type/context';
import {Button} from '@components/Button';

type Props = {
  themeColors: ThemeColors;
  onClose?: VoidCallBack;
  onSave?: VoidCallBack;
};

const PopupSaveGuestData: FC<Props> = ({themeColors, onClose, onSave}) => {
  return (
    <ModalWrapper.Container>
      <View>
        <ModalWrapper.Header title="Data Tamu" />
        <ModalWrapper.Body>
          <MainText fontSize={20} textAlign='center' fontWeight={'200'}>
            Apakah anda yakin untuk menyimpan perubahan?
          </MainText>
        </ModalWrapper.Body>
        <ModalWrapper.Footer>
          <MainView flexDirection="row" gap={12}>
            <Button
              style={{flex: 1}}
              padding={16}
              outline
              background={themeColors.white}
              action={onClose}>
              <MainText color={themeColors.dark.neutral100}>Batal</MainText>
            </Button>
            <Button style={{flex: 1}} padding={16} action={onSave}>
              <MainText color={themeColors.white}>Simpan</MainText>
            </Button>
          </MainView>
        </ModalWrapper.Footer>
      </View>
    </ModalWrapper.Container>
  );
};

export default PopupSaveGuestData;
