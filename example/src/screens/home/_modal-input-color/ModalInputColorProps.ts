import type {
	DialogProps,
} from "react-native-paper"

import type {
	ModalInputColorRef,
} from "./ModalInputColorRef"

export interface ModalInputColorProps extends Omit<DialogProps, "children" | "visible" | "onDismiss"> {
	onSubmit: (
		hexColor: string,
	) => void,
	ref?: React.Ref<ModalInputColorRef>,
}
