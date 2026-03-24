import type {
	TonalPaletteHexInterface,
} from "../_tonal-palette-hex"

import type {
	DynamicColorTonalPaletteTone,
} from "./_DynamicColorTonalPaletteTone"

/**
 * We have to make `AndroidDynamicColor` instance similar as the `MaterialColor` as possible.
 * Make it easier for the library user and seamless access and integration with `react-native-paper`
 * 
 * So, we have to mock the implementation of the `TonalPaletteHex`,
 * since we can't provide the dynamic tone number.
 */
export interface DynamicColorTonalPalette extends Pick<
	TonalPaletteHexInterface,
	| "keyColor"
> {
	tone(tone: DynamicColorTonalPaletteTone): string,
}
