import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trpc } from '../../backend/useQuery';
import { Button } from 'ui'
import { RootTabProps } from '../root/tabsNavigator';

export const TabTwo = (props: RootTabProps<'tabTwo'>) => {
	const { data = '...', refetch } = trpc.useQuery(['hello'])

	return (
		<SafeAreaView>
			<Text>This is tab two stub</Text>
			<Button title={data} onPress={() => refetch()} />
		</SafeAreaView>
	)
}
