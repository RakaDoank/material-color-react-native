import {
	Image,
	Platform,
	type ImageSourcePropType,
} from "react-native"

import {
	DynamicScheme,
	Hct,
	TonalPalette,
	Variant,
	argbFromHex,
} from "@material/material-color-utilities"

import {
	ColorSchemeDelegate,
} from "../_ColorSchemeDelegate"

import {
	TonalPalettesDelegate,
} from "../_TonalPalettesDelegate"

import type {
	ImageUtils,
} from "../utils"

import type {
	MaterialColorInterface,
} from "./MaterialColorInterface"

import type {
	MaterialColorOptions,
} from "./MaterialColorOptions"

/**
 * Build Material color scheme to map dynamic color, use as fallback colors, or implement a branded theme
 * 
 * All the science have been done by `@material/material-color-utilities`, except a module of how to get source color from image's bitmap for non Web platform.
 * 
 * There are ways to build material color with this class. You can choose one of these ways
 * - Instantiate this class with Hex color code in the constructor argument
 * - Quickly build it from an hex color with the `MaterialColor.fromSourceColorHexInt` static method
 * - You can also use the `MaterialColor.fromSourceImage` or `MaterialColor.fromSourceImageUri` static method to get material color
 */
export class MaterialColor implements MaterialColorInterface {

	static Variant = Variant

	// Thanks to https://github.com/maiconcarraro/use-material-you/blob/main/src/schemes.ts#L63
	static ContrastLevelPresets = {
		DEFAULT: 0.0,
		MEDIUM: 0.5,
		HIGH: 1.0,
		REDUCED: -1.0,
	} as const

	/**
	 * Get the source color from an image and return `MaterialColor` in promise.
	 * 
	 * If you wish to get the source color only from an image, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`
	 * 
	 * If you already have the URI, for instance you get an image from a file/document picker, or an online image, you can use `MaterialColor.fromSourceImageUri`
	 * 
	 * @example
	 * ```jsx
	 * import {
	 * 	MaterialColor,
	 * } from "react-native-material-color"
	 * 
	 * function yourMethod() {
	 * 	MaterialColor
	 * 		.sourceColorFromImage(
	 * 			// you can still use the ESM import
	 * 			require("./your-image.png"),
	 * 			{
	 * 				variant: MaterialColor.Variant.TONAL_SPOT,
	 * 			}, // optional argument
	 * 			{
	 * 				timeout: 10000,
	 * 			}, // optional argument
	 * 		)
	 * 		.then(materialColor => {
	 * 			if(materialColor) {
	 * 				// your logics here
	 * 			}
	 * 		})
	 * 		.catch(err => {
	 * 			// Thrown by
	 * 			// - an timeout (provided in the third argument object)
	 * 			// - your own AbortSignal (provided in the third argument object)
	 * 			// - something from "@material/material-color-utilities"
	 * 		})
	 * }
	 * ```
	 * 
	 * @platform Android
	 * @platform iOS
	 * @platform macOS
	 * @platform Web
	 */
	static fromSourceImage(
		source: ImageSourcePropType,
		options?: MaterialColorOptions,
		imageOptions?: ImageUtils.SourceColorFromImageUriOptions,
	): Promise<MaterialColor | null> {
		const assetSource = Platform.OS === "web"
			? {
				uri: typeof source === "object" &&
					"uri" in source &&
					typeof source.uri === "string"
					? source.uri
					: "",
			}
			: Image.resolveAssetSource(source)

		if(assetSource.uri) {
			return MaterialColor.fromSourceImageUri(assetSource.uri, options, imageOptions)
		}

		return Promise.resolve(null)
	}

	/**
	 * Get the source color from an image uri and return `MaterialColor` in promise.
	 * 
	 * Similar as the `MaterialColor.fromSourceImage`, but you can provide the uri only, whether it's an online image, or local file uri that you get by importing a file, or file/gallery picker
	 * @platform Android
	 * @platform iOS
	 * @platform macOS
	 * @platform Web
	 */
	static fromSourceImageUri(
		uri: string,
		options?: MaterialColorOptions,
		imageOptions?: ImageUtils.SourceColorFromImageUriOptions,
	): Promise<MaterialColor | null> {
		return new Promise(resolve => {
			const { sourceHexColorFromImageUri } =
				require("../utils/image/source-hex-color-from-image-uri/source-hex-color-from-image-uri") as
					typeof import("../utils/image/source-hex-color-from-image-uri/source-hex-color-from-image-uri.native")

			sourceHexColorFromImageUri(uri, imageOptions).then(color => {
				if(color) {
					resolve(
						new MaterialColor(color, options),
					)
				} else {
					resolve(null)
				}
			})
		})
	}

