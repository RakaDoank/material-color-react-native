import type {
	ColorScheme,
} from "../../types"

import type {
	DynamicColorTonalPalettesDelegate,
} from "./_DynamicColorTonalPalettesDelegate"

export interface AndroidDynamicColorInterface extends DynamicColorTonalPalettesDelegate {
	colorScheme: ColorScheme,
	theme:
		| "light"
		| "dark",
}
