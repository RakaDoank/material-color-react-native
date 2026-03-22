import type {
	Variant,
} from "@material/material-color-utilities"

import type {
	ColorScheme,
} from "../../types"

export interface MaterialColorInterface {
	/**
	 * Your original source color in hex code
	 */
	readonly sourceColor: string,
	readonly colorScheme: ColorScheme,
	readonly theme: "light" | "dark",
	readonly contrastLevel: number,
	readonly variant: Variant,
}
