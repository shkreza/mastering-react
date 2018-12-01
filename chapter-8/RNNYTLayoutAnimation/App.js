/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, LayoutAnimation } from 'react-native';
import MainView from './src/MainView';
import Onboarding from './src/Onboarding';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import OnboardingButton from './src/OnboardingButton';

const content = ['message 1', 'message 2', 'message 3'];

class OnboardingInstance extends Component {
  constructor(props) {
    super(props);

    this.moveNext = this.moveNext.bind(this);
    this.movePrev = this.movePrev.bind(this);
    this.transitionToNextPanel = this.transitionToNextPanel.bind(this);
    this.transitionToDone = this.transitionToDone.bind(this)

    this.state = {
        currentIndex: 0,
        isDone: false
    }
  }

  render() {
    const nextScreen = this.props.navigation.getParam('nextScreen', undefined);
    return (
      <View style={[styles.container]}>
        {content.map(
                  (msg, i) =>
                    <Onboarding
                      key={i}
                      onPress={()=>this.props.navigation.navigate(nextScreen)}
                      text={msg}
                      url={this.props.navigation.getParam('url', undefined)}
                      style={[i !== this.state.currentIndex ? styles.hidden : undefined]}
                      isDone={this.state.isDone}
                      navigation={this.props.navigation}/>)
        }
        <OnboardingButton totalItems={4} currentIndex={0} moveNext={this.moveNext} movePrev={this.movePrev} onDone={this.transitionToDone}/>
      </View>
    )
  }

  transitionToNextPanel(nextIndex) {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    LayoutAnimation.configureNext({
      duration: 10000,
      update: {
        springDuming: 0.2,
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY
      }
    });
    this.setState({
        currentIndex: (nextIndex >= content.length) ? (content.length - 1) : (nextIndex < 0 ? 0 : nextIndex)
    })
  }

  transitionToDone() {
    LayoutAnimation.configureNext({
      duration: 1000,
      update: {
        springDuming: 0.2,
        type: LayoutAnimation.Types.spring,
        property: LayoutAnimation.Properties.scaleXY
      }
    });
    this.setState({isDone: true});
    console.log('Param: ' + this.props.navigation.getParam('nextScreen', 'NONE'));
    setTimeout(
      () => this.props.navigation.navigate(this.props.navigation.getParam('nextScreen', 'NONE'))
    , 2000)
  }

  moveNext() {
      this.transitionToNextPanel(this.state.currentIndex + 1)
  }

  movePrev() {
      this.transitionToNextPanel(this.state.currentIndex - 1)
  }
  
}

const switchNav = createSwitchNavigator({
  onboarding: {
    screen: OnboardingInstance,
    params: {
      nextScreen: 'mainview',
      text: 'Hi',
      url: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
      style: null
    }
  },
  mainview: {
    screen: MainView
  }
}, {
  initialRouteName: 'onboarding',
});

export default createAppContainer(switchNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  onboarding: {
    flex: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 100
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
  hidden: {
    width: 0
  }
});
