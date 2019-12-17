// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React, { ReactNode } from 'react';
import { Layout } from 'react-native-ui-kitten';
import { useMediaQuery } from 'react-responsive';

import { ScrollView } from 'react-native-gesture-handler';
import { ThemeSwitcher } from '../components/ThemeSwitcher/ThemeSwitcher';

// =============================================================
// Constants & Interfaces
// =============================================================
// =============================================================
// Colors & Styles
// =============================================================

// =============================================================
// Components
// =============================================================

// =============================================================
// Component, Function
// =============================================================

interface LayoutProps {
	title?: string;
	children?: ReactNode | ReactNode[];
}

export const InnerLayout: React.FC<LayoutProps> = (props) => {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-device-width: 1224px)',
	});

	return (
		<Layout style={{ flex: 1 }}>
			<ScrollView>
				<Layout
					style={{
						width: isDesktopOrLaptop ? 800 : null,
						alignSelf: isDesktopOrLaptop ? 'center' : null,
						paddingHorizontal: isDesktopOrLaptop ? 10 : null,
						marginTop: 20,
					}}
				>
					{props.children}
					<ThemeSwitcher />
				</Layout>
			</ScrollView>
		</Layout>
	);
};
