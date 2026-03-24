import {
	useColorScheme,
} from "react-native"

import {
	AndroidDynamicColor,
} from "../../modules/android-dynamic-color"

import {
	MaterialColor,
} from "../../modules/material-color"

import type {
	UseMaterialColorOptions,
} from "../use-material-color"

import type {
	UseAndroidDynamicColorCompatInstance,
} from "./UseAndroidDynamicColorCompatInstance"

/**
 * Android Dynamic Color is only supported on Android and SDK 31 (Android 12) or latest.
 * 
 * You may use this hook to get consistent result, but you have to provide a source color as a fallback in case the current app is outside of the compatibility constraints.
 */
export function useAndroidDynamicColorCompat(
	/**
	 * Provide a source color to build a material color as a fallback
	 */
	sourceColorFallback: string,
	options?: UseMaterialColorOptions,
): UseAndroidDynamicColorCompatInstance {

	const
		appColorScheme =
			useColorScheme(),

		darkOpt =
			options?.isDark ??
				appColorScheme === "dark"
				? true
				: appColorScheme === "light"
					? false
					: undefined

	if(AndroidDynamicColor.isAvailable()) {
		return new AndroidDynamicColor({
			dark: options?.isDark,
		})
	}

	const materialColor = new MaterialColor(
		sourceColorFallback,
		{
			...options,
			isDark: darkOpt,
		},
	)

	return {
		colorScheme: materialColor.colorScheme,
		primaryPalette: materialColor.primaryPalette,
		secondaryPalette: materialColor.secondaryPalette,
		tertiaryPalette: materialColor.tertiaryPalette,
		errorPalette: materialColor.errorPalette,
		neutralPalette: materialColor.neutralPalette,
		neutralVariantPalette: materialColor.neutralVariantPalette,
		theme: materialColor.theme,
	}

}
