import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../screens/Welcome';
import { useSelector } from 'react-redux';
import { IRootState } from '../rematch/store';
import { SignInScreen } from '../screens/auth';

import { getThemeValue } from '../../node_modules/react-native-ui-kitten/theme/theme/theme.service'


export enum AppRoute {
  AUTH = 'Auth',
  SIGN_IN = 'Sign In',
}

const Stack = createStackNavigator();

export const AppNavigator = (props): React.ReactElement => {

  const { isAuthorized, activeTheme } = useSelector((state: IRootState) => {
    return {
      isAuthorized: state.auth.isAuthorized,
      activeTheme: state.common.activeTheme

    };
  });

  return (

    <Stack.Navigator {...props}
      screenOptions={{
        headerStyle: {
          // backgroundColor: getThemeValue("background-alternative-color-1", activeTheme)
          backgroundColor: getThemeValue("background-basic-color-1", activeTheme)
        },
        headerTitleStyle: { color: getThemeValue("text-primary-color", activeTheme) },
        headerTintColor: getThemeValue("text-primary-color", activeTheme),
      }}
    >
      {isAuthorized ?
        <Stack.Screen name={AppRoute.AUTH} component={WelcomeScreen} />
        :
        <Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
      }

    </Stack.Navigator>
  )
};
