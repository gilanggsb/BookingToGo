import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenParamList} from '@type/screen';
import {useNavigator} from './useNavigator';
import { PaymentDetailsScreen } from '@features/PaymentDetailsScreen';
import { PaymentAddGuestDataScreen } from '@features/PaymentAddGuestDataScreen';

const Stack = createStackNavigator<ScreenParamList>();

type Props = {};

const Navigator: FC<Props> = ({}) => {
  const {screenListeners} = useNavigator();

  return (
    <Stack.Navigator
      initialRouteName="PaymentDetails"
      screenListeners={screenListeners}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'PaymentDetails'} component={PaymentDetailsScreen} />
      <Stack.Screen name={'PaymentAddGuestData'} component={PaymentAddGuestDataScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
