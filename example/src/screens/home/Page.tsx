import {
	useContext,
	useImperativeHandle,
	useRef,
	useState,
} from "react"

import {
	Appearance,
	Platform,
	ScrollView,
	StyleSheet,
	View,
	useWindowDimensions,
	type ScrollViewProps,
} from "react-native"

import * as ExpoImagePicker from "expo-image-picker"

import * as ExpoStatusBar from "expo-status-bar"

import {
	AndroidDynamicColor,
	MaterialColor,
	type ColorScheme,
} from "react-native-material-color"

import {
	Appbar,
	Button,
	Text,
	useTheme,
	type ButtonProps,
} from "react-native-paper"

import {
	ThemeContext,
} from "@/contexts"

import {
	GlobalStyleSheet,
} from "@/styles"

import {
	ModalInputColor,
	type ModalInputColorProps,
	type ModalInputColorRef,
} from "./_modal-input-color"

// import Wallpaper from "./_nougat-wallpaper.png"
import Wallpaper from "./_wallpaper.png"

export function Page() {

	const
		colorSchemePrintViewRef =
			useRef<ColorSchemePrintViewRef>(null),

		buttonStaticImageRef =
			useRef<ButtonLoadingImperativeRef>(null),

		buttonImageRef =
			useRef<ButtonLoadingImperativeRef>(null),

		modalInputColorRef =
			useRef<ModalInputColorRef>(null),

		themeContext =
			useContext(ThemeContext),

		windowDimensions =
			useWindowDimensions(),

		getAndroidDynamicColor =
			() => {
				const colorScheme = AndroidDynamicColor.dynamic()
				colorSchemePrintViewRef.current?.setText(colorScheme)
				themeContext.setColors(colorScheme)
				ExpoStatusBar.setStatusBarStyle(
					Appearance.getColorScheme() === "dark" ? "light" : "dark",
				)
			},

		getAndroidDynamicDarkColor =
			() => {
				const colorScheme = AndroidDynamicColor.dark()
				colorSchemePrintViewRef.current?.setText(colorScheme)
				themeContext.setColors(colorScheme, true)
				ExpoStatusBar.setStatusBarStyle("light")
			},

		getAndroidDynamicLightColor =
			() => {
				const colorScheme = AndroidDynamicColor.light()
				colorSchemePrintViewRef.current?.setText(colorScheme)
				themeContext.setColors(colorScheme, false)
				ExpoStatusBar.setStatusBarStyle("dark")
			},

		fromStaticImage =
			() => {
				buttonStaticImageRef.current?.setLoading(true)

				MaterialColor.fromSourceImage(Wallpaper)
					.then(res => {
						if(res) {
							colorSchemePrintViewRef.current?.setText(res.colorScheme)
							themeContext.setColors(res.colorScheme)
						}
					})
					.catch(() => {
						// NOOP
					})
					.finally(() => {
						buttonStaticImageRef.current?.setLoading(false)
					})
			},

		fromImage =
			async () => {
				buttonImageRef.current?.setLoading(true)

				try {
					const image = await ExpoImagePicker .launchImageLibraryAsync({
						mediaTypes: "images",
					})
					const uri = image.assets?.[0]?.uri

					if(!uri) {
						throw new Error()
					}

					const materialColor = await MaterialColor.fromSourceImageUri(uri)

					if(!materialColor) {
						throw new Error()
					}

					colorSchemePrintViewRef.current?.setText(materialColor.colorScheme)
					themeContext.setColors(materialColor.colorScheme)
				} catch {
					// NOOP
				} finally {
					buttonImageRef.current?.setLoading(false)
				}
			},

		showModalInputColor =
			() => {
				modalInputColorRef.current?.present()
			},

		onSubmitModalInputColor: ModalInputColorProps["onSubmit"] =
			hexColor => {
				const colorScheme = MaterialColor.fromSourceColor(hexColor).colorScheme
				colorSchemePrintViewRef.current?.setText(colorScheme)
				themeContext.setColors(colorScheme)
			},

		rowMode =
			windowDimensions.width > 480

	return (<>
		<Appbar.Header>
			<Appbar.Content
				title="Material Color"
			/>
		</Appbar.Header>

		<View
			style={ [
				GlobalStyleSheet.g.flex_1,
				rowMode
					? GlobalStyleSheet.g.flex_row
					: GlobalStyleSheet.g.flex_col,
			] }
		>
			<View
				style={ [
					GlobalStyleSheet.g.flex_1,
					GlobalStyleSheet.g.justify_center,
					GlobalStyleSheet.g.items_center,
					styleSheet.buttonsContainer,
				] }
			>
				{ Platform.OS === "android" && (<>
					<Button
						mode="contained"
						onPress={ getAndroidDynamicColor }
					>
						Android Dynamic Color
					</Button>

					<Button
						mode="contained-tonal"
						onPress={ getAndroidDynamicDarkColor }
					>
						Android Dynamic Dark Color
					</Button>

					<Button
						mode="elevated"
						onPress={ getAndroidDynamicLightColor }
					>
						Android Dynamic Light Color
					</Button>
				</>) }

				<ButtonLoadingImperative
					mode="outlined"
					onPress={ fromStaticImage }
					ref={ buttonStaticImageRef }
				>
					From Static Image
				</ButtonLoadingImperative>

				<ButtonLoadingImperative
					mode="outlined"
					onPress={ fromImage as () => void }
				>
					From Image
				</ButtonLoadingImperative>

				<Button
					mode="text"
					onPress={ showModalInputColor }
				>
					From Hex Color
				</Button>
			</View>

			<ColorSchemePrintView
				ref={ colorSchemePrintViewRef }
				style={ [
					rowMode
						? styleSheet.colorSchemePrintViewMaxWidth
						: styleSheet.colorSchemePrintViewMaxHeight,
				] }
			/>
		</View>

		<ModalInputColor
			onSubmit={ onSubmitModalInputColor }
			ref={ modalInputColorRef }
		/>
	</>)

}

