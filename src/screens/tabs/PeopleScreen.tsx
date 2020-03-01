import React, { Dispatch } from 'react';
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button, Layout, LayoutElement, Text } from 'react-native-ui-kitten';
import { InnerLayout } from '../../Layout/InnerLayout';

const DATA = [
	{
		id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
		title: 'First Item',
	},
	{
		id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
		title: 'Second Item',
	},
	{
		id: '58694a0f-3da1-471f-bd96-145571e29d72',
		title: 'Third Item',
	},
];
function Item({ id, title, selected, onSelect }) {
	return (
		<TouchableOpacity onPress={() => onSelect(id)} style={[styles.item, { backgroundColor: selected ? '#6e3b6e' : '#f9c2ff' }]}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}

export const PeopleScreen = (): LayoutElement => {
	const [selected, setSelected] = React.useState(new Map());

	const onSelect = React.useCallback(
		(id) => {
			const newSelected = new Map(selected);
			newSelected.set(id, !selected.get(id));

			setSelected(newSelected);
		},
		[selected],
	);

	return (
		<InnerLayout>
			<Layout style={styles.container}>
				<Text style={styles.text} category="h1">
					PeopleScreen
				</Text>
				<FlatList
					data={DATA}
					renderItem={({ item }) => (
						<Item id={item.id} title={item.title} selected={!!selected.get(item.id)} onSelect={onSelect} />
					)}
					keyExtractor={(item) => item.id}
					extraData={selected}
				/>

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
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 16,
	},
});
