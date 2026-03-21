import type {
	SourceColorFromImageUriOptions,
} from "./SourceColorFromImageUriOptions"

export function sourceColorFromImageUriController<
	ResultType extends number | string | null,
>(
	fn: () => Promise<ResultType>,
	fnCanceller: () => void,
	options?: SourceColorFromImageUriOptions,
) {
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
			const timeoutID = timeout
				? setTimeout(() => {
					timeoutController?.abort()
				}, timeout)
				: null

			function onAbortFromTimeout() {
				fnCanceller()
				optionSignal?.removeEventListener("abort", onAbortFromOptionSignal)
				reject(new Error("TIMEDOUT"))
			}

			function onAbortFromOptionSignal() {
				if(timeoutID) {
					clearTimeout(timeoutID)
				}
				fnCanceller()
				timeoutController?.signal.removeEventListener("abort", onAbortFromTimeout)
				reject(new Error("ABORTED"))
			}

			timeoutController?.signal.addEventListener("abort", onAbortFromTimeout)
			optionSignal?.addEventListener("abort", onAbortFromOptionSignal)

			fn().then(result => {
				if(timeoutID) {
					clearTimeout(timeoutID)
				}
				timeoutController?.signal.removeEventListener("abort", onAbortFromTimeout)
				optionSignal?.removeEventListener("abort", onAbortFromOptionSignal)
				resolve(result)
			})
		})
	}

	return fn()
}
