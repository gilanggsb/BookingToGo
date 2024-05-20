import {StyleSheet} from 'react-native';
import {Colors} from '@constants/colors';

export default StyleSheet.create({
  cardContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    backgroundColor: Colors.primary.background,
    paddingBottom: 32,
    height: '100%',
  },
  stepperContentContainer: {
    flexDirection: 'row',
    alignContent: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
