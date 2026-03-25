# Interface: UseAndroidDynamicColorInstance

Defined in: [hooks/use-android-dynamic-color/UseAndroidDynamicColorInstance.ts:5](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/hooks/use-android-dynamic-color/UseAndroidDynamicColorInstance.ts#L5)

Returns Android Dynamic Color based on user's wallpaper and style.

If you instantiate the class with undefined dark option or get the instantiated class with `AndroidDynamicColor.dynamic` static method,
the module will returns color scheme based on user's theme setting.

If you are using Expo, the `userInterfaceStyle` (from expo-system-ui) configuration, or other frameworks configuration is ignored, because the theme (dark or light) detection is using Android native API

## Extends

- [`AndroidDynamicColor`](../classes/AndroidDynamicColor.md)

## Properties

### colorScheme

> `readonly` **colorScheme**: [`ColorScheme`](ColorScheme.md)

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:73](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L73)

#### Inherited from

`UseAndroidDynamicColorInstance`.[`colorScheme`](#colorscheme)

***

### errorPalette

> `readonly` **errorPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:18](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L18)

#### Inherited from

[`AndroidDynamicColor`](../classes/AndroidDynamicColor.md).[`errorPalette`](../classes/AndroidDynamicColor.md#errorpalette)

***

### neutralPalette

> `readonly` **neutralPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:19](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L19)

#### Inherited from

[`AndroidDynamicColor`](../classes/AndroidDynamicColor.md).[`neutralPalette`](../classes/AndroidDynamicColor.md#neutralpalette)

***

### neutralVariantPalette

> `readonly` **neutralVariantPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:20](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L20)

#### Inherited from

[`AndroidDynamicColor`](../classes/AndroidDynamicColor.md).[`neutralVariantPalette`](../classes/AndroidDynamicColor.md#neutralvariantpalette)

***

### primaryPalette

> `readonly` **primaryPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:15](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L15)

#### Inherited from

[`AndroidDynamicColor`](../classes/AndroidDynamicColor.md).[`primaryPalette`](../classes/AndroidDynamicColor.md#primarypalette)

***

### secondaryPalette

> `readonly` **secondaryPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:16](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L16)

#### Inherited from

[`AndroidDynamicColor`](../classes/AndroidDynamicColor.md).[`secondaryPalette`](../classes/AndroidDynamicColor.md#secondarypalette)

***

### tertiaryPalette

> `readonly` **tertiaryPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:17](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L17)

#### Inherited from

[`AndroidDynamicColor`](../classes/AndroidDynamicColor.md).[`tertiaryPalette`](../classes/AndroidDynamicColor.md#tertiarypalette)

***

### theme

> `readonly` **theme**: `"light"` \| `"dark"`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:75](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L75)

#### Inherited from

`UseAndroidDynamicColorInstance`.[`theme`](#theme)
