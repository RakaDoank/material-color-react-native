import type {
	SnackbarProps as Props,
} from "react-native-paper"

import type {
	SnackbarRef,
} from "./SnackbarRef"

export interface SnackbarProps extends Omit<Props, "children" | "visible" | "onDismiss" | "ref"> {
	ref?: React.Ref<SnackbarRef>,
}
