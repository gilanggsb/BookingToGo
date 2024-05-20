import Colors from '@utils/constants/colors';
import {Screen} from '@utils/helpers';
import {StyleSheet} from 'react-native';
// import Colors from '@constants/colors';

export default StyleSheet.create({
  cardContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    // backgroundColor: Colors.primary.background,
    paddingBottom: 32,
    height: '100%',
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: 'transparent',
    paddingTop: Screen.statusBarHeight,
  },
  gestureHandlerStyle: {
    flex: 1,
  },
});
