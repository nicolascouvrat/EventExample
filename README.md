#EventExample App

This is example code for my [medium article] about events in React-native, including various examples on how to use events to communicate from native to Javascript, or between different Javascript components.

Use `react-native run-android` to run the app.

_**note:** the native code parts are intended for android only, Xcode snippets can be found on the [official website](https://facebook.github.io/react-native/docs/native-modules-ios.html)._

## Java to Javascript

Code for the custom android module can be found in `android/app/src/main/java/com/javatojs`. Do not forget to add your custom package in `MainApplication.java`.

The javascript end is stored in `app/components/javatojs`. Note that `DeviceEventEmitter` has been used directly there, but could have been replaced with an instance of `NativeEventEmitter` (or of a class extending it).

## Javascript to javascript

Code is hosted in `app/components/jstojs`. Basically, although `DeviceEventEmitter` can be used directly, the recommended way to proceed involves instantiating `NativeEventEmitter`. Be careful that for a given event name, **events emitted in any instance of `NativeEventEmitter` can be caught by any other instance**! This is illustrated in the example app: altough `BasicEventEmitter` calls `emit` directly on the `DeviceEventEmitter`, `CustomEventEmitter` will catch it too if a subscription has been made.
