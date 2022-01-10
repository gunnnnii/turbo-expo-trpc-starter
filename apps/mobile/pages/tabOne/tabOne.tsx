import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'ui';
import { trpc } from '../../backend/useQuery';
import { RootTabProps } from '../root/tabsNavigator';

export const TabOne = (props: RootTabProps<'tabOne'>) => {
	const { data = 'nothing', refetch } = trpc.useQuery(['hello'])

	return (
		<SafeAreaView>
			<Text>This is tab one stub {data} </Text>
            <Button title={data} onPress={() => refetch()} />
		</SafeAreaView>
	)
}
