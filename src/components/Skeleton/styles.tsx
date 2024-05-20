import {StyleSheet} from 'react-native';
import Colors from '@constants/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  skeletonBlock: {
    width: 100,
    height: 100,
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    marginVertical: 10,
  },
});
