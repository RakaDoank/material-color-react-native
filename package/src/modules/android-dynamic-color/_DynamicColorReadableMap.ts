import type {
	ColorScheme,
} from "../../types"

import type {
	DynamicColorTonalPaletteTone,
} from "./_DynamicColorTonalPaletteTone"

/**
 * From React Native Turbo Module
 * 
 * See the `package/android/src/main/java/com/audira/lib/materialcolorreactnative/AndroidDynamicColorModule.kt`
 */
export type DynamicColorReadableMap =
	& ColorScheme
	& {
		[PaletteKey in `${"primary" | "secondary" | "tertiary" | "tertiaryPalette" | "neutral" | "neutralVariant"}${DynamicColorTonalPaletteTone}`]: string
	}
	& {
		isDark: boolean
	}
