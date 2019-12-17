import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { WelcomeScreen } from '../scenes/Welcome';
import { AppRoute } from './app-routes';
import { useSelector } from 'react-redux';
import { IRootState } from '../rematch/store';
import { SignUpScreen, SignInScreen } from '../scenes/auth';

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
          backgroundColor: activeTheme["background-basic-color-1"],
        },
        headerTitleStyle: { color: activeTheme["text-basic-color"] },
        headerTintColor: activeTheme["text-basic-color"],
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
