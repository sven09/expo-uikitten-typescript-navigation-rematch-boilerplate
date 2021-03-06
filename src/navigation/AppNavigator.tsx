// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import { ThemeService } from '../../node_modules/react-native-ui-kitten/theme/theme/theme.service';

// import { SplashScreen } from '../screens/SplashScreen';
import { IRootState } from '../rematch/store';
import { SignInScreen } from '../screens/auth';

import { TabNavigator } from './TabNavigator';
import { AppRoute } from './AppRoute';
import { ImprintScreen } from '../screens/public/ImprintScreen';

// =============================================================
// Component, Function
// =============================================================
const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

export const AppNavigator = (props): React.ReactElement => {
	const { isAuthorized, activeTheme } = useSelector((state: IRootState) => {
		return {
			isAuthorized: state.auth.isAuthorized,
			activeTheme: state.common.activeTheme,
		};
	});
	console.log('activeTheme', activeTheme);
	if (!activeTheme) {
		return null;
	}
	return (
		<Stack.Navigator
			{...props}
			screenOptions={{
				headerStyle: {
					// backgroundColor: getThemeValue("background-alternative-color-1", activeTheme)
					backgroundColor: ThemeService.getValue('background-basic-color-1', activeTheme, 'white'),
				},
				headerTitleStyle: { color: ThemeService.getValue('text-primary-color', activeTheme, 'blue') },
				headerTintColor: ThemeService.getValue('text-primary-color', activeTheme, 'blue'),
			}}
		>
			{isAuthorized ? (
				<>
					<Stack.Screen name={AppRoute.HOME}>{() => <TabNavigator />}</Stack.Screen>
				</>
			) : (
				<>
					<Stack.Screen name={AppRoute.SIGN_IN} component={SignInScreen} />
				</>
			)}
			<Stack.Screen name={AppRoute.IMPRINT} component={ImprintScreen} />
		</Stack.Navigator>
	);
};
