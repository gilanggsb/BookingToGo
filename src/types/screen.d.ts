import { StackNavigationProp } from '@react-navigation/stack';

interface HomeBottomTabNavigatorParams { }
interface PaymentDetailsParams { }
interface PaymentAddGuestDataParams { }

export type ScreenParamList = {
    ToastScreen: ToastScreenParams;
    PaymentDetails: PaymentDetailsParams;
    PaymentAddGuestData: PaymentAddGuestDataParams;
}

export type INavigation<RouteName extends keyof ScreenParamList = keyof ScreenParamList> =
    StackNavigationProp<ScreenParamList, T>;

export type IRoute<RouteName extends keyof ScreenParamList = keyof ScreenParamList> = RouteProp<
    ScreenParamList,
    RouteName
>;

export type IBaseScreenProps<RouteName extends keyof ScreenParamList = keyof ScreenParamList> = {
    navigation: INavigation<RouteName>;
    route: IRoute<RouteName>
}