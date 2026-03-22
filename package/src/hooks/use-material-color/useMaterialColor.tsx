import {
	useMemo,
} from "react"

import {
	useColorScheme,
} from "react-native"

import {
	MaterialColor,
} from "../../modules/material-color"

import type {
	UseMaterialColorInstance,
} from "./UseMaterialColorInstance"

import type {
	UseMaterialColorOptions,
} from "./UseMaterialColorOptions"

export function useMaterialColor(
	/**
	 * Seed hex color for building a Material color scheme to map dynamic color
	 */
	sourceColor: string,
	options?: UseMaterialColorOptions,
): UseMaterialColorInstance {

	const
		appColorScheme =
			useColorScheme()

	return useMemo(() => {
		const materialColor = new MaterialColor(
			sourceColor,
			{
				...options,
				isDark: options?.isDark ?? appColorScheme == "dark",
			},
		)

		return {
			colorScheme: materialColor.colorScheme,
			contrastLevel: materialColor.contrastLevel,
			sourceColor: materialColor.sourceColor,
			theme: materialColor.theme,
			variant: materialColor.variant,
		}
	}, [
		sourceColor,
		appColorScheme,
		options,
	])

}