	/**
	 * Build Material Color from a hex color code in decimal or hexadecimal,
	 * e.g. `0xFFFFFF`, `16777215` (white in decimal)
	 */
	static fromSourceColorHexInt(
		hexInt: number,
		options?: MaterialColorOptions,
	) {
		return new MaterialColor(
			hexInt.toString(16).padStart(6, "0"),
			options,
		)
	}

	readonly sourceColor: MaterialColorInterface["sourceColor"]

	readonly colorScheme: MaterialColorInterface["colorScheme"]

	readonly theme: MaterialColorInterface["theme"]

	readonly contrastLevel: number

	readonly platform: MaterialColorInterface["platform"]

	readonly specVersion: MaterialColorInterface["specVersion"]

	readonly variant: MaterialColorInterface["variant"]

	// +++++ Tonal Palettes +++++
	readonly primaryPalette: MaterialColorInterface["primaryPalette"]

	readonly secondaryPalette: MaterialColorInterface["secondaryPalette"]

	readonly tertiaryPalette: MaterialColorInterface["tertiaryPalette"]

	readonly errorPalette: MaterialColorInterface["errorPalette"]

	readonly neutralPalette: MaterialColorInterface["neutralPalette"]

	readonly neutralVariantPalette: MaterialColorInterface["neutralVariantPalette"]
	// ----- Tonal Palettes -----

	/**
	 * You can get the original `DynamicScheme` result from `@material/material-color-utilitites`
	 */
	dynamicScheme(): DynamicScheme {
		return new DynamicScheme({
			contrastLevel: this.contrastLevel,
			isDark: this.theme == "dark",
			sourceColorHct: Hct.fromInt(argbFromHex(this.sourceColor)),
			variant: this.variant,
			primaryPalette: tonalPaletteFromHex(this.primaryPalette.keyColor),
			secondaryPalette: tonalPaletteFromHex(this.secondaryPalette.keyColor),
			tertiaryPalette: tonalPaletteFromHex(this.tertiaryPalette.keyColor),
			errorPalette: tonalPaletteFromHex(this.errorPalette.keyColor),
			neutralPalette: tonalPaletteFromHex(this.neutralPalette.keyColor),
			neutralVariantPalette: tonalPaletteFromHex(this.neutralVariantPalette.keyColor),
			platform: this.platform,
			specVersion: this.specVersion,
		})
	}

	constructor(
		/**
		 * Seed hex color for building a Material color scheme to map dynamic color
		 */
		sourceColor: string,
		options?: MaterialColorOptions,
	) {

		this.sourceColor = sourceColor
		this.contrastLevel = options?.contrastLevel ?? MaterialColor.ContrastLevelPresets.DEFAULT
		this.theme = options?.isDark ? "dark" : "light"
		this.variant = options?.variant ?? MaterialColor.Variant.TONAL_SPOT

		const dynamicScheme = new DynamicScheme({
			...options,
			contrastLevel: this.contrastLevel,
			isDark: this.theme == "dark",
			sourceColorHct: Hct.fromInt(argbFromHex(sourceColor)),
			variant: this.variant,
			primaryPalette: tonalPaletteFromHex(options?.primaryPalette),
			secondaryPalette: tonalPaletteFromHex(options?.secondaryPalette),
			tertiaryPalette: tonalPaletteFromHex(options?.tertiaryPalette),
			errorPalette: tonalPaletteFromHex(options?.errorPalette),
			neutralPalette: tonalPaletteFromHex(options?.neutralPalette),
			neutralVariantPalette: tonalPaletteFromHex(options?.neutralVariantPalette),
		})

		this.colorScheme = new ColorSchemeDelegate(dynamicScheme)

		const
			{
				primaryPalette,
				secondaryPalette,
				tertiaryPalette,
				errorPalette,
				neutralPalette,
				neutralVariantPalette,
			} =
				TonalPalettesDelegate.fromDynamicScheme(dynamicScheme)

		this.primaryPalette = primaryPalette
		this.secondaryPalette = secondaryPalette
		this.tertiaryPalette = tertiaryPalette
		this.errorPalette = errorPalette
		this.neutralPalette = neutralPalette
		this.neutralVariantPalette = neutralVariantPalette

		this.platform = options?.platform ?? dynamicScheme.platform
		this.specVersion = options?.specVersion ?? dynamicScheme.specVersion

	}

}

function tonalPaletteFromHex(hex?: string) {
	if(!hex) {
		return undefined
	}
	return TonalPalette.fromInt(argbFromHex(hex))
}
