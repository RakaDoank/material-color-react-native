import {
	hexFromArgb,
} from "@material/material-color-utilities"

import type {
	SourceColorFromImageUriOptions,
} from "../SourceColorFromImageUriOptions"

import {
	sourceColorFromImageUri,
} from "../source-color-from-image-uri"

/**
 * @param uri Image uri file
 * @returns Hex color string
 */
export function sourceHexColorFromImageUri(
	uri: string,
	options?: SourceColorFromImageUriOptions,
): Promise<string | null> {
	return sourceColorFromImageUri(uri, options).then(argb => {
		return argb ? hexFromArgb(argb) : null
	})
}
