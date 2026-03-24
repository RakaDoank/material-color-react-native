import {
	useColorScheme,
} from "react-native"

import {
	AndroidDynamicColor,
} from "../../modules/android-dynamic-color"

import type {
	UseAndroidDynamicColorInstance,
} from "./UseAndroidDynamicColorInstance"

import type {
	UseAndroidDynamicColorOptions,
} from "./UseAndroidDynamicColorOptions"

/**
 * Returns Android Dynamic Color based on user's wallpaper and style.
 * It automatically updates if app color scheme changes
 * 
 * Android Dynamic Color is only supported on Android and SDK 31 (Android 12) or latest.
 * You may want to use `useAndroidDynamicColorCompat` in case the current app is not compatible, and still get the material color from a source color as a fallback.
 */
export function useAndroidDynamicColor(
	options?: UseAndroidDynamicColorOptions,
): UseAndroidDynamicColorInstance {

	useColorScheme()

	return new AndroidDynamicColor(options)

}
