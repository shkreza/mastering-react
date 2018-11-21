/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { AppText } from './src/components/AppText';
import { Title } from './src/components/Title';
import { ByLine } from './src/components/ByLine';
import { Thumbnail } from './src/components/Thumbnail';
import * as globalStyles from './src/styles/global';
import { NewsItem } from './src/components/NewsItem';
import { NewsFeed } from './src/components/NewsFeed';

const URL = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

Image.prefetch('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <Title>
          <Text>HI</Text>
        </Title>
        <ByLine author={'hi'} date={new Date()} >
        </ByLine>
        <Thumbnail
          accentColor={globalStyles.ACCENT_COLOR}
          imageUrl={URL}
          title={'title'}>
        </Thumbnail>
        <Thumbnail
          accentColor={globalStyles.ACCENT_COLOR}
          imageUrl={''}
          title={'No title'}>
        </Thumbnail>
        <NewsItem onPress={()=>{}} imageUrl={URL} description={'Random stuff'} author={'Reza'} title={'This is a news title'} date={new Date()} location={'Nowhere'}/>
        <NewsFeed style={{}}></NewsFeed>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
