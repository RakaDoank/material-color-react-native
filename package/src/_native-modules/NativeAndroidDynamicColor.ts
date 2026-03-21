import {
	TurboModuleRegistry,
	type CodegenTypes,
	type TurboModule,
} from "react-native"

export interface Spec extends TurboModule {
	getDynamicDarkColorScheme: () => CodegenTypes.UnsafeObject,

	getDynamicLightColorScheme: () => CodegenTypes.UnsafeObject,

	/**
	 * It's same as the `getDynamicDarkColorScheme` and `getDynamicLightColorScheme`,
	 * but it's detect either dark or light theme by the native platform
	 */
	getDynamicColorScheme: () => CodegenTypes.UnsafeObject,
}

export default TurboModuleRegistry.getEnforcing<Spec>(
	"NativeAndroidDynamicColor",
)
