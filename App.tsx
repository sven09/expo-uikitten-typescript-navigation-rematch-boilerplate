// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { light, mapping } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// =============================================================
// Components
// =============================================================
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppRoute } from './src/navigation/app-routes';

import { store, IRootState } from './src/rematch/store';

// =============================================================
// Component, Function
// =============================================================

const Inner = () => {

  const { activeTheme } = useSelector((state: IRootState) => {
    return {
      activeTheme: state.common.activeTheme
    };
  });

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider
        mapping={mapping}
        theme={activeTheme}>
        <SafeAreaProvider>
          <NavigationNativeContainer>
            <AppNavigator />
          </NavigationNativeContainer>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  )

}
export default (): React.ReactFragment => {


  return (
    <Provider store={store}>
      <Inner />
    </Provider>
  );
};


