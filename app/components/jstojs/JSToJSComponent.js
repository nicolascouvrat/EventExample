import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import BasicEmitterComponent from './BasicEmitterComponent';
import BasicListenerComponent from './BasicListenerComponent';
import CustomEmitterComponent from './CustomEmitterComponent';

const width = Dimensions.get('window').width * 0.9;

const JSToJSComponent = () => {
  const styles = StyleSheet.create({
    externalView: {
      backgroundColor: '#D3D3D3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    intervalView: {
      backgroundColor: '#E4E4E4',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: width,
    },
    text: {
      textAlign: 'center',
    },
    textBold: {
      fontWeight: 'bold',
    },
  });
  
  return (
    <View
      style={styles.externalView}
    >
      <Text
        style={[styles.text, styles.textBold]}
      >
        The below components do not interact with native
      </Text>
      <BasicEmitterComponent />
      <BasicListenerComponent />
      <View
        style={styles.intervalView}
      >
        <Text>This is one view deeper</Text>
        <CustomEmitterComponent />
      </View>
    </View>
  )
}

export default JSToJSComponent;
