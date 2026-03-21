import {
	useCallback,
	useState,
} from "react"

import {
	useColorScheme,
} from "react-native"

import {
	DarkTheme as NavigationDarkTheme,
	DefaultTheme as NavigationDefaultTheme,
	ThemeProvider as ReactNavigationThemeProvider,
} from "@react-navigation/native"

import {
	AndroidDynamicColor,
	MaterialColor,
} from "react-native-material-color"

import {
	MD3DarkTheme,
	MD3LightTheme,
	PaperProvider,
	adaptNavigationTheme,
} from "react-native-paper"

import {
	ThemeContext,
} from "@/contexts"

import type {
	ThemeProviderProps,
} from "./ThemeProviderProps"

export function ThemeProvider({
	children,
}: ThemeProviderProps) {

	const
		colorScheme =
			useColorScheme(),

		isDarkSelf =
			colorScheme === "dark",

		[colors, setColors] =
			// You might want to save your color preferences in a persisted storage,
			// e.g. `react-native-mmkv`, `react-native-async-storage`, `@op-engineering/op-sqlite`, etc.
			useState<{
				schemes: typeof MD3LightTheme["colors"],
				overrideIsDark?: boolean,
			}>(() => {
				if(AndroidDynamicColor.isSupported()) {
					return {
						schemes: {
							...(isDarkSelf ? MD3DarkTheme.colors : MD3LightTheme.colors),
							...AndroidDynamicColor.dynamic(),
						},
						overrideIsDark: isDarkSelf,
					}
				}

				return {
					schemes: isDarkSelf ? MD3DarkTheme.colors : MD3LightTheme.colors,
					overrideIsDark: isDarkSelf,
				}
			}),

		setThemeByColor: ThemeContext["setThemeByColor"] =
			useCallback(color => {
				const material = MaterialColor.fromSourceColor(color)
				setColors({
					schemes: {
						...(isDarkSelf ? MD3DarkTheme.colors : MD3LightTheme.colors),
						...material.colorScheme,
					},
				})
			}, [
				isDarkSelf,
				setColors, // This dep is not needed if i stop the continous vars
			]),

		/**
		 * It's for `AndroidDynamicColor`
		 */
		setColors_: ThemeContext["setColors"] =
			useCallback((colorScheme, overrideIsDark) => {
				setColors({
					schemes: {
						...(overrideIsDark ?? isDarkSelf ? MD3DarkTheme.colors : MD3LightTheme.colors),
						...colorScheme,
					},
					overrideIsDark,
				})
			}, [
				isDarkSelf,
				setColors, // This dep is not needed if i stop the continous vars
			])

	const
		isDark =
			colors.overrideIsDark ?? isDarkSelf

	return (
		<ThemeContext.Provider
			value={{
				setThemeByColor,
				setColors: setColors_,
			}}
		>
			<PaperProvider
				theme={{
					colors: colors.schemes,
				}}
			>
				<ReactNavigationThemeProvider
					value={ isDark ? {
						...MD3DarkTheme,
						...adaptedNavigationTheme.DarkTheme,
						colors: {
							...colors,
							...adaptedNavigationTheme.DarkTheme.colors,
						},
					} : {
						...MD3LightTheme,
						...adaptedNavigationTheme.LightTheme,
						colors: {
							...colors,
							...adaptedNavigationTheme.LightTheme.colors,
						},
					} }
				>
					{ children }
				</ReactNavigationThemeProvider>
			</PaperProvider>
		</ThemeContext.Provider>
	)

}

const
	adaptedNavigationTheme =
		adaptNavigationTheme({
			reactNavigationLight: NavigationDefaultTheme,
			reactNavigationDark: NavigationDarkTheme,
		})
