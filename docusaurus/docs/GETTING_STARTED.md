---
slug: /getting-started
sidebar_position: 2
---

# Getting Started

## Installation

Simply install the [`material-color-react-native`](https://npmjs.com/package/material-color-react-native) on your React Native project

#### npm
```bash
npm install material-color-react-native
```

#### yarn
```bash
yarn add material-color-react-native
```

#### pnpm
```bash
pnpm install material-color-react-native
```

🎉 That's it, no additional steps needed.

## Usage

Basically, the main purpose of this library is to get material color from an source color (Hex code), from an source image, or from an Android personal wallpaper or selected color in their system style.

Choose one (or all) of these ways to fulfill your needs

### Build Material Color from Source Color and/or Image

Build a material color from a hex code color, or from source image. This is similar as you choose a source color or an image from [Material Theme Builder website](https://material-foundation.github.io/material-theme-builder) to get color scheme of Material Color. [Let's learn how to use it](/docs/material-color).

### Android Dynamic Color

Special utility in Android platform since Android 12 (SDK 31), that Google introduced Material Design 3 _a.k.a_ Material You, and brought their APIs for [enabling users to personalize their color experience in your app](https://developer.android.com/develop/ui/views/theming/dynamic-colors) from user personal wallpaper or through selected color variants in the wallpaper picker. [Let's try in my Android app](/docs/android-dynamic-color).

### Theming with React Native Paper

Fortunately, you can bring this library with [react-native-paper](https://oss.callstack.com/react-native-paper) seamlessly to build your app beautifully with Material Design components. Get material color from this library, and provide it to [React Native Paper](https://oss.callstack.com/react-native-paper) color provider. [Go for it!](/docs/theming-with-react-native-paper)
