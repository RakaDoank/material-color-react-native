export class SourceColorFromImageException extends Error {

	static Type = {
		TIMEDOUT: "TIMEDOUT",
		ABORTED: "ABORTED",
		UNPROCESSABLE: "UNPROCESSABLE",
	} as const

	readonly type: keyof typeof SourceColorFromImageException.Type

	constructor(
		type: keyof typeof SourceColorFromImageException.Type,
		message?: string,
	) {
		super(message)
		this.name = type
		this.type = type
	}

}
