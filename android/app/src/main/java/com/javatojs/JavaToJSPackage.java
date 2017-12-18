package com.javatojs;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Packaging is necessary, because this is what allows React Native
 * to properly instanciate your component, linking it to the current
 * ReactContext, which in turns allows you to reference other modules of
 * the same context in your custom module.
 */
public class JavaToJSPackage implements ReactPackage {
  @Override
  public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }

  @Override
  public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new JavaToJS(reactContext));
    return modules;
  }
}
