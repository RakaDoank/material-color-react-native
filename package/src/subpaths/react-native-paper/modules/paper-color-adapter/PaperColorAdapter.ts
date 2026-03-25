// from react-native-paper
import Color from "color"

// import {
// 	normal as normalBlend,
// } from "color-blend"

import {
	MD3DarkTheme,
	MD3LightTheme,
	type MD3Theme,
} from "react-native-paper"

import type {
	AndroidDynamicColor,
} from "../../../../modules/android-dynamic-color"

import type {
	MaterialColorInterface,
} from "../../../../modules/material-color"

import type {
	PaperColorAdapterConstructor,
} from "./PaperColorAdapterConstructor"

type MD3Colors = MD3Theme["colors"]

export class PaperColorAdapter implements MD3Colors {

	static fromAndroidDynamicColor(
		androidDynamicColor: AndroidDynamicColor,
	) {
		return new PaperColorAdapter({
			colorScheme: androidDynamicColor.colorScheme,
			theme: androidDynamicColor.theme,
			primaryPalette: androidDynamicColor.primaryPalette,
			secondaryPalette: androidDynamicColor.secondaryPalette,
			tertiaryPalette: androidDynamicColor.tertiaryPalette,
			errorPalette: androidDynamicColor.errorPalette,
			neutralPalette: androidDynamicColor.neutralPalette,
			neutralVariantPalette: androidDynamicColor.neutralVariantPalette,
		})
	}

	static fromMaterialColor(
		materialColor: MaterialColorInterface,
	) {
		return new PaperColorAdapter({
			colorScheme: materialColor.colorScheme,
			theme: materialColor.theme,
			primaryPalette: materialColor.primaryPalette,
			secondaryPalette: materialColor.secondaryPalette,
			tertiaryPalette: materialColor.tertiaryPalette,
			errorPalette: materialColor.errorPalette,
			neutralPalette: materialColor.neutralPalette,
			neutralVariantPalette: materialColor.neutralVariantPalette,
		})
	}

	readonly primary: string
	readonly primaryContainer: string
	readonly secondary: string
	readonly secondaryContainer: string
	readonly tertiary: string
	readonly tertiaryContainer: string
	readonly surface: string
	readonly surfaceVariant: string
	readonly surfaceDisabled: string
	readonly background: string
	readonly onBackground: string
	readonly error: string
	readonly errorContainer: string
	readonly onPrimary: string
	readonly onPrimaryContainer: string
	readonly onSecondary: string
	readonly onSecondaryContainer: string
	readonly onTertiary: string
	readonly onTertiaryContainer: string
	readonly onSurface: string
	readonly onSurfaceVariant: string
	readonly onSurfaceDisabled: string
	readonly onError: string
	readonly onErrorContainer: string
	readonly outline: string
	readonly outlineVariant: string
	readonly inverseSurface: string
	readonly inverseOnSurface: string
	readonly inversePrimary: string
	readonly shadow: string
	readonly scrim: string
	readonly backdrop: string
	readonly elevation: MD3Colors["elevation"]

