import {
	SafeAreaProvider,
} from "react-native-safe-area-context"

import {
	ThemeProvider,
} from "@/providers"

import {
	HomeScreen,
} from "@/screens"

export function App() {

	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<HomeScreen.Page/>
			</ThemeProvider>
		</SafeAreaProvider>
	)

}
