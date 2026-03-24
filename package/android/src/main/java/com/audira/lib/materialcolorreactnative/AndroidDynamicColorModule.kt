package com.audira.lib.materialcolorreactnative

import android.content.res.Configuration
import android.os.Build
import androidx.annotation.RequiresApi
import androidx.compose.material3.ColorScheme
import androidx.compose.material3.dynamicDarkColorScheme as m3DynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme as m3DynamicLightColorScheme
import androidx.compose.ui.graphics.toArgb
import com.audira.lib.materialcolorreactnative.utils.StringUtils
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.WritableMap

class AndroidDynamicColorModule(reactApplicationContext: ReactApplicationContext) : NativeAndroidDynamicColorSpec(reactApplicationContext) {

  @RequiresApi(Build.VERSION_CODES.S)
  override fun getDynamicDarkColor(): WritableMap {
    return getDynamicColorMap(true)
  }

  @RequiresApi(Build.VERSION_CODES.S)
  override fun getDynamicLightColor(): WritableMap {
    return getDynamicColorMap(false)
  }

  @RequiresApi(Build.VERSION_CODES.S)
  override fun getDynamicColor(): WritableMap {
    val isSystemInDarkTheme =
      reactApplicationContext.resources.configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK == Configuration.UI_MODE_NIGHT_YES

    return getDynamicColorMap(isSystemInDarkTheme)
  }

  @RequiresApi(Build.VERSION_CODES.S)
  private fun getDynamicColorMap(isDark: Boolean): WritableMap {
    val colorMap = colorToWritableMap(
      if (isDark) m3DynamicDarkColorScheme(reactApplicationContext)
      else m3DynamicLightColorScheme(reactApplicationContext)
    )

    // Join with tonal palettes
    val dynamicColorTonalPalettes = DynamicColorTonalPalettes(reactApplicationContext, isDark)
    colorMap.merge(dynamicColorTonalPalettes.toReadableMap())

    // Additional property for `AndroidDynamicColor` JavaScript class member
    colorMap.putBoolean("isDark", isDark)

    return colorMap
  }

  companion object {
    const val NAME = NativeAndroidDynamicColorSpec.NAME
  }

}

private fun colorToWritableMap(colorScheme: ColorScheme): WritableMap {
  return Arguments.createMap().apply {
    putString("primary", StringUtils.hexFromArgb(colorScheme.primary.toArgb()))
    putString("onPrimary", StringUtils.hexFromArgb(colorScheme.onPrimary.toArgb()))
    putString("primaryContainer", StringUtils.hexFromArgb(colorScheme.primaryContainer.toArgb()))
    putString("onPrimaryContainer", StringUtils.hexFromArgb(colorScheme.onPrimaryContainer.toArgb()))
    putString("inversePrimary", StringUtils.hexFromArgb(colorScheme.inversePrimary.toArgb()))
    putString("secondary", StringUtils.hexFromArgb(colorScheme.secondary.toArgb()))
    putString("onSecondary", StringUtils.hexFromArgb(colorScheme.onSecondary.toArgb()))
    putString("secondaryContainer", StringUtils.hexFromArgb(colorScheme.secondaryContainer.toArgb()))
    putString("onSecondaryContainer", StringUtils.hexFromArgb(colorScheme.onSecondaryContainer.toArgb()))
    putString("tertiary", StringUtils.hexFromArgb(colorScheme.tertiary.toArgb()))
    putString("onTertiary", StringUtils.hexFromArgb(colorScheme.onTertiary.toArgb()))
    putString("tertiaryContainer", StringUtils.hexFromArgb(colorScheme.tertiaryContainer.toArgb()))
    putString("onTertiaryContainer", StringUtils.hexFromArgb(colorScheme.onTertiaryContainer.toArgb()))
    putString("background", StringUtils.hexFromArgb(colorScheme.background.toArgb()))
    putString("onBackground", StringUtils.hexFromArgb(colorScheme.onBackground.toArgb()))
    putString("surface", StringUtils.hexFromArgb(colorScheme.surface.toArgb()))
    putString("onSurface", StringUtils.hexFromArgb(colorScheme.onSurface.toArgb()))
    putString("surfaceVariant", StringUtils.hexFromArgb(colorScheme.surfaceVariant.toArgb()))
    putString("onSurfaceVariant", StringUtils.hexFromArgb(colorScheme.onSurfaceVariant.toArgb()))
    putString("surfaceTint", StringUtils.hexFromArgb(colorScheme.surfaceTint.toArgb()))
    putString("inverseSurface", StringUtils.hexFromArgb(colorScheme.inverseSurface.toArgb()))
    putString("inverseOnSurface", StringUtils.hexFromArgb(colorScheme.inverseOnSurface.toArgb()))
    putString("error", StringUtils.hexFromArgb(colorScheme.error.toArgb()))
    putString("onError", StringUtils.hexFromArgb(colorScheme.onError.toArgb()))
    putString("errorContainer", StringUtils.hexFromArgb(colorScheme.errorContainer.toArgb()))
    putString("onErrorContainer", StringUtils.hexFromArgb(colorScheme.onErrorContainer.toArgb()))
    putString("outline", StringUtils.hexFromArgb(colorScheme.outline.toArgb()))
    putString("outlineVariant", StringUtils.hexFromArgb(colorScheme.outlineVariant.toArgb()))
    putString("scrim", StringUtils.hexFromArgb(colorScheme.scrim.toArgb()))
    putString("surfaceBright", StringUtils.hexFromArgb(colorScheme.surfaceBright.toArgb()))
    putString("surfaceDim", StringUtils.hexFromArgb(colorScheme.surfaceDim.toArgb()))
    putString("surfaceContainer", StringUtils.hexFromArgb(colorScheme.surfaceContainer.toArgb()))
    putString("surfaceContainerHigh", StringUtils.hexFromArgb(colorScheme.surfaceContainerHigh.toArgb()))
    putString("surfaceContainerHighest", StringUtils.hexFromArgb(colorScheme.surfaceContainerHighest.toArgb()))
    putString("surfaceContainerLow", StringUtils.hexFromArgb(colorScheme.surfaceContainerLow.toArgb()))
    putString("surfaceContainerLowest", StringUtils.hexFromArgb(colorScheme.surfaceContainerLowest.toArgb()))
  }
}