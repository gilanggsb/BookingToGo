import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import RNModal, {ModalProps} from 'react-native-modal';

import styles from './styles';
import {ToastInstance} from '@components/ToastWrapper';

type ModalWrapperProps = {
  isVisible: boolean;
  children: React.ReactNode;
  [x: string]: any;
} & Partial<ModalProps>;

const ModalWrapper = ({
  isVisible = false,
  children,
  ...props
}: ModalWrapperProps) => {
  return (
    <RNModal
      isVisible={isVisible}
      animationInTiming={800}
      animationOutTiming={800}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={800}
      {...props}>
      {children}
      <ToastInstance />
    </RNModal>
  );
};

const ModalContainer = ({children}: {children: React.ReactNode}) => (
  <View style={styles.container}>{children}</View>
);

const ModalHeader = ({title}: {title: string}) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const ModalBody = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.body}>{children}</View>
);

const ModalFooter = ({children}: {children?: React.ReactNode}) => (
  <View style={styles.footer}>{children}</View>
);

ModalWrapper.Header = ModalHeader;
ModalWrapper.Container = ModalContainer;
ModalWrapper.Body = ModalBody;
ModalWrapper.Footer = ModalFooter;

export default ModalWrapper;
