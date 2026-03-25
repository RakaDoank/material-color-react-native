<h1 align="center">
  Material Color React Native
</h1>

Bring material color utilities from the [`@material-foundation/material-color-utilities`](https://github.com/material-foundation/material-color-utilities), including the material color builder from an image, and the special [Android Dynamic Color](https://developer.android.com/develop/ui/views/theming/dynamic-colors).

## Motives

Basically, this library is similar as other libraries you can found to build material color, as [The Science of Color & Design](https://m3.material.io/blog/science-of-color-design) has been done by a Google engineer including their [source code](https://github.com/material-foundation/material-color-utilities), but the inexistence of the utility for building material color from an image for React Native especially on Android, iOS (including macOS) is really the main motive why [`material-color-react-native`](https://github.com/RakaDoank/material-color-react-native) was created.

Bringing the material color utility from an image is a personal challenge. Previously, I have to use [React Native Skia](https://github.com/Shopify/react-native-skia) on Android app to get a Bitmap from an image, because the original [source code](https://github.com/material-foundation/material-color-utilities) from Material Foundation is using HTML Canvas which is really not a compatible for non Web platform, and using the React Native Skia only for that utility is really an overkill.

## Compatibility

This library is only supported on React Native New Architecture, and the material color utility from a source image is not supported on React Native for Windows at this moment

| Platform | Compatible | Remark        |
| -------- | ---------- | ------------- |
| Android  | ✅         |
| iOS      | ✅         |
| macOS    | ✅         |
| Windows  | Partial    | Get material color from an image is not supported
| Web      | ✅         |

> Hopefully, I can bring the compatibility to Windows.

## Documentation

Go to https://rakadoank.github.io/material-color-react-native
