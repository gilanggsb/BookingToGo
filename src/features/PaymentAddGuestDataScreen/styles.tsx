import {Dimensions, StyleSheet} from 'react-native';
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
  saveButton: {
    bottom: 0,
    position: 'absolute',
    marginBottom: 16,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 8,
  },
});
