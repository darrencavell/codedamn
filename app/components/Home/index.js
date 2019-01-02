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
    // console.log(JSON.stringify({username,password}));
    fetch('http://localhost:1111/', {
      method: 'POST',
      body: JSON.stringify({username,password})
    })
    .then(res => {
      return res.text()
    })
    .then(res => {
      if (res === '1') {
        this.props.navigation.navigate('calculator')
      } else {
        Alert.alert('Error', 'Username / Password mismatch', [{
          text: 'Okay'
        }])
      }
    })
    .catch(error => console.log(error));


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