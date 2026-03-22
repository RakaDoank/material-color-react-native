import type {
	ColorScheme,
} from "../../types"

export interface MaterialColorInterface {
	/**
	 * Source color in Hex code
	 */
	readonly sourceColor: string,
	readonly colorScheme: ColorScheme,
}
