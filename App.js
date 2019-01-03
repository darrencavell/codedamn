import React, {Component} from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';

import Sidebar from '@views/Sidebar';
import Login from '@views/Login';
import Calculator from '@views/Calculator';
import Tinder from '@views/Tinder';

class App extends Component {
  render(){
    return(
      <AppContainer />
    )
  }
}

const AppNavigator = createDrawerNavigator({
  login: {screen: Login},
  calculator: {screen: Calculator},
  tinder: {screen: Tinder}
},{
  contentComponent: ({navigation}) => <Sidebar navigation={navigation}/>
})
const AppContainer = createAppContainer(AppNavigator)

export default App