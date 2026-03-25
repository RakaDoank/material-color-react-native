import {
	useMemo,
} from "react"

import {
	Image,
	Platform,
	type ImageSourcePropType,
} from "react-native"

import {
	ImageUtils,
} from "../../modules/utils"

import {
	useMaterialColorFromImageUri,
} from "../use-material-color-from-image-uri"

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
 * You can pass `undefined`, or `null`, or empty string to the source image (first argument) to get material color later.
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
	sourceImage?: ImageSourcePropType | null,
	options?: UseMaterialColorFromImageOptions,
	imageOptions?: ImageUtils.SourceColorFromImageProcessingOptions,
): UseMaterialColorFromImageInstance {

	const imageUri = useMemo(() => {
		try {
			return Platform.OS === "web"
				? sourceImage && typeof sourceImage === "object" && "uri" in sourceImage && typeof sourceImage.uri === "string"
					? sourceImage.uri
					: undefined
				: sourceImage ? Image.resolveAssetSource(sourceImage).uri : undefined
		} catch {
			return undefined
		}
	}, [
		sourceImage,
	])

	return useMaterialColorFromImageUri(
		imageUri,
		options,
		imageOptions,
	)

}
