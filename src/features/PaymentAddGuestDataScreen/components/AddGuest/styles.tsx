import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap:12,
    flex:1,
    alignItems:'center',
    alignContent:'center',
    justifyContent:'center',
  },
  typeContainer: {
    // width: '15%',
    flex:1/2.5,
    borderWidth: 1,
    borderRadius: 6,
    // padding: 10,
    paddingVertical:10,
    paddingHorizontal:8,
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent:'space-between',
    // gap: 4,
    alignItems: 'center',
  },
});
