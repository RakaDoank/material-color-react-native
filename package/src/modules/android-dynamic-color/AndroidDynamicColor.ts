import {
	Platform,
	type CodegenTypes,
} from "react-native"

import NativeAndroidDynamicColor from "../../_native-modules/NativeAndroidDynamicColor"

import type {
	ColorScheme,
} from "../../types"

import {
	ColorSchemeDelegate,
} from "../_ColorSchemeDelegate"

import type {
	AndroidDynamicColorOptions,
} from "./AndroidDynamicColorOptions"

/**
 * Returns Android Dynamic Color based on user's wallpaper and style.
 * 
 * If you instantiate the class with undefined dark option or get the instantiated class with `AndroidDynamicColor.dynamic` static method,
 * the module will returns color scheme based on user's theme setting.
 * 
 * If you are using Expo, the `userInterfaceStyle` (from expo-system-ui) configuration is ignored, because the theme (dark or light) detection is using Android native API
 */
export class AndroidDynamicColor extends ColorSchemeDelegate {

	static isSupported() {
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

	constructor(
		options?: AndroidDynamicColorOptions,
	) {
		const isDark = options?.dark
		let nativeColorScheme: CodegenTypes.UnsafeObject

		if(isDark) {
			nativeColorScheme = NativeAndroidDynamicColor.getDynamicDarkColorScheme()
		} else if(isDark === false) {
			nativeColorScheme = NativeAndroidDynamicColor.getDynamicLightColorScheme()
		} else {
			nativeColorScheme = NativeAndroidDynamicColor.getDynamicColorScheme()
		}

		super(nativeColorScheme as ColorScheme)
	}

}
