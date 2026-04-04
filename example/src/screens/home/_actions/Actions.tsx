import {
	useCallback,
	useContext,
	useMemo,
	useRef,
	useState,
} from "react"

import {
	Appearance,
} from "react-native"

import * as ExpoImagePicker from "expo-image-picker"

import * as ExpoStatusBar from "expo-status-bar"

import {
	AndroidDynamicColor,
	MaterialColor,
} from "material-color-react-native"

import {
	FAB,
	Portal,
	type FABGroupProps,
} from "react-native-paper"

import {
	ThemeContext,
} from "@/contexts"

import {
	ModalInputColor,
	type ModalInputColorProps,
	type ModalInputColorRef,
} from "./_modal-input-color"

import StaticImage1 from "./_nougat-wallpaper.png"

import {
	Snackbar,
	type SnackbarRef,
} from "./_snackbar"

import StaticImage2 from "./_wallpaper.png"


export function Actions() {

	const
		modalInputColorRef =
			useRef<ModalInputColorRef>(null),

		snackbarRef =
			useRef<SnackbarRef>(null),

		themeContext =
			useContext(ThemeContext),

		[open, setOpen] =
			useState(false)

	const
		fromStaticImage =
			useCallback((
				image: typeof StaticImage1,
			) => {
				snackbarRef.current?.setMessage("Processing…")

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
							themeContext.setSourceColor(res.sourceColor)
							snackbarRef.current?.setMessage("Yeay!")
						}
					})
					.catch(err => {
						if(err instanceof MaterialColor.SourceImageException) {
							snackbarRef.current?.setMessage(`Error type: ${err.type}`)
						} else {
							snackbarRef.current?.setMessage(err instanceof Error ? err.message : "Unknown error")
						}
					})
			}, [
				themeContext,
			]),

		fromLocalImage =
			useCallback(async () => {
				try {
					// You can use other photo/file picker module here

					const image = await ExpoImagePicker.launchImageLibraryAsync({
						mediaTypes: "images",
					})
					const uri = image.assets?.[0]?.uri

					if(!uri) {
						throw new Error()
					}

					snackbarRef.current?.setMessage("Processing…")

					const materialColor = await MaterialColor.fromSourceImageUri(
						uri,

						// material color options
						undefined,

						// other options
						{
							maxWidthOrHeight: 1000,
						},
					)

					if(!materialColor) {
						throw new Error()
					}

					themeContext.setSourceColor(materialColor.sourceColor)

					snackbarRef.current?.setMessage("Yeay!")
				} catch(err) {
					if(err instanceof MaterialColor.SourceImageException) {
						snackbarRef.current?.setMessage(`Error type: ${err.type}`)
					} else {
						snackbarRef.current?.setMessage(err instanceof Error ? err.message : "Unknown error")
					}
				}
			}, [
				themeContext,
			]),

		fromRemoteImage =
			useCallback(async () => {
				snackbarRef.current?.setMessage("Processing…")

				try {
					const materialColor = await MaterialColor.fromSourceImageUri(
						// Image thumbnail of a YouTube video https://www.youtube.com/watch?v=XGxIE1hr0w4
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

					themeContext.setSourceColor(materialColor.sourceColor)

					snackbarRef.current?.setMessage("Yeay!")
				} catch(err) {
					if(err instanceof MaterialColor.SourceImageException) {
						snackbarRef.current?.setMessage(`Error type: ${err.type}`)
					} else {
						snackbarRef.current?.setMessage(err instanceof Error ? err.message : "Unknown error")
					}
				}
			}, [
				themeContext,
			]),

		actions =
			useMemo(() => {
				const data: FABGroupProps["actions"] = []

				if(AndroidDynamicColor.isAvailable()) {
					data.push({
						icon: "wallpaper",
						label: "Android Dynamic Color",
						onPress() {
							themeContext.setAndroidDynamicColor("dynamic")
							ExpoStatusBar.setStatusBarStyle(
								Appearance.getColorScheme() === "dark" ? "light" : "dark",
							)
						},
					}, {
						icon: "wallpaper",
						label: "Android Dynamic Dark Color",
						onPress() {
							themeContext.setAndroidDynamicColor("dark")
							ExpoStatusBar.setStatusBarStyle("light")
						},
					}, {
						icon: "wallpaper",
						label: "Android Dynamic Light Color",
						onPress() {
							themeContext.setAndroidDynamicColor("light")
							ExpoStatusBar.setStatusBarStyle("dark")
						},
					})
				}

				data.push({
					icon: "file-image",
					label: "Static Import Image 1",
					onPress() {
						fromStaticImage(StaticImage1)
					},
				})

				data.push({
					icon: "file-image",
					label: "Static Import Image 2",
					onPress() {
						fromStaticImage(StaticImage2)
					},
				})

				data.push({
					icon: "image",
					label: "Use Photo / Gallery",
					onPress() {
						fromLocalImage()
					},
				})

				data.push({
					icon: "image",
					label: "Use Remote Image",
					onPress() {
						fromRemoteImage()
					},
				})

				data.push({
					icon: "pencil-outline",
					label: "Use Hex Color",
					onPress() {
						modalInputColorRef.current?.present()
					},
				})

				return data
			}, [
				themeContext,
				fromStaticImage,
				fromLocalImage,
				fromRemoteImage,
			]),

		onSubmitModalInputColor: ModalInputColorProps["onSubmit"] =
			hexColor => {
				themeContext.setSourceColor(hexColor)
			}

	return (<>
		<Portal>
			<FAB.Group
				open={ open }
				visible
				icon="format-color-highlight"
				label="Test Library Fn"
				actions={ actions }
				onStateChange={ nextState => {
					setOpen(nextState.open)
				} }
			/>

			<Snackbar
				ref={ snackbarRef }
			/>
		</Portal>

		<ModalInputColor
			onSubmit={ onSubmitModalInputColor }
			ref={ modalInputColorRef }
		/>
	</>)

}
