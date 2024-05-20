import React, {FC} from 'react';
import styles, {pickerSelectStyles} from './styles';
import {MainView} from '@components/MainView';
import {MainText} from '@components/MainText';
import Spacer from '@components/Spacer';
import {Button} from '@components/Button';
import {IGuest} from '@type/global';
import {Controller, useForm} from 'react-hook-form';
import {InputText} from '@components/InputText';
import {ThemeColors} from '@type/context';
import {editPaymentGuestData} from '@states/redux/paymentGuestData/paymentGuestDataSlice';
import RNPickerSelect from 'react-native-picker-select';
import {rdxDispatch} from '@states/redux';

type Props = {
  guest: IGuest;
  themeColors: ThemeColors;
  onClose: VoidCallBack;
};

const SwipeUpGuestData: FC<Props> = ({guest, themeColors, onClose}) => {
  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    formState: {errors},
  } = useForm<IGuest>({
    defaultValues: guest,
  });

  const saveGuest = () => {
    rdxDispatch(editPaymentGuestData(getValues()));
    onClose?.();
  };

  return (
    <MainView style={styles.content}>
      <MainView gap={8}>
        <MainText
          fontWeight={'600'}
          fontSize={16}
          color={themeColors.primary.base}>
          Title
        </MainText>
        <Controller
          control={control}
          name={'title'}
          rules={{required: 'Title is required.'}}
          render={({field: {onChange, value}}) => {
            return (
              <RNPickerSelect
                value={value}
                onValueChange={data => setValue('title', data)}
                items={[
                  {label: 'Mr.', value: 'Mr.'},
                  {label: 'Mrs.', value: 'Mrs.'},
                ]}
                style={pickerSelectStyles}
                placeholder={{
                  label: 'Select an option...',
                  value: null,
                  color: '#9EA0A4',
                }}
              />
            );
          }}
        />
      </MainView>
      <MainView gap={8} marginTop={12}>
        <MainText
          fontWeight={'600'}
          fontSize={16}
          color={themeColors.primary.base}>
          Name
        </MainText>
        <Controller
          control={control}
          name={'name'}
          rules={{required: 'Name is required.'}}
          render={({field: {onChange, value}}) => {
            return (
              <InputText
                errorMessage={errors.name?.message}
                height={44}
                borderWidth={1}
                borderRadius={8}
                value={value}
                labelColor={themeColors.black}
                borderColor={themeColors.dark.neutral40}
                onChangeText={onChange}
              />
            );
          }}
        />
      </MainView>

      <Spacer />
      <MainView flexDirection="row" gap={8}>
        <Button style={{flex: 1}} outline label="Close" action={onClose} />
        <Button
          style={{flex: 1}}
          label="Save"
          action={handleSubmit(saveGuest)}
        />
      </MainView>
    </MainView>
  );
};

export default SwipeUpGuestData;
