/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableHighlight, ImageBackground, Dimensions} from 'react-native';
import _propType from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0
    };

    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  onLayoutChange(e) {
    console.log(e);
    const {width, height} = e.nativeEvent.layout;
    this.setState({width: width/2, height: height/2});
  }

  render() {
    return (
      <View style={styles.container} onLayout={this.onLayoutChange.bind(this)} >
        <Text style={styles.welcome}>Welcome to React Native!!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Image source={{uri: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' }}
          style={{width: 272, height: 92, resizeMode: 'cover'}}>
        </Image>
        <Button
          underlayColor='#efefef'
          activeOpacity={0.8}
          onPress={() => {
            console.log(`${Dimensions.get('window').width} x ${Dimensions.get('window').height}`)
          }}>
          <Text style={[styles.bold, {alignSelf: 'center'}]}>
            Click me
          </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
  bold: {
    fontWeight: 'bold'
  }
});

const Button = ({style, children, ...otherProps}) => (
  <TouchableHighlight style={[style]} {...otherProps} >
    {children}
  </TouchableHighlight>
);

Button.propTypes = {
  style: TouchableHighlight.propTypes.style,
  children: _propType.node
};