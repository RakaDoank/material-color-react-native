# Function: useAndroidDynamicColorCompat()

> **useAndroidDynamicColorCompat**(`sourceColorFallback`, `options?`): [`UseAndroidDynamicColorCompatInstance`](../interfaces/UseAndroidDynamicColorCompatInstance.md)

Defined in: [hooks/use-android-dynamic-color-compat/useAndroidDynamicColorCompat.tsx:26](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/hooks/use-android-dynamic-color-compat/useAndroidDynamicColorCompat.tsx#L26)

Android Dynamic Color is only supported on Android and SDK 31 (Android 12) or latest.

You may use this hook to get consistent result, but you have to provide a source color as a fallback in case the current app is outside of the compatibility constraints.

## Parameters

### sourceColorFallback

`string`

Provide a source color to build a material color as a fallback

### options?

[`UseMaterialColorOptions`](../interfaces/UseMaterialColorOptions.md)

## Returns

[`UseAndroidDynamicColorCompatInstance`](../interfaces/UseAndroidDynamicColorCompatInstance.md)
