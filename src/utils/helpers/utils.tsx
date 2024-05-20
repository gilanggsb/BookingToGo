import Toast, {ToastShowParams} from 'react-native-toast-message';

const showErrorToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'error',
    text1: message || 'Terjadi Kesalahan',
  });
};

const showSuccessToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'success',
    text1: message,
  });
};

const showWarningToast = (message: string, params?: ToastShowParams) => {
  Toast.show({
    ...params,
    type: 'warning',
    text1: message || 'Terjadi Kesalahan',
  });
};
export {showErrorToast, showSuccessToast, showWarningToast};
