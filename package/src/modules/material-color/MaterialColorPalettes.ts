import type {
	ColorPalettePropName,
} from "../../types"

import type {
	ColorPaletteHex,
} from "../_color-palette-hex"

export interface MaterialColorPalettes extends Record<ColorPalettePropName, ColorPaletteHex> {
}
