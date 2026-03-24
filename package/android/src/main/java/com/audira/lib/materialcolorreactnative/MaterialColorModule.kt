package com.audira.lib.materialcolorreactnative

import android.graphics.Bitmap
import com.audira.lib.materialcolorreactnative.utils.ImageUtils
import com.audira.lib.materialcolorreactnative.utils.StringUtils
import com.bumptech.glide.Glide
import com.bumptech.glide.request.target.SimpleTarget
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext

class MaterialColorModule(reactApplicationContext: ReactApplicationContext) : NativeMaterialColorSpec(reactApplicationContext) {

  private val mapOfSignalIDToGlideTarget = mutableMapOf<String, SimpleTarget<Bitmap>>()

  override fun sourceColorFromImageUri(
    uri: String,
    signalID: String,
    maxWidthOrHeight: Double?,
    promise: Promise,
  ) {
    ImageUtils.sourceColorFromImageUri(
      uri,
      reactApplicationContext,
      maxWidthOrHeight?.toInt(),
      {
        mapOfSignalIDToGlideTarget.put(signalID, it)
      }
    ) {
      mapOfSignalIDToGlideTarget.remove(signalID)
      promise.resolve(it)
    }
  }

  override fun sourceHexColorFromImageUri(
    uri: String,
    signalID: String,
    maxWidthOrHeight: Double?,
    promise: Promise,
  ) {
    ImageUtils.sourceColorFromImageUri(
      uri,
      reactApplicationContext,
      maxWidthOrHeight?.toInt(),
      {
        mapOfSignalIDToGlideTarget.put(signalID, it)
      },
    ) {
      mapOfSignalIDToGlideTarget.remove(signalID)
      if(it != null) {
        promise.resolve(StringUtils.hexFromArgb(it))
      } else {
        promise.resolve(null)
      }
    }
  }

  override fun cancelSourceColorFromImageUri(signalID: String) {
    val glideTarget = mapOfSignalIDToGlideTarget[signalID]
    if(glideTarget != null) {
      Glide.with(reactApplicationContext).clear(glideTarget)
      mapOfSignalIDToGlideTarget.remove(signalID)
    }
  }

  companion object {
    const val NAME = NativeMaterialColorSpec.NAME
  }

}
