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
} from "material-color-react-native"

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

import StaticImage1 from "./_nougat-wallpaper.png"
import StaticImage2 from "./_wallpaper.png"

export function Page() {

	const
		colorSchemePrintViewRef =
			useRef<ColorSchemePrintViewRef>(null),

		buttonStaticImage1Ref =
			useRef<ButtonLoadingImperativeRef>(null),

		buttonStaticImage2Ref =
			useRef<ButtonLoadingImperativeRef>(null),

		buttonLocalImageRef =
			useRef<ButtonLoadingImperativeRef>(null),

		buttonRemoteImageRef =
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
				colorSchemePrintViewRef.current?.setText("Android Dynamic Color", colorScheme)
				themeContext.setColors(colorScheme)
				ExpoStatusBar.setStatusBarStyle(
					Appearance.getColorScheme() === "dark" ? "light" : "dark",
				)
			},

		getAndroidDynamicDarkColor =
			() => {
				const colorScheme = AndroidDynamicColor.dark()
				colorSchemePrintViewRef.current?.setText("Android Dynamic Dark", colorScheme)
				themeContext.setColors(colorScheme, true)
				ExpoStatusBar.setStatusBarStyle("light")
			},

		getAndroidDynamicLightColor =
			() => {
				const colorScheme = AndroidDynamicColor.light()
				colorSchemePrintViewRef.current?.setText("Android Dynamic Light", colorScheme)
				themeContext.setColors(colorScheme, false)
				ExpoStatusBar.setStatusBarStyle("dark")
			},

		fromStaticImage =
			(
				image: typeof StaticImage1,
				buttonRef: ButtonLoadingImperativeRef | null,
			) => {
				buttonRef?.setLoading(true)

				MaterialColor.fromSourceImage(
					image,

					// material color options
					undefined,

					// other options
					{
						// maxWidthOrHeight: 1920,
					},
				)
					.then(res => {
						if(res) {
							colorSchemePrintViewRef.current?.setText(res.sourceColor, res.colorScheme)
							themeContext.setColors(res.colorScheme)
						}
					})
					.catch(() => {
						// NOOP
					})
					.finally(() => {
						buttonRef?.setLoading(false)
					})
			},

		fromLocalImage =
			async () => {
				buttonLocalImageRef.current?.setLoading(true)

				try {
					const image = await ExpoImagePicker.launchImageLibraryAsync({
						mediaTypes: "images",
					})
					const uri = image.assets?.[0]?.uri

					if(!uri) {
						throw new Error()
					}

					const materialColor = await MaterialColor.fromSourceImageUri(
						uri,

						// material color options
						undefined,

						// other options
						{
							// maxWidthOrHeight: 1920,
						},
					)

					if(!materialColor) {
						throw new Error()
					}

					colorSchemePrintViewRef.current?.setText(materialColor.sourceColor, materialColor.colorScheme)
					themeContext.setColors(materialColor.colorScheme)
				} catch {
					// NOOP
				} finally {
					buttonLocalImageRef.current?.setLoading(false)
				}
			},

		fromRemoteImage =
			async () => {
				buttonRemoteImageRef.current?.setLoading(true)

				try {
					const materialColor = await MaterialColor.fromSourceImageUri(

						// Image thumbnail of a YouTube video
						// See the video at https://www.youtube.com/watch?v=XGxIE1hr0w4
						"https://i3.ytimg.com/vi/XGxIE1hr0w4/maxresdefault.jpg",

						// material color options
						undefined,

						// other options
						{
							// maxWidthOrHeight: 1920,
						},

					)

					if(!materialColor) {
						throw new Error()
					}

					colorSchemePrintViewRef.current?.setText(materialColor.sourceColor, materialColor.colorScheme)
					themeContext.setColors(materialColor.colorScheme)
				} catch {
					// NOOP
				} finally {
					buttonRemoteImageRef.current?.setLoading(false)
				}
			},

		showModalInputColor =
			() => {
				modalInputColorRef.current?.present()
			},

		onSubmitModalInputColor: ModalInputColorProps["onSubmit"] =
			hexColor => {
				const colorScheme = MaterialColor.fromSourceColor(hexColor).colorScheme
				colorSchemePrintViewRef.current?.setText(hexColor, colorScheme)
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
			<ScrollView
				style={ [
					GlobalStyleSheet.g.flex_1,
				] }
				contentContainerStyle={ [
					GlobalStyleSheet.g.grow,
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
					mode="contained-tonal"
					onPress={ () => fromStaticImage(StaticImage1, buttonStaticImage1Ref.current) }
					ref={ buttonStaticImage1Ref }
				>
					Use Static Import Image 1
				</ButtonLoadingImperative>

				<ButtonLoadingImperative
					mode="contained-tonal"
					onPress={ () => fromStaticImage(StaticImage2, buttonStaticImage2Ref.current) }
					ref={ buttonStaticImage2Ref }
				>
					Use Static Import Image 2
				</ButtonLoadingImperative>

				<ButtonLoadingImperative
					mode="outlined"
					onPress={ fromLocalImage as () => void }
					ref={ buttonLocalImageRef }
				>
					Use Local Image
				</ButtonLoadingImperative>

				<ButtonLoadingImperative
					mode="outlined"
					onPress={ fromRemoteImage as () => void }
					ref={ buttonRemoteImageRef }
				>
					Use Remote Image
				</ButtonLoadingImperative>

				<Button
					mode="text"
					onPress={ showModalInputColor }
				>
					Use Hex Color
				</Button>
			</ScrollView>

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
		colorSource: string,
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
			setText(colorSource, colorScheme) {
				let nextText = ""

				nextText += "{"
				nextText += `\n "<colorSource>": "${colorSource}"`
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
