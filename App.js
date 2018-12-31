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
    this.state = {
      resultText: '',
      calculationText: ''
    }
    this.ops = ["c", "+", "-", "*", "/"]
    this.nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
  }
  validate(){
    const text = this.state.resultText
    if(this.ops.indexOf(text.slice(-1)) > 0)
      return false;
    return true;
  }
  calculateResult(){
    const text = this.state.resultText
    this.setState({
      calculationText: eval(text)
    })
  }
  padOperate(operator){
    switch(operator){
      case 'c':
        this.setState({
          resultText: this.state.resultText.substring(0, this.state.resultText.length-1)
        })
        break
      case '+':
      case '-':
      case '*':
      case '/':
        console.log(operator)
        if(this.state.resultText == '') return
        if(this.ops.indexOf(this.state.resultText.substring(this.state.resultText.length-1)) > 0){
          console.log(this.state.resultText);
          this.setState({
            resultText: this.state.resultText.substring(0, this.state.resultText.length-1) + operator
          })
        }else {
          this.setState({
            resultText: this.state.resultText + operator
          })
        }
        break
    }
  }
  padPressed(text){
    if(text == '=')
      return this.validate() && this.calculateResult()
    this.setState({
      resultText: this.state.resultText + text
    })
  }
  render(){
    let numpads = []
    for(let i = 0; i < 4; i++){
      let row = []
      for(let j = 0; j < 3; j++){
        row.push(
          <TouchableOpacity onPress={() => this.padPressed(this.nums[i][j])} style={styles.pad}>
            <Text style={styles.padText}>{this.nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      numpads.push(<View style={styles.row}>{row}</View>);
    }
    let oppads = []
    for(let i = 0; i < 5; i++){
      oppads.push(
        <TouchableOpacity onPress={() => this.padOperate(this.ops[i])} style={styles.pad}>
          <Text style={styles.padText}>{this.ops[i]}</Text>
        </TouchableOpacity>
      )
    }
    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {this.state.resultText}
          </Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>{this.state.calculationText}</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {numpads}
          </View>
          <View style={styles.operations}>
            {oppads}
          </View>
        </View>
      </View>
    )
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
