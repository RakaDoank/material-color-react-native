# Function: useMaterialColorFromImageUri()

> **useMaterialColorFromImageUri**(`sourceImage?`, `options?`, `imageOptions?`): [`UseMaterialColorFromImageUriInstance`](../interfaces/UseMaterialColorFromImageUriInstance.md)

Defined in: [hooks/use-material-color-from-image-uri/useMaterialColorFromImageUri.tsx:69](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/hooks/use-material-color-from-image-uri/useMaterialColorFromImageUri.tsx#L69)

Get the source color from an image uri and return `MaterialColor`.

This is similar as the `useMaterialColorFromImage`, but you need to use this if your source image is from a local file like photos/gallery or file/document picker, or the source image is from a internet.

You may don't need this if you wish to get the source color only from an image. Then, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`

You can pass `undefined`, or `null`, or empty string to the source image uri (first argument) to get material color later.

## Parameters

### sourceImage?

`string` \| `null`

### options?

[`UseMaterialColorFromImageUriOptions`](../interfaces/UseMaterialColorFromImageUriOptions.md)

### imageOptions?

[`SourceColorFromImageProcessingOptions`](../namespaces/ImageUtils/interfaces/SourceColorFromImageProcessingOptions.md)

## Returns

[`UseMaterialColorFromImageUriInstance`](../interfaces/UseMaterialColorFromImageUriInstance.md)

## Example

```jsx
import {
	MaterialColor,
	useMaterialColorFromImage,
} from "react-native-material-color"

function YourReactComponent() {
	const
		materialColor =
			useMaterialColorFromImageUri(
				// You can also use local file uri (e.g. file:///...)
				"https://i3.ytimg.com/vi/XGxIE1hr0w4/maxresdefault.jpg",

				// optional argument
				{
					variant: MaterialColor.Variant.TONAL_SPOT,
				},

				// optional argument
				{
					timeout: 10000,
				},
			)
	
	console.log("Color Scheme", materialColor.colorScheme)
}
```

## Platform

Android

## Platform

iOS

## Platform

macOS

## Platform

Web
