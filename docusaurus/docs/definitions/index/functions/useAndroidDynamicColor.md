# Function: useAndroidDynamicColor()

> **useAndroidDynamicColor**(`options?`): [`UseAndroidDynamicColorInstance`](../interfaces/UseAndroidDynamicColorInstance.md)

Defined in: [hooks/use-android-dynamic-color/useAndroidDynamicColor.tsx:24](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/hooks/use-android-dynamic-color/useAndroidDynamicColor.tsx#L24)

Returns Android Dynamic Color based on user's wallpaper and style.
It automatically updates if app color scheme changes

Android Dynamic Color is only supported on Android and SDK 31 (Android 12) or latest.
You may want to use `useAndroidDynamicColorCompat` in case the current app is not compatible, and still get the material color from a source color as a fallback.

## Parameters

### options?

[`UseAndroidDynamicColorOptions`](../interfaces/UseAndroidDynamicColorOptions.md)

## Returns

[`UseAndroidDynamicColorInstance`](../interfaces/UseAndroidDynamicColorInstance.md)
