// =============================================================
// React, React Native, Expo, etc.
// =============================================================
import React from 'react';
import { StyleSheet } from 'react-native';

// =============================================================
// Components
// =============================================================

import { Layout, Text } from 'react-native-ui-kitten';
import { InnerLayout } from '../../Layout/InnerLayout';

// =============================================================
// Component, Function
// =============================================================

export const ImprintScreen = () => {
	return (
		<InnerLayout>
			<Text style={styles.text} category="h1">
				Imprint
			</Text>
			<Layout style={{ marginHorizontal: 10 }}>
				<Text>Imprint Text</Text>
			</Layout>
		</InnerLayout>
	);
};

const styles = StyleSheet.create({
	text: {
		margin: 8,
	},
});
