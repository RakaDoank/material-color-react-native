import {
	createContext,
} from "react"

import type {
	ColorScheme,
} from "material-color-react-native"

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
