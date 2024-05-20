import {NavigationRouteContext, useNavigation} from '@react-navigation/native';
import {INavigation, ScreenParamList} from '@type/screen';
import React from 'react';

export function useNavigate<
  T extends keyof ScreenParamList = keyof ScreenParamList,
>() {
  const route = React.useContext(NavigationRouteContext);
  const navigation = useNavigation<INavigation<T>>();

  const navigateScreen: <U>(
    screen: keyof ScreenParamList,
    params?: U,
  ) => void = <U,>(screen: keyof ScreenParamList, params?: U) => {
    if (!navigation) {
      return;
    }

    navigation?.navigate(screen as any, params);
  };

  const popScreen: VoidCallBack = (count?: number) => {
    if (!navigation) {
      return;
    }

    if (!navigation?.canGoBack()) {
      return;
    }

    return navigation?.pop(count);
  };

  const resetNavigate = (screen: keyof ScreenParamList, param?: object) => {
    if (!navigation) {
      return;
    }

    navigation?.reset({
      index: 0,
      routes: [{name: screen as never, params: param as never}],
    });
  };

  const getRouteParams: <U = T>() => U = <U,>() => {
    if (!route) {
      return {} as U;
    }

    return (route?.params as U) || ({} as U);
  };

  const getRouteNames: CallBack<string> = () => {
    if (route) {
      return route?.name;
    }

    const routeIndex = navigation?.getState()?.index;

    if (routeIndex === undefined) {
      return '';
    }

    const navRoute = navigation?.getState()?.routes[routeIndex];
    return navRoute?.name;
  };

  return {
    navigation,
    navigateScreen,
    popScreen,
    resetNavigate,
    getRouteParams,
    getRouteNames,
  };
}
