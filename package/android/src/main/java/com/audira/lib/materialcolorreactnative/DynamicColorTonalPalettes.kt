package com.audira.lib.materialcolorreactnative

import android.content.Context
import android.content.res.Configuration
import android.os.Build
import androidx.annotation.RequiresApi
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.toArgb
import com.audira.lib.materialcolorreactnative.utils.StringUtils
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReadableMap

/**
 * This is really a desperation.
 * This class is a manual tonal color mapper to bunch of system colors.
 * You can see the original source code at (link attached at this doc)
 *
 * I really can't get the source/seed color, or the generated dynamic tonal palettes
 * from Android Dynamic Color APIs or related.
 *
 * If we can retrieve or the source color, we really don't need this Kotlin class, just send it to JS.
 *
 * If we can get the generated tonal palettes, the manual mapper is unnecessary.
 *
 * If you have better idea, please fix this. I really love it.
 *
 * @see <a href="https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:compose/material3/material3/src/androidMain/kotlin/androidx/compose/material3/DynamicTonalPalette.android.kt">The Source Code</a>
 * @see androidx.compose.material3.dynamicDarkColorScheme
 */
class DynamicColorTonalPalettes(
  context: ReactApplicationContext,
  isDark: Boolean,
) {

  interface TonalPalette {
    val t0: String
    val t10: String
    val t20: String
    val t30: String
    val t40: String
    val t50: String
    val t60: String
    val t70: String
    val t80: String
    val t90: String
    val t95: String
    val t99: String
    val t100: String
  }

  private val primary: TonalPalette
  
  private val secondary: TonalPalette
  
  private val tertiary: TonalPalette
  
  // It doesn't has error palette
  // private val error: TonalPalette
  
  private val neutral: TonalPalette
  
  private val neutralVariant: TonalPalette

  init {
    val configuration = Configuration(context.resources.configuration)

    if(isDark) {
      configuration.uiMode = (configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK.inv()) or Configuration.UI_MODE_NIGHT_YES
    } else {
      configuration.uiMode = (configuration.uiMode and Configuration.UI_MODE_NIGHT_MASK.inv()) or Configuration.UI_MODE_NIGHT_NO
    }

    val themedContext = context.createConfigurationContext(configuration)

    primary = object : TonalPalette {
      @RequiresApi(Build.VERSION_CODES.S)
      override val t0 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_1000, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t10 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_900, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t20 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_800, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t30 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_700, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t40 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_600, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t50 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_500, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t60 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_400, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t70 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_300, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t80 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_200, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t90 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_100, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t95 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_50, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t99 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_10, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t100 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent1_0, themedContext.theme)).toArgb(),
        )
    } // primary

    secondary = object : TonalPalette {
      @RequiresApi(Build.VERSION_CODES.S)
      override val t0 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_1000, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t10 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_900, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t20 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_800, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t30 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_700, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t40 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_600, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t50 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_500, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t60 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_400, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t70 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_300, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t80 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_200, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t90 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_100, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t95 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_50, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t99 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_10, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t100 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent2_0, themedContext.theme)).toArgb(),
        )
    } // secondary

    tertiary = object : TonalPalette {
      @RequiresApi(Build.VERSION_CODES.S)
      override val t0 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_1000, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t10 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_900, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t20 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_800, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t30 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_700, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t40 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_600, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t50 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_500, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t60 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_400, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t70 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_300, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t80 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_200, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t90 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_100, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t95 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_50, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t99 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_10, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t100 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_accent3_0, themedContext.theme)).toArgb(),
        )
    } // tertiary

    neutral = object : TonalPalette {
      @RequiresApi(Build.VERSION_CODES.S)
      override val t0 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_1000, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t10 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_900, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t20 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_800, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t30 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_700, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t40 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_600, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t50 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_500, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t60 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_400, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t70 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_300, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t80 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_200, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t90 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_100, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t95 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_50, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t99 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_10, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t100 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral1_0, themedContext.theme)).toArgb(),
        )
    } // neutral

    neutralVariant = object : TonalPalette {
      @RequiresApi(Build.VERSION_CODES.S)
      override val t0 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_1000, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t10 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_900, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t20 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_800, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t30 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_700, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t40 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_600, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t50 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_500, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t60 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_400, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t70 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_300, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t80 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_200, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t90 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_100, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t95 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_50, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t99 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_10, themedContext.theme)).toArgb(),
        )

      @RequiresApi(Build.VERSION_CODES.S)
      override val t100 =
        StringUtils.hexFromArgb(
          Color(context.resources.getColor(android.R.color.system_neutral2_0, themedContext.theme)).toArgb(),
        )
    } // neutral variant

  }
  
  fun toReadableMap(): ReadableMap {
    val map = Arguments.createMap()

    map.putString("primary0", primary.t0)
    map.putString("primary10", primary.t10)
    map.putString("primary20", primary.t20)
    map.putString("primary30", primary.t30)
    map.putString("primary40", primary.t40)
    map.putString("primary50", primary.t50)
    map.putString("primary60", primary.t60)
    map.putString("primary70", primary.t70)
    map.putString("primary80", primary.t80)
    map.putString("primary90", primary.t90)
    map.putString("primary95", primary.t95)
    map.putString("primary99", primary.t99)
    map.putString("primary100", primary.t100)

    map.putString("secondary0", secondary.t0)
    map.putString("secondary10", secondary.t10)
    map.putString("secondary20", secondary.t20)
    map.putString("secondary30", secondary.t30)
    map.putString("secondary40", secondary.t40)
    map.putString("secondary50", secondary.t50)
    map.putString("secondary60", secondary.t60)
    map.putString("secondary70", secondary.t70)
    map.putString("secondary80", secondary.t80)
    map.putString("secondary90", secondary.t90)
    map.putString("secondary95", secondary.t95)
    map.putString("secondary99", secondary.t99)
    map.putString("secondary100", secondary.t100)
    
    map.putString("tertiary0", tertiary.t0)
    map.putString("tertiary10", tertiary.t10)
    map.putString("tertiary20", tertiary.t20)
    map.putString("tertiary30", tertiary.t30)
    map.putString("tertiary40", tertiary.t40)
    map.putString("tertiary50", tertiary.t50)
    map.putString("tertiary60", tertiary.t60)
    map.putString("tertiary70", tertiary.t70)
    map.putString("tertiary80", tertiary.t80)
    map.putString("tertiary90", tertiary.t90)
    map.putString("tertiary95", tertiary.t95)
    map.putString("tertiary99", tertiary.t99)
    map.putString("tertiary100", tertiary.t100)

    map.putString("neutral0", neutral.t0)
    map.putString("neutral10", neutral.t10)
    map.putString("neutral20", neutral.t20)
    map.putString("neutral30", neutral.t30)
    map.putString("neutral40", neutral.t40)
    map.putString("neutral50", neutral.t50)
    map.putString("neutral60", neutral.t60)
    map.putString("neutral70", neutral.t70)
    map.putString("neutral80", neutral.t80)
    map.putString("neutral90", neutral.t90)
    map.putString("neutral95", neutral.t95)
    map.putString("neutral99", neutral.t99)
    map.putString("neutral100", neutral.t100)

    map.putString("neutralVariant0", neutralVariant.t0)
    map.putString("neutralVariant10", neutralVariant.t10)
    map.putString("neutralVariant20", neutralVariant.t20)
    map.putString("neutralVariant30", neutralVariant.t30)
    map.putString("neutralVariant40", neutralVariant.t40)
    map.putString("neutralVariant50", neutralVariant.t50)
    map.putString("neutralVariant60", neutralVariant.t60)
    map.putString("neutralVariant70", neutralVariant.t70)
    map.putString("neutralVariant80", neutralVariant.t80)
    map.putString("neutralVariant90", neutralVariant.t90)
    map.putString("neutralVariant95", neutralVariant.t95)
    map.putString("neutralVariant99", neutralVariant.t99)
    map.putString("neutralVariant100", neutralVariant.t100)

    return map
  }

}