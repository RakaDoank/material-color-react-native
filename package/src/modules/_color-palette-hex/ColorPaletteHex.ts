import {
	TonalPalette,
	argbFromHex,
	hexFromArgb,
} from "@material/material-color-utilities"

import type {
	ColorPaletteHexInterface,
} from "./ColorPaletteHexInterface"

/**
 * This class is a simple implementation of the `TonalPalette` from the `@material/material-color-utilities` to get the Hex color, instead of the Hct and Argb.
 */
export class ColorPaletteHex implements ColorPaletteHexInterface {

	readonly keyColor: string

	constructor(
		/**
		 * In Hex code
		 */
		keyColor: string,
	) {
		this.keyColor = keyColor
	}

	tone(tone: number) {
		return hexFromArgb(
			TonalPalette.fromInt(argbFromHex(this.keyColor)).tone(tone),
		)
	}

}
