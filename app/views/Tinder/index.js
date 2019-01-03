import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions, 
  Animated, 
  Image,
  PanResponder,
  TouchableWithoutFeedback,
  Easing
} from 'react-native';

import styles from './styles.js';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
// const Categories = [
//   {
//     id: 1,
//     uri: 'https://cdn4.vectorstock.com/i/thumb-large/52/33/color-scene-with-faceless-athlete-football-player-vector-14995233.jpg'
//   }, 
//   {
//     id: 2,
//     uri: 'https://render.fineartamerica.com/images/rendered/default/poster/8.000/8.000/break/images/artworkimages/medium/1/badminton-player-jump-smash-low-polygon-aloysius-patrimonio.jpg'
//   },
//   {
//     id: 3,
//     uri: 'https://www.vectorportal.com/img_novi/basketball-slam-dunk.jpg'
//   },
//   {
//     id: 4,
//     uri: 'https://image.freepik.com/free-vector/sportwoman-playing-voleyball-geometry_23-2147496400.jpg'
//   },
//   {
//     id: 5,
//     uri: 'https://img.freepik.com/free-vector/geometry-drawing-of-tennis-woman-player_23-2147496405.jpg?size=338&ext=jpg'
//   },
//   {
//     id: 6,
//     uri: 'https://img.freepik.com/free-vector/polygonal-karate-expert_23-2147496401.jpg?size=338&ext=jpg'
//   },
// ]
const Categories = [{
    id: 1,
    uri: require('@assets/1.jpg'),
    content: 'It can be considered a version of five-a-side football. Futsal is played between two teams of five players each, one of whom is the goalkeeper. Unlimited substitutions are permitted. Unlike some other forms of indoor football, the game is played on a hard court surface delimited by lines; walls or boards are not used.'
  },
  {
    id: 2,
    uri: require('@assets/2.jpg'),
    content: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net. Although it may be played with larger teams, the most common forms of the game are "singles" (with one player per side) and "doubles" (with two players per side). Badminton is often played as a casual outdoor activity in a yard or on a beach; formal games are played on a rectangular indoor court. Points are scored by striking the shuttlecock with the racquet and landing it within the opposing side\'s half of the court.'
  },
  {
    id: 3,
    uri: require('@assets/3.jpg'),
    content: 'Basketball is a team sport. Two teams of five players each try to score by shooting a ball through a hoop elevated 10 feet above the ground. The game is played on a rectangular floor called the court, and there is a hoop at each end. The court is divided into two main sections by the mid-court line.'
  },
  {
    id: 4,
    uri: require('@assets/4.jpg'),
    content: 'Volleyball is a team sport in which two teams of six players are separated by a net. Each team tries to score points by grounding a ball on the other team\'s court under organized rules. It has been a part of the official program of the Summer Olympic Games since 1964.'
  },
  {
    id: 5,
    uri: require('@assets/5.jpg'),
    content: 'Tennis is a racket sport that can be played individually against a single opponent (singles) or between two teams of two players each (doubles). Each player uses a tennis racket that is strung with cord to strike a hollow rubber ball covered with felt over or around a net and into the opponent\'s court.'
  },
  {
    id: 6,
    uri: require('@assets/6.jpg'),
    content: 'The term Kung Fu refers to the martial arts of China. Kung Fu originated in a place called the Shaolin Temple, where monks practiced Kung Fu for health and self-defense during their quest for enlightenment. The first Shaolin temple was a Buddhist monastery built in 377 A.D. in the Henan province of China.'
  },
]

class Tinder extends Component {

