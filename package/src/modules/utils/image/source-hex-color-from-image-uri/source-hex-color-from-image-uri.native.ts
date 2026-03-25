import NativeMaterialColor from "../../../../_native-modules/NativeMaterialColor"

import type {
	SourceColorFromImageProcessingOptions,
} from "../SourceColorFromImageProcessingOptions"

import {
	sourceColorFromImageUriController,
} from "../_source-color-from-image-uri-controller"

/**
 * This is same as `sourceColorFromImageUri`, but the result is in Hex string that has been transformed on the native side.
 * 
 * @param uri Image uri file
 * @returns Hex color string
 */
export function sourceHexColorFromImageUri(uri: string, options?: SourceColorFromImageProcessingOptions): Promise<string> {
	const signalID = Math.random().toString()

	return sourceColorFromImageUriController(
		() => {
			return NativeMaterialColor.sourceHexColorFromImageUri(
				uri,
				signalID,
				typeof options?.maxWidthOrHeight === "number"
					? Math.max(options.maxWidthOrHeight, 0)
					: 0,
			)
		},
		() => {
			NativeMaterialColor.cancelSourceColorFromImageUri(signalID)
		},
		options,
	)
}
