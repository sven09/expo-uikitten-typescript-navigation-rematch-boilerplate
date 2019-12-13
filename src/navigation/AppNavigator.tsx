import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../scenes/Welcome';
import { AppRoute } from './app-routes';

const Stack = createStackNavigator();

export const AppNavigator = (props): React.ReactElement => (
  <Stack.Navigator {...props} >
    <Stack.Screen name={AppRoute.AUTH} component={WelcomeScreen}/>
  </Stack.Navigator>
);
