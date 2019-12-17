// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import { light, mapping } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// =============================================================
// Components
// =============================================================
import { AppNavigator } from './src/navigation/AppNavigator';

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
        <SafeAreaView style={{flex:1}}>
          <NavigationNativeContainer>
            <AppNavigator />
          </NavigationNativeContainer>
        </SafeAreaView>
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


