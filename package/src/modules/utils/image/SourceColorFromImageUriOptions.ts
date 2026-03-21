export interface SourceColorFromImageUriOptions {
	/**
	 * In milliseconds. Default is zero. Zero or less indicates no timeout
	 * @default 0
	 */
	timeout?: number,
	signal?: AbortSignal,
	/**
	 * Increase performance by limiting the maximum width or height pixel of image processing.
	 * `undefined` or zero or less means use the original image size
	 * @default undefined
	 */
	maxWidthOrHeight?: number,
}
