import React from 'react';
import {
  View,
  Animated,
} from 'react-native';
import PropTypes from 'prop-types';

export default React.createReactClass({
  displayName: 'VisibilityView',
  propTypes: {
    isVisible: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    style: PropTypes.style
  },
  getInitialState(){
    return {
      view: this.props.children,
      opacity: new Animated.Value(this.props.isVisible ? 1 : 0)
    };
  },
  componentWillReceiveProps(nextProps){
    const isVisible = this.props.isVisible;
    const shouldBeVisible = nextProps.isVisible;

    if(isVisible && !shouldBeVisible){
      Animated.timing(this.state.opacity, {
        toValue: 0,
        delay: 500,
        duration: 200
      }).start(this.removeView);
    }
    if(!isVisible && shouldBeVisible){
      this.insertView();
      Animated.timing(this.state.opacity, {
        toValue: 1,
        delay: 500,
        duration: 200
      }).start();
    }
  },
  insertView(){
    this.setState({
      view: this.props.children
    });
  },
  removeView(){
    this.setState({
      view: null
    });
  },
  render(){
    return(
      <Animated.View
        pointerEvents={this.props.isVisible ? 'auto' : 'none'}
        style={[this.props.style, {opacity: this.state.opacity}]}>
        {this.state.View}
      </Animated.View>
    )
  }
});