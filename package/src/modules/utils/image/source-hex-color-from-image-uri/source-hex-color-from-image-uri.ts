import {
	SourceColorFromImageException,
} from "../SourceColorFromImageException"

import type {
	SourceColorFromImageProcessingOptions,
} from "../SourceColorFromImageProcessingOptions"

/**
 * This is same as `sourceColorFromImageUri`, but the result is in Hex string that has been transformed on the native side.
 * 
 * @param _uri Image uri file
 * @returns Hex color string
 */
export function sourceHexColorFromImageUri(
	// @ts-expect-error NOOP
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	uri: string,
	// @ts-expect-error NOOP
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	options?: SourceColorFromImageProcessingOptions,
): Promise<string> {
	// NOOP
	throw new SourceColorFromImageException("UNPROCESSABLE")
}
