import type {
	ColorPalettePropName,
} from "../../types"

import type {
	TonalPaletteHex,
} from "../_tonal-palette-hex"

export interface MaterialColorTonalPalettes extends Record<ColorPalettePropName, TonalPaletteHex> {
}
