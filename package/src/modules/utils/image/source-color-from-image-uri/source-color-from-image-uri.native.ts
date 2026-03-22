import NativeMaterialColor from "../../../../_native-modules/NativeMaterialColor"

import type {
	SourceColorFromImageUriOptions,
} from "../SourceColorFromImageUriOptions"

import {
	sourceColorFromImageUriController,
} from "../_source-color-from-image-uri-controller"

/**
 * Get source color from an image.
 * 
 * @param uri Image uri file
 * @returns Argb color
 */
export function sourceColorFromImageUri(uri: string, options?: SourceColorFromImageUriOptions): Promise<number | null> {
	const signalID = Math.random().toString()

	return sourceColorFromImageUriController(
		() => {
			return NativeMaterialColor.sourceColorFromImageUri(
				uri,
				signalID,
				typeof options?.maxWidthOrHeight === "number"
					? options?.maxWidthOrHeight > 0 ? options.maxWidthOrHeight : null
					: null,
			)
		},
		() => {
			NativeMaterialColor.cancelSourceColorFromImageUri(signalID)
		},
		options,
	)
}
