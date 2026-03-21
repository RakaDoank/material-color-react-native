import {
	sourceColorFromImage,
} from "@material/material-color-utilities"

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
export function sourceColorFromImageUri(
	uri: string,
	options?: SourceColorFromImageUriOptions,
): Promise<number | null> {
	const image = document.createElement("img")
	image.src = uri
	return sourceColorFromImageUriController(
		() => {
			try {
				return sourceColorFromImage(image)
			} catch {
				return Promise.resolve(null)
			}
		},
		() => {
			image.src = ""
			image.remove()
		},
		options,
	)
}
