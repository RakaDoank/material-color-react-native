import {
	Stack,
} from "expo-router"

import {
	SafeAreaProvider,
} from "react-native-safe-area-context"

import {
	ThemeProvider,
} from "@/providers"

export default function Layout() {

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<Stack
					screenOptions={{
						headerShown: false,
					}}
				/>
			</ThemeProvider>
		</SafeAreaProvider>
	)

}
