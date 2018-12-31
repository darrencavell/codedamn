import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import styles from './styles';

class Home extends Component {
  render(){
    const {button, heading, input} = styles;
    return(
      <View>
        <View>
          <Button onPress={() => this.props.navigation.navigate('calculator')} title="Go to Calculator"/>
        </View>
        <Text style={heading}>Login into Application</Text>
        <TextInput style={input}/>
        <TextInput style={input} secureTextEntry={true}/>
        <Button style={button} title={"Hello"}/>
      </View>
    );
  }
}

export default Home;