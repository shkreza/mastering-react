/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TabBarIOS, TouchableOpacity, NativeModules, NativeEventEmitter} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'

const { RezaManager } = NativeModules;

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

    this.RezaManagerEventEmitter = new NativeEventEmitter(RezaManager);
    console.dir(this.RezaManagerEventEmitter)
    console.log(RezaManager.startEvent);
    console.log(RezaManager.endEvent);

    this.state = {
      selectedTab: 'rocket'
    };
  }
  
  componentWillMount() {
    this.setState({
      rezaStartEvent: this.RezaManagerEventEmitter.addListener('reza-started', (e) => console.log(`reza-started: ${e}`)),
      rezaEndEvent: this.RezaManagerEventEmitter.addListener('reza-ended', (e) => console.log(`reza-ended: ${e}`))
    })
  }

  componentWillUnmount() {
    this.state.rezaStartEvent.remove();
    this.state.rezaEndEvent.remove();
  }

  render() {
    return (
      <TabBarIOS>
        <Icon.TabBarItemIOS title='RocketShip' iconName='ios-home' onPress={()=>this.setState({selectedTab: 'rocket'})} selected={this.state.selectedTab === 'rocket'}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => RezaManager.sayHello("Reza") }>
              <FontAwesome name='rocket' size={40} color={'red'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RezaManager.sayHelloBack("Reza", (str)=>console.log(str)) }>
              <FontAwesome name='rocket' size={40} color={'red'}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => RezaManager.sayHelloWithEvents("Reza") }>
              <FontAwesome name='rocket' size={40} color={'red'}/>
            </TouchableOpacity>
          </View>
        </Icon.TabBarItemIOS>
      </TabBarIOS>
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
