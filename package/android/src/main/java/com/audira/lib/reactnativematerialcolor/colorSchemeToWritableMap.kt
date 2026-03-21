package com.audira.lib.reactnativematerialcolor

import androidx.compose.material3.ColorScheme
import androidx.compose.ui.graphics.toArgb
import com.audira.lib.reactnativematerialcolor.utils.StringUtils
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableMap

fun colorSchemeToWritableMap(
  colorScheme: ColorScheme,
): WritableMap {
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