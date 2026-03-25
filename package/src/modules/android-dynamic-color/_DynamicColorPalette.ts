import type {
	ColorPaletteHexInterface,
} from "../_color-palette-hex"

import type {
	DynamicColorPaletteTone,
} from "./_DynamicColorPaletteTone"

/**
 * We have to make `AndroidDynamicColor` instance similar as the `MaterialColor` as possible.
 * Make it easier for the library user and seamless access and integration with `react-native-paper`
 * 
 * So, we have to mock the implementation of the `ColorPaletteHex`,
 * since we can't provide the dynamic tone number.
 */
export interface DynamicColorPalette extends Pick<
	ColorPaletteHexInterface,
	| "keyColor"
> {
	tone(tone: DynamicColorPaletteTone): string,
}
