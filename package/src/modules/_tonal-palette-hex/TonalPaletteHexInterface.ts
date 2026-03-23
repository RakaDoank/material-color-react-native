export interface TonalPaletteHexInterface {
	readonly keyColor: string,
	/**
	 * Return tone palette in Hex code
	 */
	tone(tone: number): string,
}
