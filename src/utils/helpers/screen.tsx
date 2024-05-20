import {Dimensions, Platform, StatusBar} from 'react-native';

class Screen {
  static windowHeight = Dimensions.get('window').height;
  static windowWidth = Dimensions.get('window').width;
  static screenHeight = Dimensions.get('screen').height;
  static screenWidth = Dimensions.get('screen').width;
  static statusBarHeight =
    Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
}

export {Screen};
