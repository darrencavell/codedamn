import React, {Component} from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';

import Sidebar from './app/components/Sidebar';
import Login from './app/components/Login';
import Calculator from './app/components/Calculator';

class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

const AppNavigator = createDrawerNavigator({
  login: {screen: Login},
  calculator: {screen: Calculator}
},{
  contentComponent: Sidebar
})
const AppContainer = createAppContainer(AppNavigator)

export default App