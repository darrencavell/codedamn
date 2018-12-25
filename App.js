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
  View,
  TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      value: "Edit Me!"
    }
    this.handleChangeText = this.handleChangeText.bind(this)
  }

  handleChangeText(newText) {
    this.setState({
      value: newText
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          defaultValue={this.state.value}
          onChangeText={this.handleChangeText}
        />
        <Text>You are writing {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
