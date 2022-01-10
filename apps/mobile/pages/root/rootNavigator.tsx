import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { trpc } from '../../anchor/useQuery';
import { RootTabsNavigator, RootTabsParams } from './tabsNavigator';

export type RootParams = {
	root: NavigatorScreenParams<RootTabsParams>;
	modal: undefined;
	notFound: undefined;
}
export type RootScreenProps<Screen extends keyof RootParams> = NativeStackScreenProps<RootParams, Screen>;
const RootStack = createNativeStackNavigator<RootParams>();

const Stub = () => {
	return (
		<SafeAreaView>
			<Text>This is a screen stub</Text>
		</SafeAreaView>
	)
}
export const RootNavigator = () => {
return (
	<RootStack.Navigator>
		<RootStack.Screen component={RootTabsNavigator} name="root" options={{ headerShown: false }} />
		<RootStack.Screen component={Stub} name="notFound" />
		<RootStack.Group screenOptions={{ presentation: 'modal' }}>
			<RootStack.Screen component={Stub} name="modal" />
		</RootStack.Group>
	</RootStack.Navigator>
)
}

