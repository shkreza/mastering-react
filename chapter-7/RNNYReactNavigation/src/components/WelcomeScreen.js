import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { HeaderImage } from './HeaderImage';

export class WelcomeScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            // title: navigation.getParam('titleParam', 'defaultTitleParam')
            // headerTitle: <HeaderImage />
        }
    }

    constructor(props) { super(props); }

    render() {
        return (
            <TouchableOpacity style={styles.container} onPress={
                    ()=>{
                        this.props.navigation.navigate('newsFeed')
                    }
                }>
                <View>
                    <Text style={styles.text}>Welcome</Text>
                    <Text style={styles.text}>Click me</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    }
})