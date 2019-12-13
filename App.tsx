import React from 'react';
import { YellowBox } from 'react-native';
import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  light,
  mapping,
} from '@eva-design/eva';
import {
  ApplicationProvider,
  IconRegistry,
} from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppRoute } from './src/navigation/app-routes';

export default (): React.ReactFragment => {

  // This value is used to determine the initial screen
  const isAuthorized: boolean = true;

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack}/>
      <ApplicationProvider
        mapping={mapping}
        theme={light}>
        <SafeAreaProvider>
          <NavigationNativeContainer>
            <AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH}/>
          </NavigationNativeContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </React.Fragment>
  );
};


