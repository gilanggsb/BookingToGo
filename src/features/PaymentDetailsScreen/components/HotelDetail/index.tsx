import React, {FC} from 'react';
import styles from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import {GetChosenHotel} from '@type/response';
import {ThemeColors} from '@type/context';
import RenderImage from '@components/RenderImage';
import {Functional} from '@utils/helpers';

type Props = {
  choosenHotel?: GetChosenHotel;
  themeColors: ThemeColors;
};

const HotelDetail: FC<Props> = ({choosenHotel, themeColors}) => {
  const choosenHotelParams = choosenHotel?.chosen_hotel_params;
  const choosenHotelDetails = choosenHotel?.chosen_hotel_detail;
  const choosenHotelRoom = choosenHotel?.chosen_hotel_room;

  const totalGuest =
    (choosenHotelParams?.guest_adult || 0) +
    (choosenHotelParams?.guest_children || 0) +
    (choosenHotelParams?.guest_infant || 0);
  const totalStay = Functional.convertDate(choosenHotelParams?.check_out).diff(
    Functional.convertDate(choosenHotelParams?.check_in),
    'day',
  );

  return (
    <MainView
      style={[styles.container, {borderColor: themeColors.dark.neutral40}]}>
      <RenderImage
        style={styles.image}
        placeholder={<MainView style={styles.image} />}
        resizeMode="cover"
        imageUrl={choosenHotelDetails?.images?.[0].thumbnail || ''}
      />
      <MainView gap={2}>
        <MainText
          fontSize={16}
          color={themeColors.primary.base}
          fontWeight={'600'}>
          {choosenHotelDetails?.hotel_name}
        </MainText>

        <MainView flexDirection="row">
          <MainText color={themeColors.dark.neutral50}>
            {choosenHotelRoom?.room_name}
          </MainText>

          {choosenHotelRoom?.meal && (
            <MainText color={themeColors.dark.neutral50}>
              {' '}
              with {choosenHotelRoom?.meal}
            </MainText>
          )}
        </MainView>

        <MainView flexDirection="row">
          <MainText color={themeColors.dark.neutral50}>
            {choosenHotelParams?.total_room} Kamar •
          </MainText>

          <MainText color={themeColors.dark.neutral50}>
            {totalGuest} Tamu •
          </MainText>

          <MainText color={themeColors.dark.neutral50}>
            {totalStay} Malam
          </MainText>
        </MainView>
      </MainView>
    </MainView>
  );
};

export default HotelDetail;
