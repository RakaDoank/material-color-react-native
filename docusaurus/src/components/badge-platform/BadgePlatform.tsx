import clsx from "clsx"

import type {
	BadgePlatformProps,
} from "./BadgePlatformProps"

import style from "./_style.module.css"

export function BadgePlatform({
	type,
	className,
	...props
}: BadgePlatformProps) {

	// these are infima components

	const typeClsx = mapTypeClsx[type]

	if(!typeClsx) {
		return null
	}

	return (
		<span
			{ ...props }
			className={ clsx([typeClsx.className, style["badge-platform"], className]) }
		>
			{ typeClsx.text }
		</span>
	)

}

const
	mapTypeClsx: Record<BadgePlatformProps["type"], {
		className: string,
		text: string,
	}> =
		{
			android: {
				className: "badge badge--success",
				text: "Android",
			},
			ios: {
				className: "badge badge--secondary",
				text: "iOS",
			},
			macos: {
				className: "badge badge--secondary",
				text: "macOS",
			},
			windows: {
				className: `badge ${style["badge-windows"]}`,
				text: "Windows",
			},
			web: {
				className: "badge badge--danger",
				text: "Web",
			},
		}
