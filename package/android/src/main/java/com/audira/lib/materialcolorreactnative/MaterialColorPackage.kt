package com.audira.lib.materialcolorreactnative

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class MaterialColorPackage : BaseReactPackage() {
  override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
    return when (name) {
      MaterialColorModule.NAME -> {
        MaterialColorModule(reactContext)
      }
      AndroidDynamicColorModule.NAME -> {
        AndroidDynamicColorModule(reactContext)
      }
      else -> {
        null
      }
    }
  }

  override fun getReactModuleInfoProvider() = ReactModuleInfoProvider {
    mapOf(
      MaterialColorModule.NAME to ReactModuleInfo(
        name = MaterialColorModule.NAME,
        className = MaterialColorModule.NAME,
        canOverrideExistingModule = false,
        needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true
      ),
      AndroidDynamicColorModule.NAME to ReactModuleInfo(
        name = AndroidDynamicColorModule.NAME,
        className = AndroidDynamicColorModule.NAME,
        canOverrideExistingModule = false,
        needsEagerInit = false,
        isCxxModule = false,
        isTurboModule = true,
      )
    )
  }
}
