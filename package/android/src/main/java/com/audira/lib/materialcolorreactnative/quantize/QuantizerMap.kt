// See https://github.com/material-foundation/material-color-utilities/blob/main/kotlin/quantize/QuantizerMap.kt
package com.audira.lib.materialcolorreactnative.quantize

import java.util.LinkedHashMap

/** Creates a dictionary with keys of colors, and values of count of the color */
class QuantizerMap : Quantizer {
  var colorToCount: MutableMap<Int, Int>? = null
    private set

  override fun quantize(pixels: IntArray, maxColors: Int): QuantizerResult {
    val pixelByCount: MutableMap<Int, Int> = LinkedHashMap()
    for (pixel in pixels) {
      val currentPixelCount = pixelByCount[pixel]
      val newPixelCount = if (currentPixelCount == null) 1 else currentPixelCount + 1
      pixelByCount[pixel] = newPixelCount
    }
    colorToCount = pixelByCount
    return QuantizerResult(pixelByCount)
  }
}
