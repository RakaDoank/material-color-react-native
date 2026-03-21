export interface SourceColorFromImageUriOptions {
	/**
	 * In milliseconds. Default is zero. Zero or less indicates no timeout
	 * @default 0
	 */
	timeout?: number,
	signal?: AbortSignal,
}
