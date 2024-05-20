import React from 'react';
import {
  SafeAreaView,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {styles} from './style';
import IcChevronLeft from '@assets/svg/ic24_chevron_left_white.svg';
import {Colors} from '@constants/colors';
import {Screen} from '@utils/helpers';
import {MainView} from '..';
import {useNavigate} from '@states/hooks';

type Props = {
  label?: string;
  labelContent?: React.ReactNode;
  subLabel?: string | boolean | any;
  styleLabel?: StyleProp<TextStyle>;
  styleSubLabel?: StyleProp<TextStyle>;
  iconLeft?: any;
  styleIconLeft?: any;
  onPressIconLeft?: () => void;
  iconRight?: any;
  styleIconRight?: any;
  styleContainer?: StyleProp<ViewStyle>;
  onPressIconRight?: () => void;
  paddingHorizontal?: number;
  colorLabel?: any;
  subLabelContent?: React.ReactNode;
  backgroundColor?: string;
  withoutBackButton?: boolean;
  showBackdrop?: boolean;
};

const Header = ({
  label,
  subLabel,
  styleLabel,
  styleSubLabel,
  iconLeft,
  styleIconLeft,
  onPressIconLeft,
  iconRight,
  styleIconRight,
  styleContainer,
  onPressIconRight,
  paddingHorizontal = 16,
  subLabelContent,
  labelContent,
  colorLabel = Colors.dark.neutral100,
  backgroundColor = Colors.white,
  withoutBackButton = false,
  showBackdrop = false,
}: Props) => {
  const {navigation} = useNavigate();

  return (
    <SafeAreaView
      style={{
        paddingHorizontal: paddingHorizontal,
        backgroundColor: backgroundColor,
      }}>
      <View style={[styles.container, styleContainer]}>
        <TouchableOpacity
          hitSlop={{bottom: 2, left: 2, right: 2, top: 2}}
          style={[styles.iconLeft, styleIconLeft]}
          onPress={
            onPressIconLeft
              ? onPressIconLeft
              : () => {
                  navigation.pop();
                }
          }>
          {!withoutBackButton ? (
            iconLeft ? (
              iconLeft
            ) : (
              <IcChevronLeft width={24} height={24} style={styleIconLeft} />
            )
          ) : null}
        </TouchableOpacity>

        <View style={styles.labelContainer}>
          {label || labelContent ? (
            <>
              {label && (
                <Text
                  allowFontScaling={false}
                  numberOfLines={2}
                  style={[
                    styleLabel,
                    styles.label,
                    {
                      color: colorLabel,
                      width: !iconRight ? '80%' : '60%',
                    },
                  ]}>
                  {label}
                </Text>
              )}
              {labelContent}
              {subLabel ? (
                <Text
                  allowFontScaling={false}
                  numberOfLines={2}
                  style={[
                    styleSubLabel,
                    styles.subLabel,
                    {
                      color: colorLabel,
                      width: !iconRight ? '80%' : '60%',
                    },
                  ]}>
                  {subLabel}
                </Text>
              ) : null}
              {subLabelContent}
            </>
          ) : null}
        </View>

        {iconRight && onPressIconRight ? (
          <TouchableOpacity
            style={[styleIconRight, styles.iconRight]}
            onPress={onPressIconRight}>
            {iconRight}
          </TouchableOpacity>
        ) : null}
      </View>
      {showBackdrop && (
        <MainView
          position="absolute"
          backgroundColor={Colors.backdrop}
          opacity={0.1}
          width={Screen.windowWidth}
          height={70}
        />
      )}
    </SafeAreaView>
  );
};

export {Header};
