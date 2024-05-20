import React, {FC} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Toast, {ToastConfigParams, ToastProps} from 'react-native-toast-message';
import IconCloseWhite from '@assets/svg/ic_close_white.svg';
import IconCloseBlack from '@assets/svg/ic_close_black.svg';
import ChevronUp from '@assets/svg/ic24_chevron_up_grey.svg';
import {Colors} from '@utils/constants/colors';
import {styles} from './styles';

const ToastContainer: FC<ToastConfigParams<any>> = props => {
  if (props?.isVisible) {
    return (
      <View
        style={[
          styles.toastContainer,
          {
            backgroundColor:
              props.type === 'error'
                ? Colors.danger.base
                : props.type === 'warning'
                ? Colors.secondary.base
                : props.type === 'info'
                ? Colors.white
                : Colors.success.light1,
            borderWidth: 1,
            borderColor:
              props.type === 'info' ? Colors.dark.neutral40 : 'transparent',
          },
        ]}>
        <View style={{flex: 12}}>
          <Text
            style={[
              styles.toastTitle,
              {
                color:
                  props.type === 'warning' || props.type === 'info'
                    ? Colors.dark.neutral100
                    : Colors.white,
              },
            ]}>
            {props.text1}
          </Text>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              props?.onPress?.();
              props.hide?.();
            }}>
            {props?.type === 'warning' || props?.type === 'info' ? (
              <IconCloseBlack width={24} height={24} />
            ) : (
              <IconCloseWhite width={24} height={24} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const NotifContainer: FC<ToastConfigParams<any>> = props => (
  <Pressable
    onPress={() => {
      props.onPress();
      props.hide();
    }}
    style={styles.notifContainer}>
    <View style={styles.notifRow}>
      <View style={styles.notifRow2}>
        <View style={styles.notifRow3}>
          <View style={styles.notifBase}>
            <View style={styles.notifDot} />
          </View>
          <Text style={styles.notifKPText}>Kelas Pintar</Text>
        </View>
        <Text style={styles.notifBarusaja}>Baru Saja</Text>
      </View>
      <ChevronUp />
    </View>
    <View>
      <Text style={styles.notifText}>{props.text1}</Text>
      <Text style={styles.answerText}>Klik untuk melihat jawaban</Text>
    </View>
  </Pressable>
);

const LabelChartContainer: FC<ToastConfigParams<any>> = props => (
  <View style={styles.labelChartContainer}>
    <View style={styles.labelChartPointContainer}>
      <Text style={styles.labelChartPoint}>{props.text2}</Text>
    </View>
    <Text style={styles.labelChartText}>{props.text1}</Text>
  </View>
);

const toastConfig = {
  success: (props: any) => <ToastContainer {...props} />,
  error: (props: any) => <ToastContainer {...props} type="error" />,
  warning: (props: any) => <ToastContainer {...props} type="warning" />,
  notif: (props: ToastConfigParams<any>) => <NotifContainer {...props} />,
};

function ToastInstance(props: ToastProps) {
  return (
    <Toast
      autoHide
      position="bottom"
      visibilityTime={3500}
      config={toastConfig}
      keyboardOffset={12}
      {...props}
    />
  );
}

export {ToastContainer, NotifContainer, LabelChartContainer, ToastInstance};
