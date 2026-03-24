import type {
	UseMaterialColorInstance,
} from "../use-material-color"

export interface UseMaterialColorFromImageInstance {
	data: UseMaterialColorInstance | undefined,
	isLoading: boolean,
	error?: Error | undefined,
}

