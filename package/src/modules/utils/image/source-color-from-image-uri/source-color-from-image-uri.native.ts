import NativeMaterialColor from "../../../../_native-modules/NativeMaterialColor"

import type {
	SourceColorFromImageProcessingOptions,
} from "../SourceColorFromImageProcessingOptions"

import {
	sourceColorFromImageUriController,
} from "../_source-color-from-image-uri-controller"

/**
 * Get source color from an image.
 * 
 * @param uri Image uri file
 * @returns Argb color
 */
export function sourceColorFromImageUri(uri: string, options?: SourceColorFromImageProcessingOptions): Promise<number> {
	const signalID = Math.random().toString()

	return sourceColorFromImageUriController(
		() => {
			return NativeMaterialColor.sourceColorFromImageUri(
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
