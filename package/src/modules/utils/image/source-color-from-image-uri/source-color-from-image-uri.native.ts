import NativeMaterialColor from "../../../../_native-modules/NativeMaterialColor"

import type {
	SourceColorFromImageUriOptions,
} from "../SourceColorFromImageUriOptions"

import {
	sourceColorFromImageUriController,
} from "../_source-color-from-image-uri-controller"

/**
 * @param uri Image uri file
 * @returns Argb color
 */
export function sourceColorFromImageUri(uri: string, options?: SourceColorFromImageUriOptions): Promise<number | null> {
	const signalID = Math.random().toString()

	return sourceColorFromImageUriController(
		() => {
			return NativeMaterialColor.sourceColorFromImageUri(uri, signalID)
		},
		() => {
			NativeMaterialColor.cancelSourceColorFromImageUri(signalID)
		},
		options,
	)
}
