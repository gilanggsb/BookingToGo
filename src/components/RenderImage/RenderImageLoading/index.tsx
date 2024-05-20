import React, {FC} from 'react';
import {View, StyleSheet, Text, ViewStyle} from 'react-native';
import Skeleton from '@components/Skeleton';

type Props = {
  isLoading: boolean;
  placeHolderStyle: ViewStyle;
  containerStyle?: ViewStyle;
};

const RenderImageLoading: FC<Props> = ({
  isLoading,
  placeHolderStyle,
  containerStyle,
}) => {
  return (
    <View
      style={{
        position: 'absolute',
        display: isLoading ? 'flex' : 'none',
        ...containerStyle,
      }}>
      <Skeleton
        loading={isLoading}
        customSkeletonItem={<View style={placeHolderStyle} />}>
        <View />
      </Skeleton>
    </View>
  );
};

export default RenderImageLoading;
