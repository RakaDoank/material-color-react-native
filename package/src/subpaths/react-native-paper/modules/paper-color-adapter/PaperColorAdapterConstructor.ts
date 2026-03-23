import type {
	MaterialColor,
} from "../../../../modules/material-color"

import type {
	ColorPalettePropName,
} from "../../../../types"

export interface PaperColorAdapterConstructor extends Pick<
	MaterialColor,
	| "colorScheme"
	| "theme"
	| ColorPalettePropName
> {
}
