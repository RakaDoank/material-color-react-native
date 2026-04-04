import {
	useImperativeHandle,
	useState,
} from "react"

import {
	Snackbar as Core,
} from "react-native-paper"

import type {
	SnackbarProps,
} from "./SnackbarProps"

export function Snackbar({
	ref,
	duration = 4000,
	...props
}: SnackbarProps) {

	const
		[data, setData] =
			useState({
				visible: false,
				message: "",
			})

	useImperativeHandle(ref, () => {
		return {
			setMessage(message) {
				setData({
					visible: true,
					message,
				})
			},
		}
	}, [])

	return (
		<Core
			{ ...props }
			visible={ data.visible }
			duration={ duration }
			onDismiss={ () => {
				setData(d => ({
					...d,
					visible: false,
				}))
			} }
		>
			{ data.message }
		</Core>
	)

}
