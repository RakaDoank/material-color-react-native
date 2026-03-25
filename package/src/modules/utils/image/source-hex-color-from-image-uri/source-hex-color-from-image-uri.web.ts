import {
	hexFromArgb,
} from "@material/material-color-utilities"

import {
	SourceColorFromImageException,
} from "../SourceColorFromImageException"

import type {
	SourceColorFromImageProcessingOptions,
} from "../SourceColorFromImageProcessingOptions"

import {
	sourceColorFromImageUri,
} from "../source-color-from-image-uri"

/**
 * This is same as `sourceColorFromImageUri`, but the result is in Hex string that has been transformed on the native side.
 * @param uri Image uri file
 * @returns Hex color string
 */
export function sourceHexColorFromImageUri(
	uri: string,
	options?: SourceColorFromImageProcessingOptions,
): Promise<string> {
	return sourceColorFromImageUri(uri, options).then(argb => {
		if(typeof argb === "number") {
			return hexFromArgb(argb)
		}
		throw new SourceColorFromImageException("UNPROCESSABLE")
	})
}
