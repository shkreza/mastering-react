/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { Provider } from 'react-redux';
import mockData from './src/mockData';
import createStore from './src/store/createStore';
import { WelcomeScreen } from './src/components/WelcomeScreen';
import NewsFeedContainer from './src/containers/NewsFeedContainer';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, SafeAreaView } from 'react-navigation';
import { HeaderImage } from './src/components/HeaderImage';

class NewsFeedScreen extends Component {
  static navigationOptions = {
    title: 'NewsFeedScreen title',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }

  render() {
    return (
      <Provider store={store}>
        <NewsFeedContainer />
      </Provider>
    )
  }
}

class InfoScreen extends Component {
  static navigationOptions = (navigation) => {
    return {
      title: 'InfoScreen title',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    }
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Information goes here</Text>
      </View>
    )
  }
}

const store = createStore();
const tabNavigator = createBottomTabNavigator({
  newsFeed: NewsFeedScreen,
  info: InfoScreen
}, {
  initialRouteName: 'info',
  defaultNavigationOptions: {
    title: 'some ttttiltle',
  }
});

const appNavigator = createStackNavigator({
  welcome: {
    title: 'hi',
    screen: WelcomeScreen
  },
  tabs: {
    title: 'bye',
    screen: tabNavigator
  }
}, {
  initialRouteName: 'welcome',
  initialRouteParams: { titleParam: 'initial title' },
  defaultNavigationOptions: ({navigation}) => {
    return {
      // title: navigation.getParam('titleParam', 'default title')
      headerTitle: <HeaderImage />
    }
  },
  // mode: 'modal',
  // headerMode: 'none'
});

export default createAppContainer(appNavigator);