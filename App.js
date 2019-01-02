import React, {Component} from 'react';
import {DrawerNavigator} from 'react-navigation';

import Login from './app/components/Login';
import Calculator from './app/components/Calculator';

class App extends Component {
  render(){
    return(
      <AppStack />
    )
  }
}

const AppStack = DrawerNavigator({
  login: {screen: Login},
  calculator: {screen: Calculator}
})

export default App