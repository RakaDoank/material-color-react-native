// See https://github.com/material-foundation/material-color-utilities/blob/main/kotlin/utils/StringUtils.kt
package com.audira.lib.materialcolorreactnative.utils

object StringUtils {

  /**
   * Hex string representing color, ex. #ff0000 for red.
   *
   * @param argb ARGB representation of a color.
   */
  fun hexFromArgb(argb: Int): String {
    val red = ColorUtils.redFromArgb(argb)
    val blue = ColorUtils.blueFromArgb(argb)
    val green = ColorUtils.greenFromArgb(argb)
    return String.format("#%02x%02x%02x", red, green, blue)
  }

}