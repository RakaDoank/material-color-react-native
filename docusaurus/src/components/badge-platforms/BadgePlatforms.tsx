import {
	Fragment,
} from "react"

import clsx from "clsx"

import {
	BadgePlatform,
	type BadgePlatformProps,
} from "../badge-platform"

import type {
	BadgePlatformsProps,
} from "./BadgePlatformsProps"

import style from "./_style.module.css"

export function BadgePlatforms({
	types = {
		android: true,
		ios: true,
		macos: true,
		windows: true,
		web: true,
	},
	className,
	...props
}: BadgePlatformsProps) {

	return (
		<div
			{ ...props }
			className={ clsx([style["badge-platforms"], className]) }
		>
			{ Object.entries(types).map(([type, bool], i, arr) => {
				if(!bool) {
					return null
				}
				return (
					<Fragment
						key={ i }
					>
						<BadgePlatform
							type={ type as BadgePlatformProps["type"] }
						/>
						{ i < arr.length - 1 && (
							<>{ " " }</>
						) }
					</Fragment>
				)
			}) }
		</div>
	)

}
