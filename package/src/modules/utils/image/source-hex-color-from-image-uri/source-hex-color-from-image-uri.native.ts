import NativeMaterialColor from "../../../../_native-modules/NativeMaterialColor"

import type {
	SourceColorFromImageUriOptions,
} from "../SourceColorFromImageUriOptions"

import {
	sourceColorFromImageUriController,
} from "../_source-color-from-image-uri-controller"

/**
 * This is same as `sourceColorFromImageUri`, but the result is in Hex string that has been transformed on the native side.
 * @param uri Image uri file
 * @returns Hex color string
 */
export function sourceHexColorFromImageUri(uri: string, options?: SourceColorFromImageUriOptions): Promise<string | null> {
	const signalID = Math.random().toString()

	return sourceColorFromImageUriController(
		() => {
			return NativeMaterialColor.sourceHexColorFromImageUri(
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