  constructor(){
    super();
    this.state = {
      currentIndex: 0,
      isSelected: false
    }

    this.position = new Animated.ValueXY();
    this._changeSwipeOpacity = this.position.x.interpolate({
      inputRange: [-300 / 4, 0, 300 / 4],
      outputRange: [1, 0, 0],
      extrapolate: 'clamp'
    })
    this._nextCardOpacity = this.position.x.interpolate({
      inputRange: [-300 / 4, 0, 300 / 4],
      outputRange: [1, 0, 1],
      interpolate: 'clamp'
    })
    this._nextCardScale = this.position.x.interpolate({
      inputRange: [-300/ 4, 0, 300 / 4],
      outputRange: [1, 0.8, 1],
      extrapolate: 'clamp'
    })

    this.size = new Animated.Value(0);
    this._changeSize = this.size.interpolate({
      inputRange: [0, 1],
      outputRange: [300, 600],
      extrapolate: 'clamp'
    })
    this._changeBackgroundColor = this.size.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(239, 239, 229, 0)', 'rgba(239, 239, 229, 1)'],
      extrapolate: 'clamp'
    })
  }

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (e, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return !(gestureState.dx === 0 && gestureState.dy === 0)
      },
      onPanResponderMove: (e, gestureState) => {
        // console.log(gestureState);
        this.position.setValue({x: gestureState.dx, y: 0})
      },
      onPanResponderRelease: (e, gestureState) => {
        if(gestureState.dx < -120){
          Animated.spring(this.position, {
            toValue: {x: -300 - 100, y: 0}
          }).start(() => {
            var category = Categories[0];
            Categories.shift();
            Categories.push(category);
            console.log(Categories);
            // var stateCounter = (this.state.currentIndex + 1) % Categories.length;
            this.setState({currentIndex: 0}, () => {
              this.position.setValue({x: 0, y: 0})
            });
          })
        }else {
          console.log('gagal bang');
          Animated.spring(this.position, {
            toValue: {x: 0, y: 0},
            friction: 4
          }).start()
        }
      }
    })
  }

  _resizeSelectedCategory = () => {
    console.log('oncom');
    if(!this.state.isSelected){
      Animated.spring(this.size, {
        toValue: 1,
        duration: 1000,
        easing: Easing.ease
      }).start();
      this.setState({isSelected: true});
    }else if(this.state.isSelected){
      Animated.spring(this.size, {
        toValue: 0,
        duration: 1000,
        easing: Easing.ease
      }).start();
      this.setState({isSelected: false});
    }
  }

  _renderCategories = () => {
    return Categories.map((item, index) => {
      if(index < this.state.currentIndex)
        return null;
      else if (index == 0) {
        return(
          <Animated.View 
            {...this.PanResponder.panHandlers}
            key={item.id} 
            style={[{transform: [{translateX: this.position.x}, {translateY: this.position.y}]},{position: 'absolute'}]}>
            <Animated.View style={{margin: 10, width: 300, height: this._changeSize, backgroundColor: this._changeBackgroundColor, borderRadius: 20}}>
              <Animated.View style={{opacity: this._changeSwipeOpacity, position: 'absolute', top: 50, left: 40, zIndex: 1000}}>
                <Text style={{borderWidth: 1, borderColor: 'red', color: 'red', fontSize: 32, fontWeight: '800', padding: 10}}>DISLIKE</Text>
              </Animated.View>
              <TouchableWithoutFeedback onPress={this._resizeSelectedCategory}>
                <View style={{flex: 1}}>
                  <Image style={{flex: 2, height: null, width: null, resizeMode: 'cover', borderRadius: 20, borderWidth: 1, borderColor: '#ddd', shadowColor: 'black', shadowOffset:{width: 0,  height: 5}, shadowOpacity: 0.8, shadowRadius: 2}} source={item.uri} />
                  { 
                    this.state.isSelected && 
                    <Animated.View style={{flex: 1, padding: 10}}>
                      <Text>
                        {item.content}
                      </Text>
                    </Animated.View>
                  }
                </View>
              </TouchableWithoutFeedback>
            </Animated.View>
          </Animated.View>
        );
      }else{
        return(
          <Animated.View 
            key={item.id} 
            style={[{opacity: this._nextCardOpacity, transform: [{scale: this._nextCardScale}]},{position: 'absolute'}]}>
            <Animated.View style={{margin: 10, width: 300, height: this._changeSize, backgroundColor: this._changeBackgroundColor, borderRadius: 20}}>
              <View style={{flex: 1}}>
                <Image style={{flex: 2, height: null, width: null, resizeMode: 'cover', borderRadius: 20, borderWidth: 1, borderColor: '#ddd', shadowColor: 'black', shadowOffset:{width: 0,  height: 5}, shadowOpacity: 0.8, shadowRadius: 2}} source={item.uri} />
                { 
                  this.state.isSelected && 
                  <Animated.View style={{flex: 1, padding: 10}}>
                    <Text>
                      {item.content}
                    </Text>
                  </Animated.View>
                }
              </View>
            </Animated.View>
          </Animated.View>
        );
      }
    }).reverse();
    
  }
  render(){
    const {container, contentImage} = styles;
    return(
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{flex: 1}}>
          {this._renderCategories()}
        </View>
      </View>
    )
  }             
}

export default Tinder;