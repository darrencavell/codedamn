import React, {Component} from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';

import Login from './app/components/Login';
import Calculator from './app/components/Calculator';

class App extends Component {
  render(){
    return(
      <AppStack />
    )
  }
}

const AppNavigator = createDrawerNavigator({
  login: {screen: Login},
  calculator: {screen: Calculator}
})
const AppContainer = createAppContainer(AppNavigator)

export default AppContainer