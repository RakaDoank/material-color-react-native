import type {
	ViewProps,
} from "react-native"

export interface SectionProps extends ViewProps {
	title: string,
	contentContainerProps?: Omit<
		ViewProps,
		| "children"
	>
}
