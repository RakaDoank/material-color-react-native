import type {
	DynamicScheme,
} from "@material/material-color-utilities"

import type {
	MaterialColorTonalPalettes,
} from "./MaterialColorTonalPalettes"

type Options = Omit<
	Partial<ConstructorParameters<typeof DynamicScheme>[0]>,
	| keyof MaterialColorTonalPalettes
	| "sourceColorHct"
>

/**
 * Specified material color options like Variant, Contrast Level, etc.
 * 
 * ```js
 * const defaultOptions = {
 * 	variant: MaterialColor.Variant.TONAL_SPOT,
 * 
 * 	// 0 or MaterialColor.ContrastLevelPresets.DEFAULT
 * 	contrastLevel: 0,
 * 
 * 	// React Native app color scheme
 * 	isDark: Appearance.getColorScheme() == "dark",
 * }
 * ```
 */
export interface MaterialColorOptions extends Options, Partial<Record<keyof MaterialColorTonalPalettes, string>> {
}
