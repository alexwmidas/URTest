/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import YoutubeScreen from './YoutubeScreen';
import APIScreen from './APIScreen';
import MainScreen from './MainScreen';

const PrimaryNav = StackNavigator(
  {
    MainScreen: { screen: MainScreen },
    YoutubeScreen: { screen: YoutubeScreen },
    APIScreen: { screen: APIScreen },
  },
  {
    // Default config for all screens
    initialRouteName: 'MainScreen',
    headerMode: 'screen',
    navigationOptions: {
        headerTintColor: '#485666',
        headerStyle: {backgroundColor: 'white'},
    },
  },
);

export default class App extends Component<{}> {
  render() {
    return (
      <PrimaryNav />
    );
  }
}
