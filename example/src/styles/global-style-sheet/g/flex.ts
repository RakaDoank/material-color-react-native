// Copied from https://github.com/RakaDoank/carbon-react-native/blob/main/packages/carbon-react-native/src/carbon-style-sheet/g/flex.ts

import {
	StyleSheet,
} from "react-native"

export const { flex_1 } = StyleSheet.create({
	flex_1: {
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: 0,
	} as const,
})

export const { flex_auto } = StyleSheet.create({
	flex_auto: {
		flexGrow: 1,
		flexShrink: 1,
		flexBasis: "auto",
	} as const,
})

export const { flex_initial } = StyleSheet.create({
	flex_initial: {
		flexGrow: 0,
		flexShrink: 1,
		flexBasis: "auto",
	} as const,
})

export const { flex_col } = StyleSheet.create({
	flex_col: {
		flexDirection: "column",
	} as const,
})

export const { flex_col_reverse } = StyleSheet.create({
	flex_col_reverse: {
		flexDirection: "column-reverse",
	} as const,
})

export const { flex_row } = StyleSheet.create({
	flex_row: {
		flexDirection: "row",
	} as const,
})

export const { flex_row_reverse } = StyleSheet.create({
	flex_row_reverse: {
		flexDirection: "row-reverse",
	} as const,
})

export const { flex_wrap } = StyleSheet.create({
	flex_wrap: {
		flexWrap: "wrap",
	} as const,
})

export const { flex_wrap_reverse } = StyleSheet.create({
	flex_wrap_reverse: {
		flexWrap: "wrap-reverse",
	} as const,
})

export const { flex_nowrap } = StyleSheet.create({
	flex_nowrap: {
		flexWrap: "nowrap",
	} as const,
})

export const { items_start } = StyleSheet.create({
	items_start: {
		alignItems: "flex-start",
	} as const,
})

export const { items_center } = StyleSheet.create({
	items_center: {
		alignItems: "center",
	} as const,
})

export const { items_end } = StyleSheet.create({
	items_end: {
		alignItems: "flex-end",
	} as const,
})

export const { content_start } = StyleSheet.create({
	content_start: {
		alignContent: "flex-start",
	} as const,
})

export const { content_center } = StyleSheet.create({
	content_center: {
		alignContent: "center",
	} as const,
})

export const { content_end } = StyleSheet.create({
	content_end: {
		alignContent: "flex-end",
	} as const,
})

export const { justify_start } = StyleSheet.create({
	justify_start: {
		justifyContent: "flex-start",
	} as const,
})

export const { justify_center } = StyleSheet.create({
	justify_center: {
		justifyContent: "center",
	} as const,
})

export const { justify_between } = StyleSheet.create({
	justify_between: {
		justifyContent: "space-between",
	} as const,
})

export const { justify_end } = StyleSheet.create({
	justify_end: {
		justifyContent: "flex-end",
	} as const,
})

export const { self_start } = StyleSheet.create({
	self_start: {
		alignSelf: "flex-start",
	} as const,
})

export const { self_center } = StyleSheet.create({
	self_center: {
		alignSelf: "center",
	} as const,
})

export const { self_end } = StyleSheet.create({
	self_end: {
		alignSelf: "flex-end",
	} as const,
})

export const { self_stretch } = StyleSheet.create({
	self_stretch: {
		alignSelf: "stretch",
	} as const,
})

export const { grow } = StyleSheet.create({
	grow: {
		flexGrow: 1,
	} as const,
})

export const { grow_0 } = StyleSheet.create({
	grow_0: {
		flexGrow: 0,
	} as const,
})

export const { shrink } = StyleSheet.create({
	shrink: {
		flexShrink: 1,
	} as const,
})

export const { shrink_0 } = StyleSheet.create({
	shrink_0: {
		flexShrink: 0,
	} as const,
})

export const { basis_auto } = StyleSheet.create({
	basis_auto: {
		flexBasis: "auto",
	} as const,
})

export const { basis_full } = StyleSheet.create({
	basis_full: {
		flexBasis: "100%",
	} as const,
})
