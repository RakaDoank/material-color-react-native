import {
	ColorPaletteHex,
} from "../_color-palette-hex"

import type {
	DynamicColorPalette,
} from "./_DynamicColorPalette"

import type {
	DynamicColorReadableMap,
} from "./_DynamicColorReadableMap"

export class DynamicColorPalettesDelegate {

	readonly primaryPalette: DynamicColorPalette
	readonly secondaryPalette: DynamicColorPalette
	readonly tertiaryPalette: DynamicColorPalette
	readonly errorPalette: DynamicColorPalette
	readonly neutralPalette: DynamicColorPalette
	readonly neutralVariantPalette: DynamicColorPalette

	constructor(
		dynamicColor: DynamicColorReadableMap,
	) {

		this.primaryPalette = {
			keyColor: dynamicColor.primary,
			tone(tone) {
				return dynamicColor[`primary${tone}` as keyof DynamicColorReadableMap] as string
					?? dynamicColor.primary // fallback
			},
		}

		this.secondaryPalette = {
			keyColor: dynamicColor.secondary,
			tone(tone) {
				return dynamicColor[`secondary${tone}` as keyof DynamicColorReadableMap] as string
					?? dynamicColor.secondary // fallback
			},
		}

		this.tertiaryPalette = {
			keyColor: dynamicColor.tertiary,
			tone(tone) {
				return dynamicColor[`tertiary${tone}` as keyof DynamicColorReadableMap] as string
					?? dynamicColor.tertiary // fallback
			},
		}

		this.neutralPalette = {
			// At this moment we don't know how to retrieve the key color
			// of neutral palette
			// We've assumed that user is using Default Contrast (1)
			keyColor: dynamicColor.neutral50,
			tone(tone) {
				return dynamicColor[`neutral${tone}` as keyof DynamicColorReadableMap] as string
					?? dynamicColor.neutral50 // fallback
			},
		}

		this.neutralVariantPalette = {
			// At this moment we don't know how to retrieve the key color
			// of neutralVariant palette
			// We've assumed that user is using Default Contrast (1)
			keyColor: dynamicColor.neutralVariant50,
			tone(tone) {
				return dynamicColor[`neutralVariant${tone}` as keyof DynamicColorReadableMap] as string
					?? dynamicColor.neutralVariant50 // fallback
			},
		}

		// Fix: Error palette does not exist
		// Desperately use the "error" color as the key color
		this.errorPalette = new ColorPaletteHex(dynamicColor.error)

	}

}
