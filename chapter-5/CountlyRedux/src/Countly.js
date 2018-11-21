import React, { Component} from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as actions from './actions';
import store from './store';

export class Countly extends Component {
    constructor(props) {
        super(props);

        this.updateState = this.updateState.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);

        this.state = {
            tally: store.getState(),
            unsubscribe: store.subscribe(this.updateState)
        }
    }
    
    updateState() {
        this.setState({
            tally: store.getState()
        })
    }

    componentDidMount() {
        this.setState({
            unsubscribe: store.subscribe(this.updateState)
        })
    }

    componentWillUnmount() {
        this.state.unsubscribe();
    }

    render() {
        return (
            <View style={styles.container}>
            <Text style={styles.appName}>
              Countly
            </Text>
            <Text style={styles.tally}>
              Tally: {this.state.tally.count}
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => store.dispatch(actions.increment())}>
              <Text style={styles.buttonText}>
                +
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => store.dispatch(actions.decrement())}>
              <Text style={styles.buttonText}>
                -
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => store.dispatch(actions.zero())}>
              <Text style={styles.buttonText}>
                0
              </Text>
            </TouchableOpacity>
          </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    button: {
      backgroundColor: 'blue',
      width: 100,
      marginBottom: 20,
      padding: 20
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
      fontSize: 20
    },
    appName: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10
    },
    tally: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 20,
      fontSize: 25
    }
  });
  