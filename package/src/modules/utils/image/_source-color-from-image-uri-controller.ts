import {
	SourceColorFromImageException,
} from "./SourceColorFromImageException"

import type {
	SourceColorFromImageProcessingOptions,
} from "./SourceColorFromImageProcessingOptions"

export function sourceColorFromImageUriController<
	ResultType extends number | string,
>(
	/**
	 * Return with nullable value,
	 * so this function internally can throw `SourceColorFromImageException`
	 */
	fn: () => Promise<ResultType | null>,
	fnCanceller: () => void,
	options?: SourceColorFromImageProcessingOptions,
): Promise<ResultType> {
	const timeout = options?.timeout ?? 0

	if(timeout > 0 || options?.signal) {
		const
			timeoutController =
				timeout > 0
					? new AbortController()
					: undefined,

			optionSignal =
				options?.signal

		return new Promise<ResultType>((resolve, reject) => {
			let timeoutID = timeout
				? setTimeout(() => {
					timeoutController?.abort()
				}, timeout)
				: null

			function onAbortFromTimeout() {
				fnCanceller()
				optionSignal?.removeEventListener("abort", onAbortFromOptionSignal)
				reject(
					new SourceColorFromImageException("TIMEDOUT"),
				)
			}

			function onAbortFromOptionSignal() {
				if(timeoutID) {
					clearTimeout(timeoutID)
					timeoutID = null
				}
				fnCanceller()
				timeoutController?.signal.removeEventListener("abort", onAbortFromTimeout)
				reject(
					new SourceColorFromImageException("ABORTED"),
				)
			}

			timeoutController?.signal.addEventListener("abort", onAbortFromTimeout)
			optionSignal?.addEventListener("abort", onAbortFromOptionSignal)

			fn().then(result => {
				if(timeoutID) {
					clearTimeout(timeoutID)
				}
				timeoutController?.signal.removeEventListener("abort", onAbortFromTimeout)
				optionSignal?.removeEventListener("abort", onAbortFromOptionSignal)

				if(result === null || typeof result === "undefined") {
					reject(
						new SourceColorFromImageException("UNPROCESSABLE"),
					)
				} else {
					resolve(result)
				}
			})
		})
	}

	return fn().then(result => {
		if(result === null || typeof result === "undefined") {
			throw new SourceColorFromImageException("UNPROCESSABLE")
		}

		return result
	})
}
