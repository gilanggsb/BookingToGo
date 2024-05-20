/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {
  Platform,
  Pressable,
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Text, TextInput} from 'react-native-paper';
import {Colors} from '@constants/colors';
import IconOpenEye from '@assets/svg/ic_open_eye.svg';
import IconCloseEye from '@assets/svg/ic_close_eye.svg';
import Fonts from '@constants/fonts';
import useMergeState from '@states/hooks/useMergeState';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';
import {useThemeContext} from '@states/hooks';

export type InputTextProps = {
  label?: string;
  labelColor?: string;
  error?: boolean;
  success?: boolean;
  placeholder?: string;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  icon?: any;
  leftIcon?: any;
  ledIconColor?: IconSource;
  rightIcon?: any;
  iconColor?: string;
  onPressIcon?: () => void;
  errorMessage?: string;
  errorMessageStyle?: any;
  successMessage?: string;
  successMessageStyle?: any;
  value?: any;
  onChangeText: (text: string) => void;
  onBlur?: (text: any) => void;
  onFocus?: (text: any) => void;
  maxLength?: any;
  leftOnPressIcon?: any;
  leftIconColor?: any;
  disabled?: any;
  inputMode?: TextInputProps['inputMode'];
  top?: number;
  bottom?: number;
  isNotOutline?: boolean;
  secure?: boolean;
  borderColor?: string;
  backgroundColor?: string;
  borderWidth?: number;
  ref?: any;
  keyboardType?: TextInputProps['keyboardType'];
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  returnKeyType?: ReturnKeyTypeOptions;
  inputTextStyle?: TextStyle;
  borderRadius?: any;
  multiline?: any;
  maskEntry?: any;
  placeholderTextColor?: any;
  onPress?: TextInputProps['onPressOut'];
  subLabel?: string;
  subLabelStyle?: any;
  editable?: boolean;
  autoCapitalize?: TextInputProps['autoCapitalize'];
  onEndEditing?: TextInputProps['onEndEditing'];
  disabledRightIcon?: boolean;
  defaultValue?: string;
  testID?: string;
  customRightText?: React.JSX.Element;
  textColor?: string;
};

type InputTextPropsRef = {
  current: TextInputProps;
};

const InputText: FC<InputTextProps> = ({
  label,
  labelColor,
  width,
  height,
  error,
  success,
  placeholder,
  leftIcon,
  ledIconColor,
  rightIcon,
  iconColor,
  onPressIcon,
  errorMessage,
  errorMessageStyle,
  successMessage,
  successMessageStyle,
  value,
  maxLength,
  onChangeText,
  top = 0,
  bottom = 0,
  isNotOutline,
  secure,
  leftOnPressIcon,
  leftIconColor,
  disabled,
  inputMode,
  borderColor,
  backgroundColor,
  borderWidth,
  keyboardType,
  returnKeyType,
  onBlur,
  onFocus,
  onSubmitEditing,
  inputTextStyle,
  borderRadius,
  multiline,
  editable,
  maskEntry = false,
  placeholderTextColor,
  onEndEditing,
  subLabelStyle,
  disabledRightIcon,
  defaultValue,
  testID,
  customRightText,
  textColor,
  ...props
}) => {
  const [state, setState] = useMergeState({
    isMaskEntry: maskEntry,
  });
  const {isMaskEntry} = state;
  const {themeColors} = useThemeContext();
  return (
    <View
      style={{
        marginTop: top,
        marginBottom: bottom,
        width: width ?? '100%',
      }}>
      {label && (
        <Text
          style={{
            color: labelColor ?? Colors.dark.neutral100,
            letterSpacing: 0.25,
            lineHeight: 22,
            fontFamily: Fonts.RegularPoppins,
          }}>
          {label}
        </Text>
      )}
      <Pressable onPress={props.onPress}>
        <TextInput
          testID={testID}
          multiline={multiline ?? false}
          disabled={disabled}
          // onPressOut={props.onPress}
          onEndEditing={onEndEditing}
          mode="outlined"
          inputMode={inputMode}
          secureTextEntry={isMaskEntry}
          activeOutlineColor={
            isNotOutline ? Colors.dark.neutral10 : Colors.primary.base
          }
          textColor={textColor}
          editable={editable}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType ? keyboardType : 'default'}
          blurOnSubmit={false}
          onBlur={onBlur}
          onFocus={onFocus}
          style={{
            height:height,
            fontWeight: Platform.OS === 'android' ? 'bold' : '600',
            fontSize: 16,
            textAlignVertical: 'top',
            fontFamily: Fonts.SemiBoldPoppins,
            borderColor: borderColor ? borderColor : 'transparent',
            backgroundColor: backgroundColor
              ? backgroundColor
              : isNotOutline
                ? themeColors.dark.neutral10
                : themeColors.input.background,
            width: width,
            ...inputTextStyle,
          }}
          outlineStyle={{
            
            borderRadius: borderRadius ?? 30,
            borderColor: borderColor
              ? borderColor
              : errorMessage
                ? themeColors.danger.base
                : successMessage
                  ? themeColors.success.base
                  : isNotOutline
                    ? themeColors.dark.neutral10
                    : themeColors.input.border,
            borderWidth: errorMessage || successMessage ? 1 : borderWidth,
          }}
          error={error}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          right={
            rightIcon ? (
              <TextInput.Icon
                icon={rightIcon}
                onPress={onPressIcon}
                color={() => iconColor}
                disabled={disabledRightIcon ?? disabled}
                size={24}
              />
            ) : secure ? (
              <TextInput.Icon
                icon={isMaskEntry ? IconCloseEye : IconOpenEye}
                onPress={() => {
                  setState({isMaskEntry: !isMaskEntry});
                }}
                color={() => iconColor}
                size={20}
              />
            ) : (
              customRightText
            )
          }
          left={
            leftIcon ? (
              <TextInput.Icon
                icon={leftIcon}
                iconColor={ledIconColor}
                onPress={leftOnPressIcon}
                color={() => leftIconColor}
                size={20}
              />
            ) : null
          }
          onChangeText={text => onChangeText?.(text)}
          value={value}
          maxLength={maxLength}
          {...props}
          autoCapitalize={props.autoCapitalize}
          defaultValue={defaultValue}
        />

        {props.subLabel && (
          <Text style={[styles.subLabel, subLabelStyle && subLabelStyle]}>
            {props.subLabel}
          </Text>
        )}

        {errorMessage ? (
          <Text style={[styles.errorHelperText, errorMessageStyle]}>
            {errorMessage}
          </Text>
        ) : null}

        {successMessage ? (
          <Text style={[styles.successHelperText, successMessageStyle]}>
            {successMessage}
          </Text>
        ) : null}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  errorHelperText: {
    marginTop: 4,
    color: Colors.danger.base,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
  },
  successHelperText: {
    marginTop: 4,
    color: Colors.success.base,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    fontFamily: 'Poppins-Regular',
  },
  subLabel: {
    fontFamily: 'Poppins-Regular',
    color: Colors.dark.neutral60,
    fontSize: 12,
    marginTop: 8,
  },
});

export {InputText};
