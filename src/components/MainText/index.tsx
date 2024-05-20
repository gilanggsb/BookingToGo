import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';
import Fonts from '@constants/fonts';
import {Functional} from '@utils/helpers';
import {useThemeContext} from '@states/hooks';

interface MainTextProps extends TextStyle {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  type?: FontType;
  textProps?: TextProps;
}

type FontType = 'SemiBold' | 'Regular' | 'Bold' | undefined;
// d432002ff9f042e69fbba79ddf002f9d
const MainText: React.FC<MainTextProps> = MTProps => {
  const {themeColors} = useThemeContext();
  const children = MTProps?.children;
  const type: FontType = MTProps?.type;
  const customStyle = MTProps?.style;
  const props: MainTextProps = Functional.removeAttrFromObject(MTProps, [
    'type',
    'children',
    'style',
    'textProps'
  ]);

  const dynamicStyle: TextStyle = {
    color: props?.color || themeColors.text.base,
    fontFamily:
      props?.fontFamily ?? type === 'SemiBold'
        ? Fonts.SemiBoldPoppins
        : type === 'Bold'
        ? Fonts.BoldPoppins
        : Fonts.RegularPoppins,
    fontWeight: type === 'SemiBold' || type === 'Bold' ? '600' : '400',
    fontSize: props?.fontSize ?? 14,
    // lineHeight: props?.lineHeight ?? 18,
    // letterSpacing: props?.letterSpacing ?? 0.25,
    ...props,
  };

  return (
    <Text style={[dynamicStyle, customStyle]} {...MTProps.textProps}>
      {children}
    </Text>
  );
};

export {MainText};
export type {MainTextProps};
