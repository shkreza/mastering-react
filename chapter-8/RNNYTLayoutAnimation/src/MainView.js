import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MainView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Main View is here!</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold'
    }
})