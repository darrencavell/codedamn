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

class Calculator extends Component {
  constructor(){
    super();
    this.state = {
      resultText: '',
      calculationText: ''
    }
    this.ops = ["DEL", "+", "-", "*", "/"]
    this.nums = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['.', 0, '=']]
  }
  static navigationOptions = {
    header: null
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
      case 'DEL':
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
          <TouchableOpacity key={this.nums[i][j]} onPress={() => this.padPressed(this.nums[i][j])} style={styles.pad}>
            <Text style={styles.padText}>{this.nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      numpads.push(<View key={i} style={styles.row}>{row}</View>);
    }
    let oppads = []
    for(let i = 0; i < 5; i++){
      oppads.push(
        <TouchableOpacity key={this.ops[i]} onPress={() => this.padOperate(this.ops[i])} style={styles.pad}>
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

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result: {
    flex: 2,
    backgroundColor: "#E3E6DC",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  resultText: {
    fontSize: 30,
    color: "#000000"
  },
  calculation: {
    flex: 1,
    backgroundColor: "#DDE4E2",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  calculationText: {
    fontSize: 20,
    color: "#000000"
  },
  buttons: {
    flex: 7,
    flexDirection: "row"
  },
  numbers: {
    flex: 4,
    backgroundColor: "#434343"
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
    fontSize: 30,
    color: "white"
  },
  operations: {
    flex: 1,
    backgroundColor: "#636363",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
