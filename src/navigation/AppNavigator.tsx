// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { getThemeValue } from '../../node_modules/react-native-ui-kitten/theme/theme/theme.service';

import { SplashScreen } from '../screens/SplashScreen';
import { IRootState } from '../rematch/store';
import { SignInScreen } from '../screens/auth';

import { TabNavigator } from './TabNavigator';
import { AppRoute } from './AppRoute';

// =============================================================
// Component, Function
// =============================================================
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigator = (props): React.ReactElement => {
	const { isAuthorized, activeTheme } = useSelector((state: IRootState) => {
		return {
			isAuthorized: state.auth.isAuthorized,
			activeTheme: state.common.activeTheme,
		};
	});

	return (
		<Stack.Navigator
			{...props}
			screenOptions={{
				headerStyle: {
					// backgroundColor: getThemeValue("background-alternative-color-1", activeTheme)
					backgroundColor: getThemeValue('background-basic-color-1', activeTheme),
				},
				headerTitleStyle: { color: getThemeValue('text-primary-color', activeTheme) },
				headerTintColor: getThemeValue('text-primary-color', activeTheme),
			}}
		>
			{isAuthorized ? (
			  <Stack.Screen name={AppRoute.HOME}>
			  {() => (
				<TabNavigator />
			  )}
			</Stack.Screen>
			) : (
				<Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
			)}
		</Stack.Navigator>
	);
};
