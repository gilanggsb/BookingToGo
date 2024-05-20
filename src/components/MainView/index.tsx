import React from 'react';
import {Pressable, View, ViewStyle} from 'react-native';
import {Functional} from '@utils/helpers';

interface MainViewProps extends ViewStyle {
  children?: React.ReactNode;
  onPress?: VoidCallBack;
  style?: ViewStyle | ViewStyle[];
}

const MainView: React.FC<MainViewProps> = MVProps => {
  const children = MVProps?.children;
  const props: MainViewProps = Functional.removeAttrFromObject(MVProps, [
    'children',
  ]);

  const dynamicStyle: ViewStyle = {
    ...props,
  };

  return (
    // <Pressable
    //   onPress={props.onPress}
    //   style={({pressed}) => [
    //     dynamicStyle,
    //     props?.style,
    //     props.onPress && {opacity: pressed ? 0.5 : 1},
    //   ]}>
    <View
      // onPress={props.onPress}
      style={[dynamicStyle, props?.style]}>
      {children}
    </View>
    // </Pressable>
  );
};

export {MainView};
