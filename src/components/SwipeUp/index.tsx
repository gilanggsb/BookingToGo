import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Modal, {ModalProps} from 'react-native-modal';
import ModalWrapper from '@components/ModalWrapper';
import {Colors} from '@constants/colors';

export type SwipeUpProps = {
  height?: number;
  isSwipeLine?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  visible?: boolean;
  coverScreen?: boolean;
  styleInnerContainer?: object;
  lineColor?: 'blue' | 'gray';
  maxHeight?: number;
  minHeight?: number;
} & Partial<ModalProps>;

const SwipeUp = ({
  visible = false,
  styleInnerContainer = {},
  height = 100,
  isSwipeLine = true,
  onClose = () => {},
  children,
  lineColor = 'blue',
  maxHeight,
  minHeight,
  ...props
}: SwipeUpProps) => {
  return (
    <Modal
      {...props}
      isVisible={visible}
      onBackdropPress={onClose}
      swipeDirection="down"
      onSwipeComplete={onClose}
      style={styles.modal}
      backdropOpacity={0.7}
      backdropColor={Colors.backgroundColorModal}>
      <View
        style={[styles.container, styleInnerContainer, {height, minHeight}]}>
        {isSwipeLine && (
          <View
            style={[
              styles.modalSwipeLine,
              {
                backgroundColor:
                  lineColor === 'blue'
                    ? Colors.primary.base
                    : Colors.dark.neutral40,
              },
            ]}
          />
        )}
        {maxHeight ? <View style={{maxHeight}}>{children}</View> : children}
      </View>
    </Modal>
  );
};

export {SwipeUp};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: Platform.OS === 'ios' ? 20 : 0,
  },
  modalSwipeLine: {
    width: 104,
    height: 4,
    marginTop: 12,
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: 'center',
  },
});
