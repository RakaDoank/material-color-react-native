# Class: AndroidDynamicColor

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:35](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L35)

Returns Android Dynamic Color based on user's wallpaper and style.

If you instantiate the class with undefined dark option or get the instantiated class with `AndroidDynamicColor.dynamic` static method,
the module will returns color scheme based on user's theme setting.

If you are using Expo, the `userInterfaceStyle` (from expo-system-ui) configuration, or other frameworks configuration is ignored, because the theme (dark or light) detection is using Android native API

## Extends

- `DynamicColorPalettesDelegate`

## Extended by

- [`UseAndroidDynamicColorInstance`](../interfaces/UseAndroidDynamicColorInstance.md)
- [`UseAndroidDynamicColorCompatInstance`](../interfaces/UseAndroidDynamicColorCompatInstance.md)

## Implements

- `AndroidDynamicColorInterface`

## Constructors

### Constructor

> **new AndroidDynamicColor**(`options?`): `AndroidDynamicColor`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:77](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L77)

#### Parameters

##### options?

[`AndroidDynamicColorOptions`](../interfaces/AndroidDynamicColorOptions.md)

#### Returns

`AndroidDynamicColor`

#### Overrides

`DynamicColorPalettesDelegate.constructor`

## Methods

### dark()

> `static` **dark**(): `AndroidDynamicColor`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:61](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L61)

#### Returns

`AndroidDynamicColor`

***

### dynamic()

> `static` **dynamic**(): `AndroidDynamicColor`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:57](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L57)

#### Returns

`AndroidDynamicColor`

***

### isAvailable()

> `static` **isAvailable**(): `boolean`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:42](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L42)

Check if Android Dynamic Color is available on the current SDK level

#### Returns

`boolean`

***

### light()

> `static` **light**(): `AndroidDynamicColor`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:67](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L67)

#### Returns

`AndroidDynamicColor`

## Properties

### colorScheme

> `readonly` **colorScheme**: [`ColorScheme`](../interfaces/ColorScheme.md)

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:73](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L73)

#### Implementation of

`AndroidDynamicColorInterface.colorScheme`

***

### errorPalette

> `readonly` **errorPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:18](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L18)

#### Implementation of

`AndroidDynamicColorInterface.errorPalette`

#### Inherited from

`DynamicColorPalettesDelegate.errorPalette`

***

### neutralPalette

> `readonly` **neutralPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:19](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L19)

#### Implementation of

`AndroidDynamicColorInterface.neutralPalette`

#### Inherited from

`DynamicColorPalettesDelegate.neutralPalette`

***

### neutralVariantPalette

> `readonly` **neutralVariantPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:20](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L20)

#### Implementation of

`AndroidDynamicColorInterface.neutralVariantPalette`

#### Inherited from

`DynamicColorPalettesDelegate.neutralVariantPalette`

***

### primaryPalette

> `readonly` **primaryPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:15](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L15)

#### Implementation of

`AndroidDynamicColorInterface.primaryPalette`

#### Inherited from

`DynamicColorPalettesDelegate.primaryPalette`

***

### secondaryPalette

> `readonly` **secondaryPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:16](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L16)

#### Implementation of

`AndroidDynamicColorInterface.secondaryPalette`

#### Inherited from

`DynamicColorPalettesDelegate.secondaryPalette`

***

### tertiaryPalette

> `readonly` **tertiaryPalette**: `DynamicColorPalette`

Defined in: [modules/android-dynamic-color/\_DynamicColorPalettesDelegate.ts:17](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/_DynamicColorPalettesDelegate.ts#L17)

#### Implementation of

`AndroidDynamicColorInterface.tertiaryPalette`

#### Inherited from

`DynamicColorPalettesDelegate.tertiaryPalette`

***

### theme

> `readonly` **theme**: `"light"` \| `"dark"`

Defined in: [modules/android-dynamic-color/AndroidDynamicColor.ts:75](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/android-dynamic-color/AndroidDynamicColor.ts#L75)

#### Implementation of

`AndroidDynamicColorInterface.theme`
