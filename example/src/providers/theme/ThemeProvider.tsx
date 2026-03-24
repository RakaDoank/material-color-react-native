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
	useAndroidDynamicColorCompat,
	useMaterialColor,
} from "material-color-react-native"

import {
	PaperColorAdapter,
} from "material-color-react-native/react-native-paper"

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
		appColorScheme =
			useColorScheme(),

		isDarkColorScheme =
			appColorScheme === "dark",

		[state, setState] =
			useState<{
				sourceColor: string,
				withAndroidDynamicColor: "light" | "dark" | "dynamic" | null,
			}>({
				sourceColor: initialSourceColor,
				withAndroidDynamicColor: null,
			}),

		androidDynamicColor =
			useAndroidDynamicColorCompat(
				state.sourceColor,
				{
					isDark: state.withAndroidDynamicColor === "dynamic" || !state.withAndroidDynamicColor
						? undefined
						: state.withAndroidDynamicColor === "dark",
				},
			),

		materialColor =
			useMaterialColor(state.sourceColor),

		setAndroidDynamicColor: ThemeContext["setAndroidDynamicColor"] =
			useCallback(theme => {
				setState(currState => ({
					sourceColor: currState.sourceColor,
					withAndroidDynamicColor: theme,
				}))
			}, [
				setState, // because the continous vars
			]),

		setSourceColor: ThemeContext["setSourceColor"] =
			useCallback(color => {
				setState({
					sourceColor: color,
					withAndroidDynamicColor: null,
				})
			}, [
				setState, // because the continous vars
			])

	const
		isDark =
			state.withAndroidDynamicColor
				? androidDynamicColor.theme === "dark"
				: isDarkColorScheme,

		colorScheme =
			state.withAndroidDynamicColor
				? androidDynamicColor.colorScheme
				: materialColor.colorScheme

	return (
		<ThemeContext.Provider
			value={{
				sourceColor: state.sourceColor,
				usingAndroidDynamicColor: !!state.withAndroidDynamicColor,
				colorScheme,
				setAndroidDynamicColor,
				setSourceColor,
			}}
		>
			<PaperProvider
				theme={{
					isV3: true,
					dark: isDark,
					colors: state.withAndroidDynamicColor
						? PaperColorAdapter.fromAndroidDynamicColor(androidDynamicColor)
						: PaperColorAdapter.fromMaterialColor(materialColor),
				}}
			>
				<ReactNavigationThemeProvider
					value={ isDark ? {
						...MD3DarkTheme,
						...adaptedNavigationTheme.DarkTheme,
						colors: {
							...colorScheme,
							...adaptedNavigationTheme.DarkTheme.colors,
						},
					} : {
						...MD3LightTheme,
						...adaptedNavigationTheme.LightTheme,
						colors: {
							...colorScheme,
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
	initialSourceColor =
		"#ffde3f",

	adaptedNavigationTheme =
		adaptNavigationTheme({
			reactNavigationLight: NavigationDefaultTheme,
			reactNavigationDark: NavigationDarkTheme,
		})
