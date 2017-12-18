import React from 'react';
import {
  Text,
  Button,
  View,
  DeviceEventEmitter,
  StyleSheet,
} from 'react-native';

/**
 * This component directly calls on to the DeviceEventEmitter to emit a 'jSToJS' event
 *
 * NOTE: Although it is possible to listen & emit events directly with DeviceEventEmitter,
 * this has been marked as deprecated. You should now use & extend the NativeEventEmitter class
 * @see CustomEmitterComponent
 */

const BasicEmitterComponent = () => {
  const handlePress = () => DeviceEventEmitter.emit('jSToJS', { type: 'jSToJS' });
  return (
    <View
      style={styles.view}
    >
      <Text style={[styles.text, styles.textBold]}>This button emits event directly to DeviceEventEmitter</Text>
      <Button
        title="Emit a jSToJS event"
        onPress={handlePress}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    marginVertical: 5
  },
  text: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default BasicEmitterComponent;
