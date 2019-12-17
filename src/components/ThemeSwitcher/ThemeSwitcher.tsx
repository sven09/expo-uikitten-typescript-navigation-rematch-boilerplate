// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { ButtonGroup, Button, Icon } from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import { useRematchDispatch, Dispatch } from '../../rematch/store';
import { THEMES } from '../../api/common';

// =============================================================
// Components
// =============================================================

// =============================================================
// Function
// =============================================================

export interface ITheme {
	themeUid: THEMES;
	icon: string;
	label: string;
}

interface ThemeSwitcherProps {
	themes?: ITheme[];
}
const standardThemes: ITheme[] = [
	{ themeUid: THEMES.light, label: 'Light', icon: 'sun-outline' },
	{ themeUid: THEMES.dark, label: 'Dark', icon: 'moon-outline' },
	{ themeUid: THEMES.custom, label: 'Custom', icon: 'color-palette-outline' },
];

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
	const { themes } = props;
	const _themes = themes ? themes : standardThemes;

	const { setTheme } = useRematchDispatch((dispatch: Dispatch) => ({
		setTheme: dispatch.common.setTheme,
	}));

	return (
		<ButtonGroup style={styles.buttonGroup}>
			{_themes.map((theme, key) => {
				const icon = (style) => <Icon {...style} name={theme.icon} />;
				return (
					<Button key={key} testID={`themeSwitcher_${theme.themeUid}`} icon={icon} onPress={() => setTheme(theme.themeUid)}>
						{theme.label}
					</Button>
				);
			})}
		</ButtonGroup>
	);
};

const styles = StyleSheet.create({
	buttonGroup: {
		marginVertical: 16,
		alignSelf: 'center',
	},
});