	constructor(
		data: PaperColorAdapterConstructor,
	) {

		this.primary = data.colorScheme.primary
		this.primaryContainer = data.colorScheme.primaryContainer
		this.secondary = data.colorScheme.secondary
		this.secondaryContainer = data.colorScheme.secondaryContainer
		this.tertiary = data.colorScheme.tertiary
		this.tertiaryContainer = data.colorScheme.tertiaryContainer
		this.surface = data.colorScheme.surface
		this.surfaceVariant = data.colorScheme.surfaceVariant
		this.background = data.colorScheme.background
		this.onBackground = data.colorScheme.onBackground
		this.error = data.colorScheme.error
		this.errorContainer = data.colorScheme.errorContainer
		this.onPrimary = data.colorScheme.onPrimary
		this.onPrimaryContainer = data.colorScheme.onPrimaryContainer
		this.onSecondary = data.colorScheme.onSecondary
		this.onSecondaryContainer = data.colorScheme.onSecondaryContainer
		this.onTertiary = data.colorScheme.onTertiary
		this.onTertiaryContainer = data.colorScheme.onTertiaryContainer
		this.onSurface = data.colorScheme.onSurface
		this.onSurfaceVariant = data.colorScheme.onSurfaceVariant
		this.onError = data.colorScheme.onError
		this.onErrorContainer = data.colorScheme.onErrorContainer
		this.outline = data.colorScheme.outline
		this.outlineVariant = data.colorScheme.outlineVariant
		this.inverseSurface = data.colorScheme.inverseSurface
		this.inverseOnSurface = data.colorScheme.inverseOnSurface
		this.inversePrimary = data.colorScheme.inversePrimary
		this.shadow = data.colorScheme.shadow
		this.scrim = data.colorScheme.scrim

		// +++++ fix inexistence props +++++

		// MaterialColor doesn't have these properties, nor the DynamicScheme from @material/material-color-utilities

		// To get the similar result. See these
		// - DarkTheme https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/DarkTheme.tsx
		// - LightTheme https://github.com/callstack/react-native-paper/blob/main/src/styles/themes/v3/LightTheme.tsx

		if(data.theme == "dark") {
			this.surfaceDisabled = Color(data.neutralPalette.tone(90))
				.alpha(0.12)
				.rgb()
				.string()

			this.onSurfaceDisabled = Color(data.neutralPalette.tone(90))
				.alpha(0.38)
				.rgb()
				.string()

			this.scrim = data.neutralPalette.tone(0)

			this.backdrop = Color(data.neutralVariantPalette.tone(20))
				.alpha(0.4)
				.rgb()
				.string()

			// can't figure it out
			// this.elevation = {
			// 	level0: "transparent",
			// 	level1: blendColor(
			// 		data.primaryPalette.tone(80),
			// 		Color(data.primaryPalette.tone(80)).alpha(0.05).rgb().string(),
			// 	),
			// 	level2: blendColor(
			// 		data.primaryPalette.tone(80),
			// 		Color(data.primaryPalette.tone(80)).alpha(0.08).rgb().string(),
			// 	),
			// 	level3: blendColor(
			// 		data.primaryPalette.tone(80),
			// 		Color(data.primaryPalette.tone(80)).alpha(0.11).rgb().string(),
			// 	),
			// 	level4: blendColor(
			// 		data.primaryPalette.tone(80),
			// 		Color(data.primaryPalette.tone(80)).alpha(0.12).rgb().string(),
			// 	),
			// 	level5: blendColor(
			// 		data.primaryPalette.tone(80),
			// 		Color(data.primaryPalette.tone(80)).alpha(0.14).rgb().string(),
			// 	),
			// }

			this.elevation = MD3DarkTheme.colors.elevation
		} else {
			this.surfaceDisabled = Color(data.neutralPalette.tone(10))
				.alpha(0.12)
				.rgb()
				.string()

			this.onSurfaceDisabled = Color(data.neutralPalette.tone(10))
				.alpha(0.38)
				.rgb()
				.string()

			this.scrim = data.neutralPalette.tone(0)

			this.backdrop = Color(data.neutralVariantPalette.tone(20)).alpha(0.4).rgb().string()

			// can't figure it out
			// this.elevation = {
			// 	level0: "transparent",
			// 	level1: blendColor(
			// 		data.primaryPalette.tone(99),
			// 		Color(data.primaryPalette.tone(40)).alpha(0.05).rgb().string(),
			// 	),
			// 	level2: blendColor(
			// 		data.primaryPalette.tone(99),
			// 		Color(data.primaryPalette.tone(40)).alpha(0.08).rgb().string(),
			// 	),
			// 	level3: blendColor(
			// 		data.primaryPalette.tone(99),
			// 		Color(data.primaryPalette.tone(40)).alpha(0.11).rgb().string(),
			// 	),
			// 	level4: blendColor(
			// 		data.primaryPalette.tone(99),
			// 		Color(data.primaryPalette.tone(40)).alpha(0.12).rgb().string(),
			// 	),
			// 	level5: blendColor(
			// 		data.primaryPalette.tone(99),
			// 		Color(data.primaryPalette.tone(40)).alpha(0.14).rgb().string(),
			// 	),
			// }

			this.elevation = MD3LightTheme.colors.elevation
		}

		// ----- fix inexistence props -----

	}

}

// function blendColor(
// 	backgroundHex: string,
// 	foregroundHex: string,
// ) {
// 	const bg = Color(backgroundHex)
// 	const fg = Color(foregroundHex)

// 	const blended = normalBlend(
// 		{
// 			r: bg.red(),
// 			g: bg.green(),
// 			b: bg.blue(),
// 			a: bg.alpha(),
// 		},
// 		{
// 			r: fg.red(),
// 			g: fg.green(),
// 			b: fg.blue(),
// 			a: fg.alpha(),
// 		},
// 	)

// 	return Color.rgb(blended.r, blended.g, blended.b).string()
// }
