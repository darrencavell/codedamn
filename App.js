import React, {Component} from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';

import Sidebar from '@components/Sidebar';
import Login from '@components/Login';
import Calculator from '@components/Calculator';

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
  contentComponent: ({navigation}) => <Sidebar navigation={navigation}/>
})
const AppContainer = createAppContainer(AppNavigator)

export default App