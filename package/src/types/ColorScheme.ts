export interface ColorScheme {
	primary: string,
	primaryContainer: string,
	onPrimary: string,
	onPrimaryContainer: string,

	secondary: string,
	secondaryContainer: string,
	onSecondary: string,
	onSecondaryContainer: string,

	tertiary: string,
	tertiaryContainer: string,
	onTertiary: string,
	onTertiaryContainer: string,

	error: string,
	errorContainer: string,
	onError: string,
	onErrorContainer: string,

	background: string,
	onBackground: string,

	// backdrop: string, // DynamicScheme doesn't have this color

	surface: string,
	surfaceBright: string,
	surfaceContainer: string,
	surfaceContainerHigh: string,
	surfaceContainerHighest: string,
	surfaceContainerLow: string,
	surfaceContainerLowest: string,
	surfaceDim: string,
	// surfaceDisabled: string, // DynamicScheme doesn't have this color
	surfaceTint: string,
	surfaceVariant: string,
	onSurface: string,
	// onSurfaceDisabled: string, // DynamicScheme doesn't have this color
	onSurfaceVariant: string,

	outline: string,
	outlineVariant: string,

	shadow: string,

	scrim: string,

	inverseOnSurface: string,
	inverseSurface: string,
	inversePrimary: string,
}
