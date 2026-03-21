import {
	useCallback,
	useImperativeHandle,
	useRef,
	useState,
} from "react"

import {
	argbFromHex,
} from "@material/material-color-utilities"

import {
	Button,
	Dialog,
	Portal,
	Snackbar,
	TextInput,
	type TextInputProps,
} from "react-native-paper"

import type {
	ModalInputColorProps,
} from "./ModalInputColorProps"

export function ModalInputColor({
	ref,
	onSubmit,
	...props
}: ModalInputColorProps) {

	const
		[visible, setVisible] =
			useState(false),

		[snackbar, setSnackbar] =
			useState({
				message: "",
				visible: false,
			}),

		hexColorText =
			useRef(""),

		onChangeTextHexColor: NonNullable<TextInputProps["onChangeText"]> =
			useCallback(text => {
				hexColorText.current = text
			}, []),

		submitHandler =
			useCallback(() => {
				// Use `argbFromHex` from @material/material-color-utilities
				// If it does throw an error, the color text is a valid hex format
				try {
					if(!hexColorText.current) {
						throw new Error()
					}
					argbFromHex(hexColorText.current)
					const value = hexColorText.current
					hexColorText.current = ""
					onSubmit(value)
					setVisible(false)
				} catch {
					setSnackbar({
						visible: true,
						message: "The hex color was not valid",
					})
				}
			}, [
				onSubmit,
				setVisible, // because the continous vars
				setSnackbar, // because the continous vars
			])

	useImperativeHandle(ref, () => {
		return {
			present() {
				setVisible(true)
			},
		}
	}, [])

	return (
		<Portal>
			<Dialog
				{ ...props }
				dismissableBackButton
				visible={ visible }
				onDismiss={ () => setVisible(false) }
			>
				<Dialog.Title>
					From Hex Color
				</Dialog.Title>

				<Dialog.Content>
					<TextInput
						label="Hex Color"
						mode="flat"
						onChangeText={ onChangeTextHexColor }
					/>
				</Dialog.Content>

				<Dialog.Actions>
					<Button
						mode="text"
						onPress={ submitHandler }
					>
						Use
					</Button>
				</Dialog.Actions>
			</Dialog>

			<Snackbar
				visible={ snackbar.visible }
				duration={ 3000 }
				onDismiss={ () => {
					setSnackbar(currState => {
						return {
							message: currState.message,
							visible: false,
						}
					})
				} }
			>
				{ snackbar.message }
			</Snackbar>
		</Portal>
	)

}
