import { Text } from 'react-native'
import { trpc } from "./client"

export const Welcome = () => {
	const user = trpc.userById.useQuery('1');

	// if (user.error) console.error(user.error);
	if (user.data == null) return <Text>loading...</Text>

	return <Text>{user.data?.name}</Text>
}