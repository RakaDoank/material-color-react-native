export interface AndroidDynamicColorOptions {
	/**
	 * `undefined` value will use Android native API to detect if it's dark or light theme, regardless the `userInterfaceStyle` configuration from Expo or any frameworks configuration
	 * @default undefined
	 */
	isDark?: boolean,
}
