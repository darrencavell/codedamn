import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

class Home extends Component {
  render(){
    return(
      <View>
        <Text>Login into Application</Text>
        <TextInput />
        <TextInput />
        <View>
          <Button onPress={() => this.props.navigation.navigate('calculator')} title="Go to Calculator"/>
        </View>
      </View>
    );
  }
}

export default Home;