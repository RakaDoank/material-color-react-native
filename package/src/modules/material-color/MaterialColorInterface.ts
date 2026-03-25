import type {
	DynamicScheme,
	Variant,
} from "@material/material-color-utilities"

import type {
	ColorScheme,
} from "../../types"

import type {
	MaterialColorPalettes,
} from "./MaterialColorPalettes"

export interface MaterialColorInterface extends MaterialColorPalettes {
	/**
	 * Your original source color in hex code
	 */
	readonly sourceColor: string,
	readonly colorScheme: ColorScheme,
	readonly theme: "light" | "dark",
	readonly contrastLevel: number,
	readonly variant: Variant,
	readonly platform: DynamicScheme["platform"],
	readonly specVersion: DynamicScheme["specVersion"],
}
