import React from 'react';
import {
  View,
  Button,
  NativeModules,
  DeviceEventEmitter,
  Text,
  StyleSheet,
} from 'react-native';

/**
 * Using NativeModules allows us to reference the java module packaged in MainActivity.java
 * through the React native bridge.
 */
const JavaToJS = NativeModules.JavaToJS;

/**
 * This component makes use of a custom java component (that emit events),
 * and catches incoming events.
 * @see the com.javatojs package
 */

export default class JavaToJSComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.handlePress = this.handlePress.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }
  componentDidMount() {
    /**
     * Because the native module directly emits event to the DeviceEventEmitter,
     * the only thing that needs to be done is adding an event listener to it
     */
    this.listener = DeviceEventEmitter.addListener('javaToJS', this.handleEvent);
  }

  componentWillUnmount() {
    // an event listener must always be removed at unmount to avoid unexpected calls
    DeviceEventEmitter.removeListener(this.listener);
  }

  handleEvent(e) {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  handlePress() {
    JavaToJS.fire();
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        <Text style={[styles.text, styles.textBold]}>This button triggers java code emitting an event, then listens to it</Text>
        <Button
          title="Trigger Java to JS event"
          onPress={this.handlePress}
        />
        <Text style={styles.text}>Received {this.state.count} events so far</Text>
      </View>
    );
  }
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
