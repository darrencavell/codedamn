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
  Button,
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
    this.state = {}
    this.buttonPressed = this.buttonPressed.bind(this);
  }

  buttonPressed() {
    // const username = this._username._lastNativeText
    // const password = this._password._lastNativeText

    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput
          defaultValue={this.state.username}
          onChangeText={text => this.setState({username: text})}
          />

        <Text>Password</Text>
        <TextInput
          ref={input => this._password = input}
          />

{/* Uncontrolled Approach */}
{/* This method works, but not efficient for React Native */}
{/*         
        <Text>Password</Text>
        <TextInput
          ref={input => this._password = input}
          /> 
*/}


{/* Controlled Approach */}
{/* Using the props that react native has provided */}
        <Button 
          title={'Hello'}
          onPress={this.buttonPressed} 
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
});
