/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

import JavaToJSComponent from './components/javatojs/JavaToJSComponent';
import JSToJSComponent from './components/jstojs/JSToJSComponent';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <JavaToJSComponent />
        <JSToJSComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
