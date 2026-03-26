import type {
	AndroidDynamicColor,
} from "../../modules/android-dynamic-color"

/**
 * Android Dynamic Color is only supported on Android and SDK 31 (Android 12) or latest.
 * 
 * You may use the `useAndroidDynamicColorCompat` to get consistent result, but you have to provide a source color as a fallback in case the current app is outside of the compatibility constraints.
 */
export interface UseAndroidDynamicColorCompatInstance extends AndroidDynamicColor {
}
