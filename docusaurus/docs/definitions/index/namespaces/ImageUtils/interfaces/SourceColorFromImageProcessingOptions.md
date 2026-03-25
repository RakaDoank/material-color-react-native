# Interface: SourceColorFromImageProcessingOptions

Defined in: [modules/utils/image/SourceColorFromImageProcessingOptions.ts:1](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/utils/image/SourceColorFromImageProcessingOptions.ts#L1)

## Properties

### maxWidthOrHeight?

> `optional` **maxWidthOrHeight?**: `number`

Defined in: [modules/utils/image/SourceColorFromImageProcessingOptions.ts:13](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/utils/image/SourceColorFromImageProcessingOptions.ts#L13)

Increase performance by limiting the maximum width or height pixel of image processing.
`undefined` or zero or less means use the original image size

#### Default

```ts
undefined
```

***

### signal?

> `optional` **signal?**: `AbortSignal`

Defined in: [modules/utils/image/SourceColorFromImageProcessingOptions.ts:7](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/utils/image/SourceColorFromImageProcessingOptions.ts#L7)

***

### timeout?

> `optional` **timeout?**: `number`

Defined in: [modules/utils/image/SourceColorFromImageProcessingOptions.ts:6](https://github.com/RakaDoank/material-color-react-native/blob/f14c14c94ca37bc44db5f52085aace1c72176fc1/package/src/modules/utils/image/SourceColorFromImageProcessingOptions.ts#L6)

In milliseconds. Default is zero. Zero or less indicates no timeout

#### Default

```ts
0
```
