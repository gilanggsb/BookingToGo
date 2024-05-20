import * as React from 'react';
import {Colors} from '@constants/colors';
import {ActivityIndicator, Image, Modal, StyleSheet, View} from 'react-native';
type LoadingIndicatorProps = {
  useModal?: boolean;
};

// This Component Was Made By Rahmat Saputra!
const LoadingIndicator = ({useModal = true}: LoadingIndicatorProps) => {
  const renderLoading = () => {
    return (
      <View
        style={[
          styles.container,
          {
            backgroundColor: useModal ? Colors.backgroundColorModal : '',
          },
        ]}>
        <View style={styles.card}>
          <ActivityIndicator />
        </View>
      </View>
    );
  };

  return useModal ? (
    <Modal transparent={true} visible={true}>
      {renderLoading()}
    </Modal>
  ) : (
    <View style={styles.backdrop}>{renderLoading()}</View>
  );
};

export {LoadingIndicator};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.backgroundColorModal,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    // backgroundColor: Colors.backgroundCardLoading,
    // borderRadius: 20,
    padding: 32,
  },
});
