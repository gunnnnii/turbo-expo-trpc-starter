import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootNavigator } from "./rootNavigator";
import type { RootParams } from './rootNavigator';
/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

const linkingConfig: LinkingOptions<RootParams> = {
	prefixes: [Linking.createURL('/')],
	config: {
		screens: {
			root: {
				screens: {
					tabOne: 'tabOne',
					tabTwo: 'tabTwo',
				},
			},
			modal: 'modal',
			notFound: '*',
		},
	},
};

export const Navigation = () => {
	return (
		<NavigationContainer linking={linkingConfig} >
			<RootNavigator />
		</NavigationContainer>
	);
};
  
