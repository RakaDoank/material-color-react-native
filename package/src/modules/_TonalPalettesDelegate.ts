import {
	hexFromArgb,
	type DynamicScheme,
} from "@material/material-color-utilities"

import type {
	ColorPalettePropName,
} from "../types"

import {
	TonalPaletteHex,
} from "./_tonal-palette-hex"

export class TonalPalettesDelegate {

	readonly primaryPalette: TonalPaletteHex
	readonly secondaryPalette: TonalPaletteHex
	readonly tertiaryPalette: TonalPaletteHex
	readonly errorPalette: TonalPaletteHex
	readonly neutralPalette: TonalPaletteHex
	readonly neutralVariantPalette: TonalPaletteHex

	static fromDynamicScheme(
		dynamicScheme: DynamicScheme,
	) {
		return new TonalPalettesDelegate({
			primaryPalette: hexFromArgb(dynamicScheme.primaryPalette.keyColor.toInt()),
			secondaryPalette: hexFromArgb(dynamicScheme.secondaryPalette.keyColor.toInt()),
			tertiaryPalette: hexFromArgb(dynamicScheme.tertiaryPalette.keyColor.toInt()),
			errorPalette: hexFromArgb(dynamicScheme.errorPalette.keyColor.toInt()),
			neutralPalette: hexFromArgb(dynamicScheme.neutralPalette.keyColor.toInt()),
			neutralVariantPalette: hexFromArgb(dynamicScheme.neutralVariantPalette.keyColor.toInt()),
		})
	}

	constructor(
		/**
		 * Provide each palette in Hex code string or Argb integer
		 */
		palettes: {
			[Key in ColorPalettePropName]: string
		},
	) {
		this.primaryPalette = new TonalPaletteHex(palettes.primaryPalette)
		this.secondaryPalette = new TonalPaletteHex(palettes.secondaryPalette)
		this.tertiaryPalette = new TonalPaletteHex(palettes.tertiaryPalette)
		this.errorPalette = new TonalPaletteHex(palettes.errorPalette)
		this.neutralPalette = new TonalPaletteHex(palettes.neutralPalette)
		this.neutralVariantPalette = new TonalPaletteHex(palettes.neutralVariantPalette)
	}

}
