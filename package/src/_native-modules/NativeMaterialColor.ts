import {
	TurboModuleRegistry,
	type CodegenTypes,
	type TurboModule,
} from "react-native"

export interface Spec extends TurboModule {
	/**
	 * @returns Argb integer color
	 */
	sourceColorFromImageUri: (
		uri: string,
		/**
		 * String respresent as an ID for a signal to abort specific target
		 */
		signalID: string,
	) => Promise<CodegenTypes.Int32 | null>,

	/**
	 * This is same as `sourceColorFromImageUri`, but the result will be transformed to Hex by native side
	 * @returns Hex color
	 */
	sourceHexColorFromImageUri: (
		uri: string,
		/**
		 * String respresent as an ID for a signal to abort specific target
		 */
		signalID: string,
	) => Promise<string | null>,

	cancelSourceColorFromImageUri: (signalID: string) => void,
}

export default TurboModuleRegistry.getEnforcing<Spec>(
	"NativeMaterialColor",
)
