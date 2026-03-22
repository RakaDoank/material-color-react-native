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

		isDarkColorScheme =
			colorScheme === "dark",

		// [colors, setColors] =
		// 	// You might want to save your color preferences in a persisted storage,
		// 	// e.g. `react-native-mmkv`, `react-native-async-storage`, `@op-engineering/op-sqlite`, etc.
		// 	useState<{
		// 		schemes: typeof MD3LightTheme["colors"],
		// 		overrideIsDark?: boolean,
		// 	}>(() => {
		// 		if(AndroidDynamicColor.isSupported()) {
		// 			return {
		// 				schemes: {
		// 					...(isDarkSelf ? MD3DarkTheme.colors : MD3LightTheme.colors),
		// 					...AndroidDynamicColor.dynamic(),
		// 				},
		// 				overrideIsDark: isDarkSelf,
		// 			}
		// 		}

		// 		return {
		// 			schemes: isDarkSelf ? MD3DarkTheme.colors : MD3LightTheme.colors,
		// 			overrideIsDark: isDarkSelf,
		// 		}
		// 	}),

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
					isDark: state.withAndroidDynamicColor == "dark"
						? true
						: state.withAndroidDynamicColor == "light"
							? false
							: undefined,
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
				setState, // becaues the continous vars
			]),

		setSourceColor: ThemeContext["setSourceColor"] =
			useCallback(color => {
				setState({
					sourceColor: color,
					withAndroidDynamicColor: null,
				})
			}, [
				setState, // becaues the continous vars
			])

	const
		isDark =
			state.withAndroidDynamicColor === "dark" ||
			isDarkColorScheme,

		colors =
			state.withAndroidDynamicColor
				? androidDynamicColor
				: materialColor.colorScheme

	return (
		<ThemeContext.Provider
			value={{
				sourceColor: state.sourceColor,
				usingAndroidDynamicColor: !!state.withAndroidDynamicColor,
				colorScheme: colors,
				setAndroidDynamicColor,
				setSourceColor,
			}}
		>
			<PaperProvider
				theme={{
					colors: {
						...(isDark ? MD3DarkTheme.colors : MD3LightTheme.colors),
						...colors,
					},
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
	initialSourceColor =
		"#ffde3f",

	adaptedNavigationTheme =
		adaptNavigationTheme({
			reactNavigationLight: NavigationDefaultTheme,
			reactNavigationDark: NavigationDarkTheme,
		})
