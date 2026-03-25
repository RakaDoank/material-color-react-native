# Interface: UseMaterialColorOptions

Defined in: [hooks/use-material-color/UseMaterialColorOptions.ts:5](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/hooks/use-material-color/UseMaterialColorOptions.ts#L5)

Specified material color options like Variant, Contrast Level, etc.

```js
const defaultOptions = {
	variant: MaterialColor.Variant.TONAL_SPOT,

	// 0 or MaterialColor.ContrastLevelPresets.DEFAULT
	contrastLevel: 0,

	// React Native app color scheme
	isDark: Appearance.getColorScheme() == "dark",
}
```

## Extends

- [`MaterialColorOptions`](MaterialColorOptions.md)

## Properties

### errorPalette?

> `optional` **errorPalette?**: `string`

#### Inherited from

[`UseMaterialColorInstance`](UseMaterialColorInstance.md).[`errorPalette`](UseMaterialColorInstance.md#errorpalette)

***

### neutralPalette?

> `optional` **neutralPalette?**: `string`

#### Inherited from

[`UseMaterialColorInstance`](UseMaterialColorInstance.md).[`neutralPalette`](UseMaterialColorInstance.md#neutralpalette)

***

### neutralVariantPalette?

> `optional` **neutralVariantPalette?**: `string`

#### Inherited from

[`UseMaterialColorInstance`](UseMaterialColorInstance.md).[`neutralVariantPalette`](UseMaterialColorInstance.md#neutralvariantpalette)

***

### primaryPalette?

> `optional` **primaryPalette?**: `string`

#### Inherited from

[`UseMaterialColorInstance`](UseMaterialColorInstance.md).[`primaryPalette`](UseMaterialColorInstance.md#primarypalette)

***

### secondaryPalette?

> `optional` **secondaryPalette?**: `string`

#### Inherited from

[`UseMaterialColorInstance`](UseMaterialColorInstance.md).[`secondaryPalette`](UseMaterialColorInstance.md#secondarypalette)

***

### tertiaryPalette?

> `optional` **tertiaryPalette?**: `string`

#### Inherited from

[`UseMaterialColorInstance`](UseMaterialColorInstance.md).[`tertiaryPalette`](UseMaterialColorInstance.md#tertiarypalette)
