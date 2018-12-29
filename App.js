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
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {}
  }
  render(){
    let numpads = []
    let nums = [[1,2,3], [4,5,6], [7,8,9], [' ', 0, '=']]
    for(let i = 0; i < 4; i++){
      let row = []
      for(let j = 0; j < 3; j++){
        row.push(
          <TouchableOpacity style={styles.pad}>
            <Text style={styles.padText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      numpads.push(<View style={styles.row}>{row}</View>);
    }
    let oppads = []
    let ops = ['+', '-', '*', '/']
    for(let i = 0; i < 4; i++){
      oppads.push(
        <TouchableOpacity style={styles.pad}>
          <Text style={styles.padText}>{ops[i]}</Text>
        </TouchableOpacity>
      )
    }
    return <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {numpads}
          </View>
          <View style={styles.operations}>
            {oppads}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch"
  },
  padText: {
    fontSize: 30
  },
  operations: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
