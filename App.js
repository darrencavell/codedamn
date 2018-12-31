/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Button,
  TextInput,
  TouchableOpacity
} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import Home from './app/components/Home';
import Calculator from './app/components/Calculator';

const AppNavigator = createStackNavigator({
  home: {
    screen: Home
  },
  calculator: {
    screen: Calculator
  }
});

export default createAppContainer(AppNavigator);