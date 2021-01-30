import React, { FunctionComponent } from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
	},
});

export const Home: FunctionComponent = () => {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<Text>HOME</Text>
			</View>
		</SafeAreaView>
	);
};
