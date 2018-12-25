/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(){
    super();
    this.state = {}

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.half, styles.red]}></View>
        <View style={[styles.half, styles.yellow]}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  half: {
    flex: 1,
  },
  yellow:{
    backgroundColor: 'yellow'
  },
  red: {
    backgroundColor: 'red'
  }
});
