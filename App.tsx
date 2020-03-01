/* eslint-disable react/display-name */
// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { Provider, useSelector } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import { Linking } from 'expo';
import { useLinking } from '@react-navigation/native';

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
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import * as Localization from 'expo-localization';
import de from './src/locales/de.json';
import en from './src/locales/en.json';
import { AppRoute } from './src/navigation/AppRoute';

const resources = {
	en,
	de,
};

i18n.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		lng: Localization.locale,
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false,
		},
	});

// =============================================================
// Component, Function
// =============================================================

const Inner = () => {
	const { activeTheme } = useSelector((state: IRootState) => {
		return {
			activeTheme: state.common.activeTheme,
		};
	});

	const prefix = Linking.makeUrl('/'); // exp://10.0.20.133:19006/imprint/ in expo web

	const prefixes = [prefix].concat(['https://app.myapp.com', 'myapp://', 'http://localhost:19006', 'http://10.0.20.133:19006']);

	const ref = React.useRef();
	const { getInitialState } = useLinking(ref, {
		prefixes,

		config: {
			HomeScreen: AppRoute.HOME + '/',
			SignInScreen: AppRoute.SIGN_IN + '/',
			ImprintScreen: AppRoute.IMPRINT + '/',
		},
	});

	const [isReady, setIsReady] = React.useState(false);
	const [initialState, setInitialState] = React.useState<any>();

	React.useEffect(() => {
		getInitialState()
			.catch((error) => {
				console.log('error', error);
			})
			.then((state) => {
				if (state !== undefined) {
					setInitialState(state);
				}

				setIsReady(true);
			});
	}, [getInitialState]);

	if (!isReady) {
		return null;
	}
	console.log('initialState', initialState);

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider mapping={mapping} theme={activeTheme}>
				<SafeAreaView style={{ flex: 1 }}>
					<NavigationContainer initialState={initialState} ref={ref}>
						<AppNavigator />
					</NavigationContainer>
				</SafeAreaView>
			</ApplicationProvider>
		</>
	);
};

export default (): React.ReactFragment => {
	return (
		<Provider store={store}>
			<Inner />
		</Provider>
	);
};
