# Class: MaterialColor

Defined in: [modules/material-color/MaterialColor.ts:45](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L45)

Build Material color scheme to map dynamic color, use as fallback colors, or implement a branded theme

All the science have been done by `@material/material-color-utilities`, except a module of how to get source color from image's bitmap for non Web platform.

There are ways to build material color with this class. You can choose one of these ways
- Instantiate this class with Hex color code in the constructor argument
- Quickly build it from an hex color with the `MaterialColor.fromSourceColorHexInt` static method
- You can also use the `MaterialColor.fromSourceImage` or `MaterialColor.fromSourceImageUri` static method to get material color

## Implements

- [`MaterialColorInterface`](../interfaces/MaterialColorInterface.md)

## Constructors

### Constructor

> **new MaterialColor**(`sourceColor`, `options?`): `MaterialColor`

Defined in: [modules/material-color/MaterialColor.ts:214](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L214)

#### Parameters

##### sourceColor

`string`

Seed hex color for building a Material color scheme to map dynamic color

##### options?

[`MaterialColorOptions`](../interfaces/MaterialColorOptions.md)

#### Returns

`MaterialColor`

## Methods

### dynamicScheme()

> **dynamicScheme**(): `DynamicScheme`

Defined in: [modules/material-color/MaterialColor.ts:197](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L197)

You can get the original `DynamicScheme` result from `@material/material-color-utilitites`

#### Returns

`DynamicScheme`

***

### fromSourceColorHexInt()

> `static` **fromSourceColorHexInt**(`hexInt`, `options?`): `MaterialColor`

Defined in: [modules/material-color/MaterialColor.ts:156](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L156)

Build Material Color from a hex color code in decimal or hexadecimal,
e.g. `0xFFFFFF`, `16777215` (white in decimal)

#### Parameters

##### hexInt

`number`

##### options?

[`MaterialColorOptions`](../interfaces/MaterialColorOptions.md)

#### Returns

`MaterialColor`

***

### fromSourceImage()

> `static` **fromSourceImage**(`source`, `options?`, `processingOptions?`): `Promise`\<`MaterialColor`\>

Defined in: [modules/material-color/MaterialColor.ts:103](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L103)

Get the source color from an image and return `MaterialColor` in promise.

If you wish to get the source color only from an image, you can use `ImageUtils.sourceColorFromImageUri()`, or `ImageUtils.sourceHexColorFromImageUri()`

If you already have the URI, for instance you get an image from a file/document picker, or an online image, you can use `MaterialColor.fromSourceImageUri`

#### Parameters

##### source

`ImageSourcePropType`

##### options?

[`MaterialColorOptions`](../interfaces/MaterialColorOptions.md)

##### processingOptions?

[`SourceColorFromImageProcessingOptions`](../namespaces/ImageUtils/interfaces/SourceColorFromImageProcessingOptions.md)

#### Returns

`Promise`\<`MaterialColor`\>

#### Example

```jsx
import {
	MaterialColor,
} from "react-native-material-color"

function yourMethod() {
	MaterialColor
		.sourceColorFromImage(
			// you can still use the ESM import
			require("./your-image.png"),
			{
				variant: MaterialColor.Variant.TONAL_SPOT,
			}, // optional argument
			{
				timeout: 10000,
			}, // optional argument
		)
		.then(materialColor => {
			if(materialColor) {
				// your logics here
			}
		})
		.catch(err => {
			// Thrown by
			// - an timeout (provided in the third argument object)
			// - your own AbortSignal (provided in the third argument object)
			// - something from "@material/material-color-utilities"
		})
}
```

#### Platform

Android

#### Platform

iOS

#### Platform

macOS

#### Platform

Web

***

### fromSourceImageUri()

> `static` **fromSourceImageUri**(`uri`, `options?`, `processingOptions?`): `Promise`\<`MaterialColor`\>

Defined in: [modules/material-color/MaterialColor.ts:134](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L134)

Get the source color from an image uri and return `MaterialColor` in promise.

Similar as the `MaterialColor.fromSourceImage`, but you can provide the uri only, whether it's an online image, or local file uri that you get by importing a file, or file/gallery picker

#### Parameters

##### uri

`string`

##### options?

[`MaterialColorOptions`](../interfaces/MaterialColorOptions.md)

##### processingOptions?

[`SourceColorFromImageProcessingOptions`](../namespaces/ImageUtils/interfaces/SourceColorFromImageProcessingOptions.md)

#### Returns

