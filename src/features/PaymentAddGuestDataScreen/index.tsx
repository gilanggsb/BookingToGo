import React from 'react';
import styles from './styles';
import usePaymentAddGuestData from './usePaymentAddGuestData';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import AddGuest from './components/AddGuest';
import {Pressable} from 'react-native';
import {rdxDispatch} from '@states/redux';
import {
  insertNewGuest,
  removePaymentGuestData,
} from '@states/redux/paymentGuestData/paymentGuestDataSlice';
import {FlatList} from 'react-native-gesture-handler';
import {Button} from '@components/Button';
import {SwipeUp} from '@components/index';
import {Screen} from '@utils/helpers';
import SwipeUpGuestData from './components/SwipeUpGuestData';
import ModalWrapper from '@components/ModalWrapper';
import PopupSaveGuestData from './components/PopupSaveGuestData';

const PaymentAddGuestDataScreen = () => {
  const {
    guests,
    themeColors,
    guestDataSwipeUp,
    isSwipeUpEditGuestDataVisible,
    showEditGuestData,
    hideEditGuestData,
    isPopupSaveGuestDataVisible,
    showPopupSaveGuestData,
    hidePopupSaveGuestData,
    popScreen,
  } = usePaymentAddGuestData();

  return (
    <MainView
      backgroundColor={themeColors.screen.background}
      flex={1}
      padding={16}>
      <MainView>
        <MainText
          fontSize={18}
          marginBottom={14}
          color={themeColors.primary.base}
          fontWeight={'700'}>
          Detail Pesanan
        </MainText>
        <FlatList
          data={guests}
          ItemSeparatorComponent={() => <MainView marginVertical={4} />}
          renderItem={({item}) => {
            return (
              <AddGuest
                themeColors={themeColors}
                onPressAddGuest={() => showEditGuestData(item)}
                onPressRemoveGuest={() =>
                  rdxDispatch(removePaymentGuestData(item))
                }
                guest={item}
              />
            );
          }}
        />
        <Pressable
          onPress={() => {
            rdxDispatch(insertNewGuest());
          }}>
          <MainText
            marginTop={14}
            textAlign="center"
            fontSize={16}
            marginBottom={14}
            color={themeColors.orange.base}
            textDecorationLine="underline">
            + Tambah Data Tamu
          </MainText>
        </Pressable>
      </MainView>
      <Button
        action={showPopupSaveGuestData}
        background={themeColors.orange.base}
        style={styles.saveButton}
        label="Simpan"
      />

      <SwipeUp
        visible={isSwipeUpEditGuestDataVisible}
        onClose={hideEditGuestData}
        minHeight={Screen.screenHeight * 0.35}
        children={
          <SwipeUpGuestData
            onClose={hideEditGuestData}
            themeColors={themeColors}
            guest={guestDataSwipeUp}
          />
        }
      />

      <ModalWrapper
        children={
          <PopupSaveGuestData
            themeColors={themeColors}
            onClose={hidePopupSaveGuestData}
            onSave={()=>{
              showPopupSaveGuestData();
              popScreen();
            }}
          />
        }
        isVisible={isPopupSaveGuestDataVisible}
      />

    </MainView>
  );
};

export {PaymentAddGuestDataScreen};
