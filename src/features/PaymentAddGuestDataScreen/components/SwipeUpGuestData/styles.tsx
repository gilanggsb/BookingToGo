import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

export default StyleSheet.create({
  container: {},
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  selectedValue: {
    marginTop: 16,
    fontSize: 16,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: Colors.dark.neutral40,
    borderRadius: 4,
    color: Colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: Colors.dark.neutral40,
    borderRadius: 8,
    color: Colors.black,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});