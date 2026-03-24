package com.audira.lib.materialcolorreactnative.utils

import android.graphics.Bitmap
import android.graphics.drawable.Drawable
import androidx.core.net.toUri
import com.audira.lib.materialcolorreactnative.quantize.QuantizerCelebi
import com.audira.lib.materialcolorreactnative.score.Score
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.bumptech.glide.request.target.SimpleTarget
import com.bumptech.glide.request.transition.Transition
import com.facebook.react.bridge.ReactApplicationContext
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext

object ImageUtils {

  @OptIn(ExperimentalUnsignedTypes::class)
  fun sourceColorFromImageUri(
    uri: String,
    reactApplicationContext: ReactApplicationContext,
    maxWidthOrHeight: Int?,
    targetCallback: (target: SimpleTarget<Bitmap>) -> Unit,
    callback: (color: Int?) -> Unit,
  ) {
    val target = Glide.with(reactApplicationContext)
      .asBitmap()
      .load(uri.toUri())
      .apply(object : RequestOptions() {
        override fun override(size: Int): RequestOptions {
          if(maxWidthOrHeight != null && maxWidthOrHeight > 0) {
            return super.override(maxWidthOrHeight)
          } else {
            return super.override(size)
          }
        }
      })
      // At this moment, just skip the memory cache
      // because this library is not doing anything to the Android Lifecycle
      .skipMemoryCache(true)
      .into(object : SimpleTarget<Bitmap>() {
        override fun onLoadFailed(errorDrawable: Drawable?) {
          super.onLoadFailed(errorDrawable)
          callback(null)
        }
        override fun onResourceReady(
          resource: Bitmap,
          transition: Transition<in Bitmap>?
        ) {
          val x = resource.width
          val y = resource.height
          val intArray = IntArray(x * y)
          resource.getPixels(intArray, 0, x, 0, 0, x, y)

          CoroutineScope(Dispatchers.Default).launch {
            callback(
              sourceColorFromImageBitmap(intArray)
            )
          }
          // At this moment
          // I don't provide the Coroutines cancellation
          // I only provide the Glide cancellation by providing the Glide target
          // If you have better idea, please
        }
      })
    targetCallback(target)
  }

  suspend fun sourceColorFromImageBitmap(pixels: IntArray): Int =
    withContext(Dispatchers.Default) {
      val filteredPixels = ArrayList<Int>(pixels.size / 4)

      for(i in pixels.indices step 4) {
        val pixel = pixels[i]
        val a = (pixel shr 24) and 0xFF

        if(a < 255) {
          continue
        }

        filteredPixels.add(pixel)
      }

      val result = QuantizerCelebi.quantize(filteredPixels.toIntArray(), 128)
      val ranked = Score.score(result)
      val top = ranked[0]
      top
    }

  /**
   * This is function converted from TypeScript @material/material-color-utilities
   * and we should not use it for Android because Android Image's Bitmap
   * stores pixels in ARGB byte order
   */
  @OptIn(ExperimentalUnsignedTypes::class)
  fun sourceColorFromImageBytes(imageBytes: UByteArray): Int {
    val pixels = arrayListOf<Int>()

    for(i in 0 until imageBytes.size step 4) {
      val r = imageBytes[i]
      val g = imageBytes[i + 1]
      val b = imageBytes[i + 2]
      val a = imageBytes[i + 3]

      if(a < 255u) {
        continue
      }
      val argb = ColorUtils.argbFromRgb(r.toInt(), g.toInt(), b.toInt())
      pixels.add(argb)
    }

    // Convert Pixels to Material Colors
    val result = QuantizerCelebi.quantize(pixels.toIntArray(), 128)
    val ranked = Score.score(result)
    val top = ranked[0]
    return top
  }

}