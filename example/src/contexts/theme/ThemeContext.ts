import {
	createContext,
} from "react"

import {
	MaterialColor,
} from "material-color-react-native"

export interface ThemeContext {
	readonly sourceColor: string,
	readonly colorScheme: MaterialColor["colorScheme"],
	readonly usingAndroidDynamicColor: boolean,
	setAndroidDynamicColor: (theme: "light" | "dark" | "dynamic") => void,
	setSourceColor: (hexColor: string) => void,
}

export const ThemeContext =
	createContext<ThemeContext>({
		sourceColor: "#ffde3f",
		usingAndroidDynamicColor: true,
		colorScheme: new MaterialColor("#ffde3f").colorScheme,
		setAndroidDynamicColor() {
			throw new Error("You forget to wrap your React components with `ThemeProvider`")
		},
		setSourceColor() {
			throw new Error("You forget to wrap your React components with `ThemeProvider`")
		},
	})
