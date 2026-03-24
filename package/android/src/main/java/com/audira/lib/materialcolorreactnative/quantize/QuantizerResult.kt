// See https://github.com/material-foundation/material-color-utilities/blob/main/kotlin/quantize/QuantizerResult.kt
package com.audira.lib.materialcolorreactnative.quantize

/** Represents result of a quantizer run */
data class QuantizerResult(val colorToCount: Map<Int, Int>)
