import type {
	ColorScheme,
} from "../../types"

import type {
	DynamicColorPalettesDelegate,
} from "./_DynamicColorPalettesDelegate"

export interface AndroidDynamicColorInterface extends DynamicColorPalettesDelegate {
	colorScheme: ColorScheme,
	theme:
		| "light"
		| "dark",
}
