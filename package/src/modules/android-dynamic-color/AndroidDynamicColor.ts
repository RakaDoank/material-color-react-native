import {
	Platform,
} from "react-native"

import NativeAndroidDynamicColor from "../../_native-modules/NativeAndroidDynamicColor"

import {
	ColorSchemeDelegate,
} from "../_ColorSchemeDelegate"

import type {
	AndroidDynamicColorInterface,
} from "./AndroidDynamicColorInterface"

import type {
	AndroidDynamicColorOptions,
} from "./AndroidDynamicColorOptions"

import {
	DynamicColorPalettesDelegate,
} from "./_DynamicColorPalettesDelegate"

import type {
	DynamicColorReadableMap,
} from "./_DynamicColorReadableMap"

/**
 * Returns Android Dynamic Color based on user's wallpaper and style.
 * 
 * If you instantiate the class with undefined dark option or get the instantiated class with `AndroidDynamicColor.dynamic` static method,
 * the module will returns color scheme based on user's theme setting.
 * 
 * If you are using Expo, the `userInterfaceStyle` (from expo-system-ui) configuration, or other frameworks configuration is ignored, because the theme (dark or light) detection is using Android native API
 */
export class AndroidDynamicColor
	extends DynamicColorPalettesDelegate
	implements AndroidDynamicColorInterface {

	/**
	 * Check if Android Dynamic Color is available on the current SDK level
	 */
	static isAvailable() {
		// Actually, there is an API existed on

		// com.google.android.material.color.DynamicColors
		// https://github.com/material-components/material-components-android/blob/master/lib/java/com/google/android/material/color/DynamicColors.java

		// The class has a static `isDynamicColorAvailable` method
		// that introduces much more validation with device manufacturers
		// I don't know why Google has to list those manufacturers
		// Should we use that?

		return Platform.OS === "android" &&
			Platform.constants.Version >= 31
	}

	static dynamic() {
		return new AndroidDynamicColor()
	}

	static dark() {
		return new AndroidDynamicColor({
			dark: true,
		})
	}

	static light() {
		return new AndroidDynamicColor({
			dark: false,
		})
	}

	readonly colorScheme: AndroidDynamicColorInterface["colorScheme"]

	readonly theme: AndroidDynamicColorInterface["theme"]

	constructor(
		options?: AndroidDynamicColorOptions,
	) {
		const isDark = options?.dark

		/**
		 * `ColorScheme` including the palettes
		 */
		let dynamicColor: DynamicColorReadableMap

		if(isDark) {
			dynamicColor = NativeAndroidDynamicColor.getDynamicDarkColor() as DynamicColorReadableMap
		} else if(isDark === false) {
			dynamicColor = NativeAndroidDynamicColor.getDynamicLightColor() as DynamicColorReadableMap
		} else {
			dynamicColor = NativeAndroidDynamicColor.getDynamicColor() as DynamicColorReadableMap
		}

		super(dynamicColor)

		this.colorScheme = new ColorSchemeDelegate(dynamicColor)

		this.theme =
			isDark === true
				? "dark"
				: isDark === false
					? "light"

					// It's intended conditional check here
					// see this class description
					: dynamicColor.isDark ? "dark" : "light"
	}

}
