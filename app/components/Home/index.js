import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Alert
} from 'react-native';

import styles from './styles';

class Home extends Component {
  state = {
    username: '',
    password: ''
  }
  static navigationOptions = {
    header: null
  }
  checkLogin() {
    const {username, password} = this.state;
    if(username === 'darren' && password === 'darren'){
      this.props.navigation.navigate('calculator')
    } else {
      Alert.alert('Error', 'Username / Password mismatch', [{
        text: 'Okay'
      }])
    }
  }
  render(){
    const {parent, heading, input} = styles;
    return(
      <View style={parent}>
        <Text style={heading}>Login into Application</Text>
        <TextInput style={input} placeholder="Username" onChangeText={text => this.setState({username: text})}/>
        <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({password: text})}/>
        <Button title={"Hello"} onPress={ _ => this.checkLogin() }/>
      </View>
    );
  }
}

export default Home;