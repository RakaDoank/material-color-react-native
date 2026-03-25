import {
	hexFromArgb,
	type DynamicScheme,
} from "@material/material-color-utilities"

import type {
	ColorPalettePropName,
} from "../types"

import {
	ColorPaletteHex,
} from "./_color-palette-hex"

export class ColorPalettesDelegate {

	readonly primaryPalette: ColorPaletteHex
	readonly secondaryPalette: ColorPaletteHex
	readonly tertiaryPalette: ColorPaletteHex
	readonly errorPalette: ColorPaletteHex
	readonly neutralPalette: ColorPaletteHex
	readonly neutralVariantPalette: ColorPaletteHex

	static fromDynamicScheme(
		dynamicScheme: DynamicScheme,
	) {
		return new ColorPalettesDelegate({
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
		this.primaryPalette = new ColorPaletteHex(palettes.primaryPalette)
		this.secondaryPalette = new ColorPaletteHex(palettes.secondaryPalette)
		this.tertiaryPalette = new ColorPaletteHex(palettes.tertiaryPalette)
		this.errorPalette = new ColorPaletteHex(palettes.errorPalette)
		this.neutralPalette = new ColorPaletteHex(palettes.neutralPalette)
		this.neutralVariantPalette = new ColorPaletteHex(palettes.neutralVariantPalette)
	}

}
