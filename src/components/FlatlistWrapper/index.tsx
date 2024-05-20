import React, {FC} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  FlatListProps,
  ViewStyle,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

type Props<T = any> = {
  parentScrollViewStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
} & FlatListProps<T>;

const FlatlistWrapper = <T,>({parentScrollViewStyle, ...props}: Props) => {
  return (
    <ScrollView
      horizontal={false}
      style={parentScrollViewStyle || {width: '100%', height: '100%'}}>
      <ScrollView
        horizontal={true}
        scrollEnabled={false}
        style={{width: '100%', height: '100%'}}
        contentContainerStyle={{width: '100%', height: '100%'}}>
        <FlatList {...props} scrollEnabled={false} />
      </ScrollView>
    </ScrollView>
  );
};

export default FlatlistWrapper;