const
	styleSheet =
		StyleSheet.create({
			buttonsContainer: {
				rowGap: 16,
			},
			colorSchemePrintView: {
				padding: 16,
			},
			colorSchemePrintViewMaxWidth: {
				maxWidth: 360,
			},
			colorSchemePrintViewMaxHeight: {
				maxHeight: 240,
			},
			colorSchemePrintViewContentContainer: {
				width: "100%",
				maxWidth: 380,
			},
		})

interface ColorSchemePrintViewProps extends ScrollViewProps {
	ref?: React.Ref<ColorSchemePrintViewRef>,
}

interface ColorSchemePrintViewRef {
	setText: (
		colorScheme: ColorScheme,
	) => void,
}

function ColorSchemePrintView({
	ref,
	contentContainerStyle,
	style,
	...props
}: ColorSchemePrintViewProps) {

	const
		[text, setTextState] =
			useState(""),

		theme =
			useTheme()

	useImperativeHandle(ref, () => {
		return {
			setText(colorScheme) {
				let nextText = ""

				nextText += "{"
				Object.entries(colorScheme).forEach(([key, val]) => {
					nextText += `\n  "${key}": "${val}",`
				})
				nextText += "\n}"

				setTextState(nextText)
			},
		}
	}, [])

	return (
		<ScrollView
			{ ...props }
			contentContainerStyle={ [
				GlobalStyleSheet.g.grow,
				GlobalStyleSheet.g.justify_center,
				GlobalStyleSheet.g.self_center,
				styleSheet.colorSchemePrintViewContentContainer,
				contentContainerStyle,
			] }
			style={ [
				styleSheet.colorSchemePrintView,
				{
					backgroundColor: theme.colors.surfaceVariant,
				},
				style,
			] }
		>
			<Text
				variant="bodyMedium"
			>
				{ text }
			</Text>
		</ScrollView>
	)

}

interface ButtonLoadingImperativeProps extends Omit<ButtonProps, "loading" | "ref"> {
	ref?: React.Ref<ButtonLoadingImperativeRef>,
}
interface ButtonLoadingImperativeRef {
	setLoading: (value: boolean) => void,
}
function ButtonLoadingImperative({
	ref,
	...props
}: ButtonLoadingImperativeProps) {

	const
		[loading, setLoading] =
			useState(false)

	useImperativeHandle(ref, () => {
		return {
			setLoading,
		}
	}, [])

	return (
		<Button
			{ ...props }
			loading={ loading }
		/>
	)

}
