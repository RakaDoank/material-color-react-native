import {
	SourceColorFromImageException,
} from "../SourceColorFromImageException"

import type {
	SourceColorFromImageProcessingOptions,
} from "../SourceColorFromImageProcessingOptions"

/**
 * Get source color in Argb integer from an image.
 * 
 * @param uri Image uri file
 * @returns Argb color integer
 */
export function sourceColorFromImageUri(
	// @ts-expect-error NOOP
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	uri: string,
	// @ts-expect-error NOOP
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	options?: SourceColorFromImageProcessingOptions,
): Promise<number> {
	// NOOP
	throw new SourceColorFromImageException("UNPROCESSABLE")
}
