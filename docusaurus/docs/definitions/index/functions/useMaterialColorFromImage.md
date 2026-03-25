# Function: useMaterialColorFromImage()

> **useMaterialColorFromImage**(`sourceImage?`, `options?`, `imageOptions?`): [`UseMaterialColorFromImageInstance`](../interfaces/UseMaterialColorFromImageInstance.md)

Defined in: [hooks/use-material-color-from-image/useMaterialColorFromImage.tsx:72](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/hooks/use-material-color-from-image/useMaterialColorFromImage.tsx#L72)

Get the source color from an image and return `MaterialColor`.

If you already have the URI, for instance you get an image from a file/document or photo picker, or an online image, you can use `useMaterialColorFromImageUri`.

You may don't need this if you wish to get the source color only from an image. Then, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`

You can pass `undefined`, or `null`, or empty string to the source image (first argument) to get material color later.

## Parameters

### sourceImage?

`ImageSourcePropType` \| `null`

### options?

[`UseMaterialColorFromImageOptions`](../interfaces/UseMaterialColorFromImageOptions.md)

### imageOptions?

[`SourceColorFromImageProcessingOptions`](../namespaces/ImageUtils/interfaces/SourceColorFromImageProcessingOptions.md)

## Returns

[`UseMaterialColorFromImageInstance`](../interfaces/UseMaterialColorFromImageInstance.md)

## Example

```jsx
import {
	MaterialColor,
	useMaterialColorFromImage,
} from "react-native-material-color"

import YourImage from "./your-image.png"

function YourReactComponent() {
	const
		materialColor =
			useMaterialColorFromImage(
				// you can also use the require style
				YourImage,

				// optional argument
				{
					variant: MaterialColor.Variant.TONAL_SPOT,
				},

				// optional argument
				{
					timeout: 10000,
				}, // optional argument
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