`Promise`\<`MaterialColor`\>

#### Platform

Android

#### Platform

iOS

#### Platform

macOS

#### Platform

Web

## Properties

### colorScheme

> `readonly` **colorScheme**: [`ColorScheme`](../interfaces/ColorScheme.md)

Defined in: [modules/material-color/MaterialColor.ts:168](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L168)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`colorScheme`](../interfaces/MaterialColorInterface.md#colorscheme)

***

### contrastLevel

> `readonly` **contrastLevel**: `number`

Defined in: [modules/material-color/MaterialColor.ts:172](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L172)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`contrastLevel`](../interfaces/MaterialColorInterface.md#contrastlevel)

***

### errorPalette

> `readonly` **errorPalette**: `ColorPaletteHex`

Defined in: [modules/material-color/MaterialColor.ts:187](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L187)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`errorPalette`](../interfaces/MaterialColorInterface.md#errorpalette)

***

### neutralPalette

> `readonly` **neutralPalette**: `ColorPaletteHex`

Defined in: [modules/material-color/MaterialColor.ts:189](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L189)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`neutralPalette`](../interfaces/MaterialColorInterface.md#neutralpalette)

***

### neutralVariantPalette

> `readonly` **neutralVariantPalette**: `ColorPaletteHex`

Defined in: [modules/material-color/MaterialColor.ts:191](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L191)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`neutralVariantPalette`](../interfaces/MaterialColorInterface.md#neutralvariantpalette)

***

### platform

> `readonly` **platform**: `Platform`

Defined in: [modules/material-color/MaterialColor.ts:174](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L174)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`platform`](../interfaces/MaterialColorInterface.md#platform)

***

### primaryPalette

> `readonly` **primaryPalette**: `ColorPaletteHex`

Defined in: [modules/material-color/MaterialColor.ts:181](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L181)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`primaryPalette`](../interfaces/MaterialColorInterface.md#primarypalette)

***

### secondaryPalette

> `readonly` **secondaryPalette**: `ColorPaletteHex`

Defined in: [modules/material-color/MaterialColor.ts:183](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L183)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`secondaryPalette`](../interfaces/MaterialColorInterface.md#secondarypalette)

***

### sourceColor

> `readonly` **sourceColor**: `string`

Defined in: [modules/material-color/MaterialColor.ts:166](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L166)

Your original source color in hex code

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`sourceColor`](../interfaces/MaterialColorInterface.md#sourcecolor)

***

### specVersion

> `readonly` **specVersion**: `SpecVersion`

Defined in: [modules/material-color/MaterialColor.ts:176](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L176)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`specVersion`](../interfaces/MaterialColorInterface.md#specversion)

***

### tertiaryPalette

> `readonly` **tertiaryPalette**: `ColorPaletteHex`

Defined in: [modules/material-color/MaterialColor.ts:185](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L185)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`tertiaryPalette`](../interfaces/MaterialColorInterface.md#tertiarypalette)

***

### theme

> `readonly` **theme**: `"light"` \| `"dark"`

Defined in: [modules/material-color/MaterialColor.ts:170](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L170)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`theme`](../interfaces/MaterialColorInterface.md#theme)

***

### variant

> `readonly` **variant**: `Variant`

Defined in: [modules/material-color/MaterialColor.ts:178](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L178)

#### Implementation of

[`MaterialColorInterface`](../interfaces/MaterialColorInterface.md).[`variant`](../interfaces/MaterialColorInterface.md#variant)

***

### ContrastLevelPresets

> `static` **ContrastLevelPresets**: `object`

Defined in: [modules/material-color/MaterialColor.ts:50](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L50)

#### DEFAULT

> `readonly` **DEFAULT**: `0` = `0.0`

#### HIGH

> `readonly` **HIGH**: `1` = `1.0`

#### MEDIUM

> `readonly` **MEDIUM**: `0.5` = `0.5`

#### REDUCED

> `readonly` **REDUCED**: `-1` = `-1.0`

***

### SourceImageException

> `static` **SourceImageException**: *typeof* [`SourceColorFromImageException`](../namespaces/ImageUtils/classes/SourceColorFromImageException.md) = `ImageUtils.SourceColorFromImageException`

Defined in: [modules/material-color/MaterialColor.ts:57](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L57)

***

### Variant

> `static` **Variant**: *typeof* `Variant`

Defined in: [modules/material-color/MaterialColor.ts:47](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/material-color/MaterialColor.ts#L47)
