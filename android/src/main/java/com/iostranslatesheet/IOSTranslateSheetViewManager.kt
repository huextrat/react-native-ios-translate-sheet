package com.iostranslatesheet

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.IOSTranslateSheetViewManagerInterface
import com.facebook.react.viewmanagers.IOSTranslateSheetViewManagerDelegate

@ReactModule(name = IOSTranslateSheetViewManager.NAME)
class IOSTranslateSheetViewManager : SimpleViewManager<IOSTranslateSheetView>(),
  IOSTranslateSheetViewManagerInterface<IOSTranslateSheetView> {
  private val mDelegate: ViewManagerDelegate<IOSTranslateSheetView>

  init {
    mDelegate = IOSTranslateSheetViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<IOSTranslateSheetView>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): IOSTranslateSheetView {
    return IOSTranslateSheetView(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: IOSTranslateSheetView?, color: String?) {
    view?.setBackgroundColor(Color.parseColor(color))
  }

  companion object {
    const val NAME = "IOSTranslateSheetView"
  }
}
