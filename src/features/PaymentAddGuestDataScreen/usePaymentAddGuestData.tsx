import {Header} from '@components/index';
import {useDisclosure, useNavigate, useThemeContext} from '@states/hooks';
import {guestsData} from '@states/redux/paymentGuestData/paymentGuestDataSlice';
import {IGuest} from '@type/global';
import {useLayoutEffect} from 'react';
import {useSelector} from 'react-redux';

const usePaymentAddGuestData = () => {
  const {popScreen, navigation} = useNavigate();
  const {themeColors} = useThemeContext();
  const guests = useSelector(guestsData);
  const {
    isVisible: isSwipeUpEditGuestDataVisible,
    data: guestDataSwipeUp,
    show: showEditGuestData,
    hide: hideEditGuestData,
  } = useDisclosure<boolean, IGuest>();

  const {
    isVisible: isPopupSaveGuestDataVisible,
    show: showPopupSaveGuestData,
    hide: hidePopupSaveGuestData,
  } = useDisclosure();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: () => (
        <Header
          label={'Tambah Data Tamu'}
          backgroundColor={themeColors.primary.base}
          colorLabel={themeColors.white}
        />
      ),
    });
  }, []);

  return {
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
  };
};
export default usePaymentAddGuestData;
