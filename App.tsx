// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

import { mapping } from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from 'react-native-ui-kitten';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

// =============================================================
// Components
// =============================================================
import { AppNavigator } from './src/navigation/AppNavigator';

import { store, IRootState } from './src/rematch/store';

// =============================================================
// Translation
// =============================================================
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import * as Localization from 'expo-localization';
import de from './src/locales/de.json';
import en from './src/locales/en.json';

const resources = {
	en,
	de,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: Localization.locale,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

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


