// See https://github.com/material-foundation/material-color-utilities/blob/main/kotlin/quantize/Quantizer.kt
package com.audira.lib.materialcolorreactnative.quantize

internal interface Quantizer {
  fun quantize(pixels: IntArray, maxColors: Int): QuantizerResult
}
