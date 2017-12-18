import React from 'react';
import {
  View,
  Text,
  DeviceEventEmitter,
  StyleSheet,
} from 'react-native';

/**
 * This component directly add a listener to the DeviceEventEmitter,
 * catching any 'jSToJS' event emitted accross the app.
 *
 * NOTE: Although it is possible to listen & emit events directly with DeviceEventEmitter,
 * this has been marked as deprecated. You should now use & extend the NativeEventEmitter class
 * @see CustomEmitterComponent
 */

 const styles = StyleSheet.create({
   view: {
     borderWidth: 1,
     marginVertical: 5,
     marginHorizontal: 10,
   },
   text: {
     textAlign: 'center',
   },
   textBold: {
     fontWeight: 'bold',
   },
 });

class BasicListenerComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.handleEvent = this.handleEvent.bind(this);
  }

  componentDidMount() {
    this.listener = DeviceEventEmitter.addListener('jSToJS', this.handleEvent);
  }

  componentWillUnmount() {
    DeviceEventEmitter.removeListener(this.listener);
  }

  handleEvent() {
    this.setState(prevState => ({count: prevState.count + 1 }));
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        <Text style={[styles.text, styles.textBold]}>This listens to jSToJS events on DeviceEventEmitter from the start</Text>
        <Text style={styles.text}>Received {this.state.count} jSToJS events so far </Text>
      </View>
    );
  }
}

export default BasicListenerComponent;
