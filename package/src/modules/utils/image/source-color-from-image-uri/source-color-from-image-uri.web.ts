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

	if(typeof options?.maxWidthOrHeight === "number" && options.maxWidthOrHeight > 0) {
		return new Promise<number | null>((resolve, reject) => {
			image.onload = () => {
				const scale = options.maxWidthOrHeight! / Math.max(image.width, image.height)
				image.width = Math.ceil(image.width * scale)
				image.height = Math.ceil(image.height * scale)

				sourceColorFromImageUriController(
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
					.then(resolve)
			}

			image.onerror = () => {
				reject(new Error("Image load failed"));
			}
		})
	}

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
