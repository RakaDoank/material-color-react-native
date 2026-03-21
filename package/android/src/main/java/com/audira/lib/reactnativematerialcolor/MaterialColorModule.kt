package com.audira.lib.reactnativematerialcolor

import android.graphics.Bitmap
import com.audira.lib.reactnativematerialcolor.utils.ImageUtils
import com.audira.lib.reactnativematerialcolor.utils.StringUtils
import com.bumptech.glide.Glide
import com.bumptech.glide.request.target.SimpleTarget
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext

class MaterialColorModule(reactApplicationContext: ReactApplicationContext) : NativeMaterialColorSpec(reactApplicationContext) {

  private val mapOfSignalIDToGlideTarget = mutableMapOf<String, SimpleTarget<Bitmap>>()

  override fun sourceColorFromImageUri(
    uri: String,
    signalID: String,
    promise: Promise,
  ) {
    ImageUtils.sourceColorFromImageUri(
      uri,
      reactApplicationContext,
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
    promise: Promise,
  ) {
    ImageUtils.sourceColorFromImageUri(
      uri,
      reactApplicationContext,
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
