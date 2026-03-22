import {
	Appearance,
	Image,
	Platform,
	type ImageSourcePropType,
} from "react-native"

import {
	DynamicScheme,
	Hct,
	Variant,
	argbFromHex,
	hexFromArgb,
} from "@material/material-color-utilities"

import {
	ColorSchemeDelegate,
} from "../_ColorSchemeDelegate"

import type {
	ImageUtils,
} from "../utils"

import type {
	MaterialColorInterface,
} from "./MaterialColorInterface"

/**
 * Build Material color scheme to map dynamic color, use as fallback colors, or implement a branded theme
 * 
 * All the science have been done by `@material/material-color-utilities`, except a module of how to get source color from image's bitmap for non Web platform.
 * 
 * There are three ways to build material color with this class. You can choose one of these ways
 * 1. Instantiate this class with Argb integer color in the constructor argument
 * 2. Quickly build it from an hex color with the `MaterialColor.fromSourceColor` static method
 * 3. You can also use the `MaterialColor.fromSourceImage` or `MaterialColor.fromSourceImageUri` static method to get material color
 */
export class MaterialColor implements MaterialColorInterface {

	readonly sourceColor: string

	readonly colorScheme: MaterialColorInterface["colorScheme"]

	readonly dynamicScheme: DynamicScheme

	static Variant = Variant

	// Thanks to https://github.com/maiconcarraro/use-material-you/blob/main/src/schemes.ts#L63
	static ContrastLevelPresets = {
		DEFAULT: 0.0,
		MEDIUM: 0.5,
		HIGH: 1.0,
		REDUCED: -1.0,
	} as const

	/**
	 * Returns either is dark or light theme.
	 * 
	 * If you are using Expo, make sure you have set `userInterfaceStyle` to `automatic` to your Expo app configuration (the `app.json` or `app.config.ts`)
	 */
	static get isDark() {
		return Appearance.getColorScheme() === "dark"
	}

	static fromSourceColor(
		hex: string,
		options?: Omit<Partial<ConstructorParameters<typeof DynamicScheme>[0]>, "sourceColorHct">,
	) {
		return new MaterialColor({
			...options,
			contrastLevel: options?.contrastLevel ?? MaterialColor.ContrastLevelPresets.DEFAULT,
			isDark: MaterialColor.isDark,
			sourceColorHct: Hct.fromInt(argbFromHex(hex)),
			variant: options?.variant ?? MaterialColor.Variant.TONAL_SPOT,
		})
	}

	/**
	 * Get the source color from an image and return `MaterialColor` in promise.
	 * 
	 * If you wish to get the source color only from an image, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`
	 * 
	 * If you already have the URI, for instance you get an image from a file/document picker, or an online image, you can use `MaterialColor.fromSourceImageUri` instead
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
		materialOptions?: Parameters<typeof MaterialColor.fromSourceColor>[1],
		imageUriOptions?: ImageUtils.SourceColorFromImageUriOptions,
	) {
		const assetSource = Platform.OS === "web"
			? { uri: typeof source === "object" && "uri" in source ? source.uri! : "" }
			: Image.resolveAssetSource(source)
		return MaterialColor.fromSourceImageUri(assetSource.uri, materialOptions, imageUriOptions)
	}

	/**
	 * @platform Android
	 * @platform iOS
	 * @platform macOS
	 * @platform Web
	 */
	static fromSourceImageUri(
		uri: string,
		materialOptions?: Parameters<typeof MaterialColor.fromSourceColor>[1],
		imageUriOptions?: ImageUtils.SourceColorFromImageUriOptions,
	): Promise<MaterialColor | null> {
		return new Promise(resolve => {
			const { sourceHexColorFromImageUri } =
				require("../utils/image/source-hex-color-from-image-uri/source-hex-color-from-image-uri") as
					typeof import("../utils/image/source-hex-color-from-image-uri/source-hex-color-from-image-uri.native")

			sourceHexColorFromImageUri(uri, imageUriOptions).then(color => {
				if(color) {
					resolve(
						MaterialColor.fromSourceColor(color, materialOptions),
					)
				} else {
					resolve(null)
				}
			})
		})
	}

	constructor(
		args: ConstructorParameters<typeof DynamicScheme>[0],
	) {
		this.dynamicScheme = new DynamicScheme(args)
		this.colorScheme = new ColorSchemeDelegate(this.dynamicScheme)
		this.sourceColor = hexFromArgb(args.sourceColorHct.toInt())
	}

}
