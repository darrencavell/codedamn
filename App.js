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

export default class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
    return <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <Button title="0" style={styles.pad} />
              <Button title="1" style={styles.pad}  />
              <Button title="2" style={styles.pad}  />
            </View>
            <View style={styles.row}>
              <Button title="3" />
              <Button title="4" />
              <Button title="5" />
            </View>
            <View style={styles.row}>
              <Button title="6" />
              <Button title="7" />
              <Button title="8" />
            </View>
            <View style={styles.row}>
              <Button title="0" />
              <Button title="1" />
              <Button title="2" />
            </View>
          </View>
          <View style={styles.operations}>
            <Button title="+" />
            <Button title="-" />
            <Button title="*" />
            <Button title="/" />
          </View>
        </View>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  resultText: {
    fontSize: 30,
    color: "white"
  },
  calculation: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculationText: {
    fontSize: 20,
    color: "white"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 4,
    backgroundColor: "yellow"
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  },
  pad: {
    flex: 1
  },
  operations: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
