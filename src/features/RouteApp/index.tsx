import React from 'react';
import Navigator from './components/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {rootStore} from '@states/redux';
import {SafeAreaView, StatusBar} from 'react-native';
import styles from './styles';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ToastInstance} from '@components/ToastWrapper';
import {ThemeProvider} from '@states/context/ThemeContext';

function RouteApp(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Provider store={rootStore}>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar translucent animated networkActivityIndicatorVisible />
          <GestureHandlerRootView style={styles.gestureHandlerStyle}>
            <NavigationContainer>
              {/* List Screen */}
              <Navigator />
            </NavigationContainer>
          </GestureHandlerRootView>
          <ToastInstance />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
}

export default RouteApp;
