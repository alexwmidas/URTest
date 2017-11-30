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
  Button,
  View
} from 'react-native';
import YouTube from 'react-native-youtube';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class MainScreen extends Component<{}> {
  static navigationOptions = {
    title: 'Main',
  };
  
  onPressYoutube = () => {
    this.props.navigation.navigate('YoutubeScreen');
  }

  onPressAPI = () => {
    this.props.navigation.navigate('APIScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Test Page
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.onPressYoutube}
            title="Goto YouTube Screen"
            style={styles.mainButton}
            color="#841584"
            accessibilityLabel="Test with Youtube Video player"
          />
          <Button
            onPress={this.onPressAPI}
            style={styles.mainButton}
            title="Goto API Screen"
            color="#841584"
            accessibilityLabel="Test with API requests"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mainButton: {
    marginTop: 5,
  },
  buttonContainer: {
    
  },
});
