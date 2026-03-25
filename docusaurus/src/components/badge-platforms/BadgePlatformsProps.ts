import type {
	BadgePlatformProps,
} from "../badge-platform/BadgePlatformProps"

type DivProps = React.JSX.IntrinsicElements["div"]

export interface BadgePlatformsProps extends Omit<DivProps, "children"> {
	/**
	 * The prop is in object type is intended to make the ordering consistent
	 * @default
	 * ```{
	 * 	android: true,
	 * 	ios: true,
	 * 	macOS: true,
	 * 	windows: true,
	 * 	web: true,
	 * }```
	 */
	types?: Record<BadgePlatformProps["type"], boolean>,
}
