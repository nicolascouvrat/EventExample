package com.javatojs;

import android.widget.Toast;
import android.support.annotation.Nullable;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.bridge.Arguments;

import java.util.Map;
import java.util.HashMap;

/**
 * Defines a really simple module that:
 *  - can be called directely from javascript
 *  - will emit an event when called, event that can then be catched in JS
 */

public class JavaToJS extends ReactContextBaseJavaModule {
  private static final String EVENT_KEY = "javaToJS";
  private static final String BASE_MESSAGE = "Sending a 'javaToJs' event...";

  private int counter;

  private void sendEvent(
    ReactContext reactContext,
    String eventName,
    @Nullable WritableMap params
  ) {
    // this gets the handle to the javascript module associated with the
    // RCTDeviceEventEmitter's instance in the current context
    // (i.e. for the currently running app)
    // then emits an event (a WritableMap is the java equivalent of a js object)
    reactContext
      .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
      .emit(eventName, params);
  }

  private void emitEventAndIncrement() {
    WritableMap eventMap = Arguments.createMap();
    eventMap.putString("type", EVENT_KEY);
    sendEvent(getReactApplicationContext(), EVENT_KEY, eventMap);
    counter += 1;
  }

  @Override
  public String getName() {
    return "JavaToJS";
  }

  @ReactMethod
  public void fire() {
    emitEventAndIncrement();
    String message = BASE_MESSAGE + "(" + counter + ")";
    Toast.makeText(getReactApplicationContext(), message, Toast.LENGTH_SHORT).show();

  }

  public JavaToJS(ReactApplicationContext reactContext) {
    super(reactContext);
    counter = 0;
  }
}
