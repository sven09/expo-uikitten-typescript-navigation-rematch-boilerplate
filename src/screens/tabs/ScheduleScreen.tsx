import React, { Dispatch } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, LayoutElement, Text } from 'react-native-ui-kitten';
import { InnerLayout } from '../../Layout/InnerLayout';



export const ScheduleScreen = (): LayoutElement => {
	

	return (
		<InnerLayout>
			<Layout style={styles.container}>
				<Text style={styles.text} category="h1">
				ScheduleScreen
				</Text>
				
				{/* <Button onPress={() => logoutAsync()}>Sign Out</Button> */}
			</Layout>
		</InnerLayout>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		textAlign: 'center',
	},
});
