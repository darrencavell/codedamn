import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';

import styles from './styles.js';

class Sidebar extends Component {
  navigate(route){
    this.props.navigation.navigate(route)
  }
  render(){
    const routes = [
      {
        id: 1,
        title: "Login", 
        route: "login"
      },
      {
        id: 2,
        title: "Calculator",
        route: "calculator"
      },
      {
        id: 3,
        title: "Tinder",
        route: "tinder"
      }
    ];
    const {link, image} = styles;
    return(
      <View>
        <View style={image}>
          <Image 
            style={[{width: 250, height: 250}]}
            source={{uri:'https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png'}}
            />
        </View>
        {
          routes.map(page => (
            <TouchableOpacity key={page.id} style={link} onPress={_ => this.navigate(page.route)}>
              <Text>{page.title}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    )
  }
}
export default Sidebar