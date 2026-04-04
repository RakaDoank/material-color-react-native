import {
	StyleSheet,
	View,
} from "react-native"

import {
	Text,
} from "react-native-paper"

import type {
	SectionProps,
} from "./SectionProps"

export function Section({
	title,
	children,
	contentContainerProps,
	style,
	...props
}: SectionProps) {

	return (
		<View
			{ ...props }
			style={ [
				styleSheet.section,
				style,
			] }
		>
			<View
				style={ [
					styleSheet.innerWrapper,
				] }
			>
				<Text
					variant="titleSmall"
				>
					{ title }
				</Text>

				<View
					{ ...contentContainerProps }
					style={ [
						styleSheet.contentContainer,
						contentContainerProps?.style,
					] }
				>
					{ children }
				</View>
			</View>
		</View>
	)

}

const
	styleSheet =
		StyleSheet.create({
			section: {
				padding: 16,
			},
			innerWrapper: {
				width: "100%",
				maxWidth: 640,
				alignSelf: "center",
				rowGap: 16,
			},
			contentContainer: {
				flexDirection: "row",
				flexWrap: "wrap",
				gap: 8,
			},
		})
