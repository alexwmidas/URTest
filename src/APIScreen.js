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
  FlatList,
  View
} from 'react-native';
import axios from 'axios';

export const API_URL = 'https://jsonplaceholder.typicode.com/users';


export default class APIScreen extends Component<{}> {
  static navigationOptions = {
    title: 'API',
  };

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
    this.callAPI();
  }

  callAPI() {
    axios.get(API_URL)
    .then(res => {
      this.setState({ data: res.data });
    })
    .catch(error => {
      console.log(error);
    });
  }

  keyExtractor = (item, index) => item.id;

  renderItem = ({ item }) => {
    return (
      <View style={styles.itemView}>
        <Text 
          style={styles.itemName}
        >
          {item.name}
        </Text>
        <Text 
          style={styles.itemEmail}
          key={item.id}
        >
          {item.email}
        </Text>
      </View>
    )
  }

  render() {
    const { data } = this.state;
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to APIScreen
        </Text>
        <Text style={styles.welcomeDesc}>
          Called the api `https://jsonplaceholder.typicode.com/users` and showed the list.
        </Text>
        <FlatList
          style={styles.listView}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  welcomeDesc: {
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
  listView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  itemView: {
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F2',
    paddingBottom: 10,
    marginTop: 10,
  },
  itemName: {
    fontSize: 17,
    color: 'black',
  },
  itemEmail: {
    marginTop: 5,
    fontSize: 13,
    color: 'darkgray'
  },
});
