import React from 'react';
import {
  View,
  Text,
  NativeEventEmitter,
  Button,
  StyleSheet,
  Dimensions,
} from 'react-native';

const maxWidth = Dimensions.get('window').width * 0.8;

/**
 * This component posseses an instance of NativeEventEmitter, used to
 * send and listen to events. Because every instance of NativeEventEmitter is created
 * with a reference to a central EventSubscriptionVendor, subscriptions are effectively
 * shared accross ALL instances of NativeEventEmitter. 
 */
class CustomEmitterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.eventEmitter = new NativeEventEmitter();

    this.handleEmit = this.handleEmit.bind(this);
    this.handleListen = this.handleListen.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  componentWillUnmount() {
    if (this.listener) {
      this.eventEmitter.removeListener(this.listener);
    }
  }

  handleEmit() {
    this.eventEmitter.emit('jSToJS', { type: 'jSToJS' });
  }

  handleListen() {
    this.listener = this.eventEmitter.addListener('jSToJS', this.handleEvent);
  }

  handleEvent() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  render() {
    return (
      <View
        style={styles.view}
      >
        <Text style={[styles.text, styles.textBold]}>This component has its own instance of NativeEventEmitter</Text>
        <Text style={styles.text}>Be careful, subscriptions are shared across all emitters!</Text>
        <Button
          title="Emit a jSToJS event"
          onPress={this.handleEmit}
        />
        <Button
          title="Listen for jSToJS events"
          onPress={this.handleListen}
        />
        <Text style={styles.text}> Received {this.state.count} jSToJS events so far</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  view: {
    maxWidth: maxWidth,
    backgroundColor: '#F1F1F1',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginVertical: 5,
  },
  text: {
    textAlign: 'center',
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default CustomEmitterComponent;
