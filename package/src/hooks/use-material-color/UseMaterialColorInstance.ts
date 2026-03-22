import type {
	MaterialColorInterface,
} from "../../modules/material-color/MaterialColorInterface"

export interface UseMaterialColorInstance extends
	Pick<
		MaterialColorInterface,
		| "colorScheme"
		| "sourceColor"
		| "contrastLevel"
		| "theme"
		| "variant"
	> {
}
