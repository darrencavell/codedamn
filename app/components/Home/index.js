import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button
} from 'react-native';

import styles from './styles';

class Home extends Component {
  state = {
    username: '',
    password: ''
  }
  checkLogin() {
    const {username, password} = this.state;
    if(username === 'darren' && password === 'darren'){
      console.warn('LOGIN SUCCESS')
    }
  }
  render(){
    const {parent, heading, input} = styles;
    return(
      <View style={parent}>
        <View>
          <Button onPress={() => this.props.navigation.navigate('calculator')} title="Go to Calculator"/>
        </View>
        <Text style={heading}>Login into Application</Text>
        <TextInput style={input} onChangeText={text => this.setState({username: text})}/>
        <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({password: text})}/>
        <Button title={"Hello"} onPress={ _ => this.checkLogin() }/>
      </View>
    );
  }
}

export default Home;