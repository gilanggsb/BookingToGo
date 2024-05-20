
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setJSExceptionHandler} from 'react-native-exception-handler';
import {useEffect, useRef} from 'react';
import {errorHandler} from './utils';

export const useNavigator = () => {
  const navigation: any = useNavigation();
  const routeRef = useRef<IRouteRef>({screenStack: [], screenName: ''});

  const screenListeners = () => ({
    state: async () => {
      const currentRouteName = navigation?.getCurrentRoute()?.name;
      routeRef.current.screenName = currentRouteName;
      routeRef.current.screenStack.push(currentRouteName);
      console.log(
        '🚀 ~ file: useNavigator.tsx:22 ~ state: ~ currentRouteName:',
        currentRouteName,
      );
    },
  });

  useEffect(() => {
    // Set up the error handler
    setJSExceptionHandler((error, isFatal) => {
      errorHandler({
        error,
        isFatal,
        route: routeRef.current,
      });
    });
  }, []);

  return {screenListeners};
};
