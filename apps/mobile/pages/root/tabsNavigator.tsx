import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react';
import { TabOne } from '../tabOne/tabOne';
import { TabTwo } from '../tabTwo/tabTwo';

export type RootTabsParams = {
	tabOne: undefined;
	tabTwo: undefined;
}
export type RootTabProps<Tab extends keyof RootTabsParams> = BottomTabScreenProps<RootTabsParams, Tab>;
const RootTabs = createBottomTabNavigator<RootTabsParams>();

export const RootTabsNavigator = () => {
	return (
		<RootTabs.Navigator>
			<RootTabs.Screen component={TabOne} name="tabOne" />
			<RootTabs.Screen component={TabTwo} name="tabTwo" />
		</RootTabs.Navigator>
	)
}