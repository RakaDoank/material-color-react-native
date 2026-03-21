import {
	createContext,
} from "react"

import type {
	ColorScheme,
} from "react-native-material-color"

export interface ThemeContext {
	setThemeByColor: (hexColor: string) => void,
	setColors: (colorScheme: ColorScheme, overrideIsDark?: boolean) => void,
}

export const ThemeContext =
	createContext<ThemeContext>({
		setThemeByColor() {
			// NOOP
		},
		setColors() {
			// NOOP
		},
	})
