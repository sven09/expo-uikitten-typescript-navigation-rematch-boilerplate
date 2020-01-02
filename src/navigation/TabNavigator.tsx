// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createMaterialTopTabNavigator, MaterialTopTabBarProps, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';

import { useSelector } from 'react-redux';
import { getThemeValue } from '../../node_modules/react-native-ui-kitten/theme/theme/theme.service';

import { SplashScreen } from '../screens/SplashScreen';
import { IRootState } from '../rematch/store';
import { SignInScreen } from '../screens/auth';

import { NewsScreen } from '../screens/tabs/NewsScreen';
import { PeopleScreen } from '../screens/tabs/PeopleScreen';
import { ScheduleScreen } from '../screens/tabs/ScheduleScreen';
import { AppRoute } from './AppRoute';
import { useTranslation } from 'react-i18next';
import { LayoutIcon } from '../assets/icons';
import { Platform } from 'react-native';

// =============================================================
// Component, Function
// =============================================================
const Stack = createStackNavigator();
const TabBottom = createBottomTabNavigator();
const TabTop = createMaterialTopTabNavigator();

export const TabNavigator = (props): React.ReactElement => {
	const { t } = useTranslation();
	if (Platform.OS !== 'web') {
		return (
			<TabBottom.Navigator initialRouteName={AppRoute.NEWS}>
				<TabBottom.Screen name={AppRoute.NEWS} component={NewsScreen} options={{ title: t('News'), tabBarIcon: LayoutIcon }} />
				<TabBottom.Screen
					name={AppRoute.PEOPLE}
					component={PeopleScreen}
					options={{ title: t('People'), tabBarIcon: LayoutIcon }}
				/>
				<TabBottom.Screen
					name={AppRoute.SCHEDULE}
					component={ScheduleScreen}
					options={{ title: t('Schedule'), tabBarIcon: LayoutIcon }}
				/>
			</TabBottom.Navigator>
		);
	} else {
		return (
			<TabTop.Navigator initialRouteName={AppRoute.NEWS}>
				<TabTop.Screen name={AppRoute.NEWS} component={NewsScreen} options={{ title: t('News'), tabBarIcon: LayoutIcon }} />
				<TabTop.Screen name={AppRoute.PEOPLE} component={PeopleScreen} options={{ title: t('People'), tabBarIcon: LayoutIcon }} />
				<TabTop.Screen
					name={AppRoute.SCHEDULE}
					component={ScheduleScreen}
					options={{ title: t('Schedule'), tabBarIcon: LayoutIcon }}
				/>
			</TabTop.Navigator>
		);
	}
};
