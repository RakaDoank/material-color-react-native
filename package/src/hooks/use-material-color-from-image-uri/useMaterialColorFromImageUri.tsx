import {
	useEffect,
	useState,
} from "react"

import {
	useColorScheme,
} from "react-native"

import {
	MaterialColor,
} from "../../modules/material-color"

import {
	ImageUtils,
} from "../../modules/utils"

import type {
	UseMaterialColorFromImageUriInstance,
} from "./UseMaterialColorFromImageUriInstance"

import type {
	UseMaterialColorFromImageUriOptions,
} from "./UseMaterialColorFromImageUriOptions"

/**
 * Get the source color from an image uri and return `MaterialColor`.
 * 
 * This is similar as the `useMaterialColorFromImage`, but you need to use this if your source image is from a local file like photos/gallery or file/document picker, or the source image is from a internet.
 * 
 * You may don't need this if you wish to get the source color only from an image. Then, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`
 *
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
 * 			useMaterialColorFromImageUri(
 * 				// You can also use local file uri (e.g. file:///...)
 * 				"https://i3.ytimg.com/vi/XGxIE1hr0w4/maxresdefault.jpg",
 * 
 * 				// optional argument
 * 				{
 * 					variant: MaterialColor.Variant.TONAL_SPOT,
 * 				},
 * 
 * 				// optional argument
 * 				{
 * 					timeout: 10000,
 * 				},
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
export function useMaterialColorFromImageUri(
	sourceImage: string,
	options?: UseMaterialColorFromImageUriOptions,
	imageOptions?: ImageUtils.SourceColorFromImageUriOptions,
): UseMaterialColorFromImageUriInstance {

	const
		appColorScheme =
			useColorScheme(),

		[sourceColor, setSourceColor] =
			useState<MaterialColor["sourceColor"] | null>(null)

	useEffect(() => {
		const
			signalFromProp =
				imageOptions?.signal,

			mainController =
				new AbortController()

		const onAbort = () => {
			mainController.abort()
		}

		signalFromProp?.addEventListener("abort", onAbort)

		if(sourceImage) {
			ImageUtils
				.sourceHexColorFromImageUri(
					sourceImage,
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
