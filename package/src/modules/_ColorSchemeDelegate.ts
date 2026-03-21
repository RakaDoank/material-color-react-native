import {
	hexFromArgb,
} from "@material/material-color-utilities"

import type {
	ColorScheme,
} from "../types"

export class ColorSchemeDelegate implements ColorScheme {

	readonly primary: string
	readonly primaryContainer: string
	readonly onPrimary: string
	readonly onPrimaryContainer: string

	readonly secondary: string
	readonly secondaryContainer: string
	readonly onSecondary: string
	readonly onSecondaryContainer: string

	readonly tertiary: string
	readonly tertiaryContainer: string
	readonly onTertiary: string
	readonly onTertiaryContainer: string

	readonly error: string
	readonly errorContainer: string
	readonly onError: string
	readonly onErrorContainer: string

	readonly background: string
	readonly onBackground: string

	// readonly backdrop: string

	readonly surface: string
	readonly surfaceBright: string
	readonly surfaceContainer: string
	readonly surfaceContainerHigh: string
	readonly surfaceContainerHighest: string
	readonly surfaceContainerLow: string
	readonly surfaceContainerLowest: string
	readonly surfaceDim: string
	// readonly surfaceDisabled: string
	readonly surfaceTint: string
	readonly surfaceVariant: string
	readonly onSurface: string
	// readonly onSurfaceDisabled: string
	readonly onSurfaceVariant: string

	readonly outline: string
	readonly outlineVariant: string

	readonly shadow: string

	readonly scrim: string

	readonly inverseOnSurface: string
	readonly inverseSurface: string
	readonly inversePrimary: string

	constructor(
		colors:
			| ColorScheme
			| Record<keyof ColorScheme, number>,
	) {
		if(typeof colors.background === "string") {

			this.primary = colors.primary as string
			this.primaryContainer = colors.primaryContainer as string
			this.onPrimary = colors.onPrimary as string
			this.onPrimaryContainer = colors.onPrimaryContainer as string

			this.secondary = colors.secondary as string
			this.secondaryContainer = colors.secondaryContainer as string
			this.onSecondary = colors.onSecondary as string
			this.onSecondaryContainer = colors.onSecondaryContainer as string

			this.tertiary = colors.tertiary as string
			this.tertiaryContainer = colors.tertiaryContainer as string
			this.onTertiary = colors.onTertiary as string
			this.onTertiaryContainer = colors.onTertiaryContainer as string

			this.error = colors.error as string
			this.errorContainer = colors.errorContainer as string
			this.onError = colors.onError as string
			this.onErrorContainer = colors.onErrorContainer as string

			this.background = colors.background
			this.onBackground = colors.onBackground as string

			// this.backdrop = colors.backdrop as string

			this.surface = colors.surface as string
			this.surfaceBright = colors.surfaceBright as string
			this.surfaceContainer = colors.surfaceContainer as string
			this.surfaceContainerHigh = colors.surfaceContainerHigh as string
			this.surfaceContainerHighest = colors.surfaceContainerHighest as string
			this.surfaceContainerLow = colors.surfaceContainerLow as string
			this.surfaceContainerLowest = colors.surfaceContainerLowest as string
			this.surfaceDim = colors.surfaceDim as string
			// this.surfaceDisabled = colors.surfaceDisabled as string
			this.surfaceTint = colors.surfaceTint as string
			this.surfaceVariant = colors.surfaceVariant as string
			this.onSurface = colors.onSurface as string
			// this.onSurfaceDisabled = colors.onSurfaceDisabled as string
			this.onSurfaceVariant = colors.onSurfaceVariant as string

			this.outline = colors.outline as string
			this.outlineVariant = colors.outlineVariant as string

			this.shadow = colors.shadow as string

			this.scrim = colors.scrim as string

			this.inverseOnSurface = colors.inverseOnSurface as string
			this.inverseSurface = colors.inverseSurface as string
			this.inversePrimary = colors.inversePrimary as string

		} else {

			this.primary = hexFromArgb(colors.primary as number)
			this.primaryContainer = hexFromArgb(colors.primaryContainer as number)
			this.onPrimary = hexFromArgb(colors.onPrimary as number)
			this.onPrimaryContainer = hexFromArgb(colors.onPrimaryContainer as number)

			this.secondary = hexFromArgb(colors.secondary as number)
			this.secondaryContainer = hexFromArgb(colors.secondaryContainer as number)
			this.onSecondary = hexFromArgb(colors.onSecondary as number)
			this.onSecondaryContainer = hexFromArgb(colors.onSecondaryContainer as number)

			this.tertiary = hexFromArgb(colors.tertiary as number)
			this.tertiaryContainer = hexFromArgb(colors.tertiaryContainer as number)
			this.onTertiary = hexFromArgb(colors.onTertiary as number)
			this.onTertiaryContainer = hexFromArgb(colors.onTertiaryContainer as number)

			this.error = hexFromArgb(colors.error as number)
			this.errorContainer = hexFromArgb(colors.errorContainer as number)
			this.onError = hexFromArgb(colors.onError as number)
			this.onErrorContainer = hexFromArgb(colors.onErrorContainer as number)

			this.background = hexFromArgb(colors.background)
			this.onBackground = hexFromArgb(colors.onBackground as number)

			// this.backdrop = hexFromArgb(colors.backdrop as number)

			this.surface = hexFromArgb(colors.surface as number)
			this.surfaceBright = hexFromArgb(colors.surfaceBright as number)
			this.surfaceContainer = hexFromArgb(colors.surfaceContainer as number)
			this.surfaceContainerHigh = hexFromArgb(colors.surfaceContainerHigh as number)
			this.surfaceContainerHighest = hexFromArgb(colors.surfaceContainerHighest as number)
			this.surfaceContainerLow = hexFromArgb(colors.surfaceContainerLow as number)
			this.surfaceContainerLowest = hexFromArgb(colors.surfaceContainerLowest as number)
			this.surfaceDim = hexFromArgb(colors.surfaceDim as number)
			// this.surfaceDisabled = hexFromArgb(colors.surfaceDisabled as number)
			this.surfaceTint = hexFromArgb(colors.surfaceTint as number)
			this.surfaceVariant = hexFromArgb(colors.surfaceVariant as number)
			this.onSurface = hexFromArgb(colors.onSurface as number)
			// this.onSurfaceDisabled = hexFromArgb(colors.onSurfaceDisabled as number)
			this.onSurfaceVariant = hexFromArgb(colors.onSurfaceVariant as number)

			this.outline = hexFromArgb(colors.outline as number)
			this.outlineVariant = hexFromArgb(colors.outlineVariant as number)

			this.shadow = hexFromArgb(colors.shadow as number)

			this.scrim = hexFromArgb(colors.scrim as number)

			this.inverseOnSurface = hexFromArgb(colors.inverseOnSurface as number)
			this.inverseSurface = hexFromArgb(colors.inverseSurface as number)
			this.inversePrimary = hexFromArgb(colors.inversePrimary as number)

		}
	}

}
