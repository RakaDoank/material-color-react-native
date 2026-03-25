type Props = React.JSX.IntrinsicElements["span"]

export interface BadgePlatformProps extends Omit<Props, "children"> {
	type: "android" | "ios" | "web" | "macos" | "windows"
}
