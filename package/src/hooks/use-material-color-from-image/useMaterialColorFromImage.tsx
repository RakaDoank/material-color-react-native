import {
	useEffect,
	useState,
} from "react"

import {
	Image,
	Platform,
	useColorScheme,
	type ImageSourcePropType,
} from "react-native"

import {
	MaterialColor,
} from "../../modules/material-color"

import {
	ImageUtils,
} from "../../modules/utils"

import type {
	UseMaterialColorFromImageInstance,
} from "./UseMaterialColorFromImageInstance"

import type {
	UseMaterialColorFromImageOptions,
} from "./UseMaterialColorFromImageOptions"

/**
 * Get the source color from an image and return `MaterialColor`.
 * 
 * If you already have the URI, for instance you get an image from a file/document or photo picker, or an online image, you can use `useMaterialColorFromImageUri`.
 * 
 * You may don't need this if you wish to get the source color only from an image. Then, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`
 * 
 * @example
 * ```jsx
 * import {
 * 	MaterialColor,
 * 	useMaterialColorFromImage,
 * } from "react-native-material-color"
 * 
 * import YourImage from "./your-image.png"
 * 
 * function YourReactComponent() {
 * 	const
 * 		materialColor =
 * 			useMaterialColorFromImage(
 * 				// you can also use the require style
 * 				YourImage,
 * 
 * 				// optional argument
 * 				{
 * 					variant: MaterialColor.Variant.TONAL_SPOT,
 * 				},
 * 
 * 				// optional argument
 * 				{
 * 					timeout: 10000,
 * 				}, // optional argument
 * 			)
 * 	
 * 	console.log("Color Scheme", materialColor.colorScheme)
 * }
 * ```
 * 
 * @platform Android
 * @platform iOS
 * @platform macOS
 * @platform Web
 */
export function useMaterialColorFromImage(
	sourceImage: ImageSourcePropType,
	options?: UseMaterialColorFromImageOptions,
	imageOptions?: ImageUtils.SourceColorFromImageUriOptions,
): UseMaterialColorFromImageInstance {

	const
		appColorScheme =
			useColorScheme(),

		[sourceColor, setSourceColor] =
			useState<MaterialColor["sourceColor"] | null>(null)

	useEffect(() => {
		const assetSource = Platform.OS === "web"
			? {
				uri: typeof sourceImage === "object" &&
					"uri" in sourceImage &&
					typeof sourceImage.uri === "string"
					? sourceImage.uri
					: "",
			}
			: Image.resolveAssetSource(sourceImage)

		const
			signalFromProp =
				imageOptions?.signal,

			mainController =
				new AbortController()

		const onAbort = () => {
			mainController.abort()
		}

		signalFromProp?.addEventListener("abort", onAbort)

		if(assetSource.uri) {
			ImageUtils
				.sourceHexColorFromImageUri(
					assetSource.uri,
					{
						...imageOptions,
						signal: mainController.signal,
					},
				)
				.then(setSourceColor)
		}

		return () => {
			if(signalFromProp && !signalFromProp.aborted) {
				mainController.abort()
			}
			signalFromProp?.removeEventListener("abort", onAbort)
		}
	}, [
		imageOptions,
		sourceImage,
	])

	if(!sourceColor) {
		return null
	}

	return new MaterialColor(
		sourceColor,
		{
			...options,
			isDark: options?.isDark ?? appColorScheme == "dark",
		},
	)

}
