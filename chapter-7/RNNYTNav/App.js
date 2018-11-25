/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider } from 'react-redux';
import { NewsItem } from './src/components/NewsItem';
import mockData from './src/mockData';
import createStore from './src/store/createStore';
import { WelcomeScreen } from './src/components/WelcomeScreen';
import NewsFeedContainer from './src/containers/NewsFeedContainer';
import { Nav } from './src/components/Nav';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const store = createStore();

type Props = {};
export default class App extends Component<Props> {
  render() {
    return showNav();
  }
}

const showWelcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Provider store={store}>
        <NewsFeedContainer />
      </Provider>
    </View>
  )
}

const showNews = () => {
  return (
    <WelcomeScreen onPress={()=>console.log('hi')}/>
  );
}

const showNav = () => {
  return (<Nav />)
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
