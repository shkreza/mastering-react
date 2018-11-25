import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export class WelcomeScreen extends Component {
    constructor(props) { super(props); }

    render() {
        const { onPress, navigator } = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={()=>onPress(navigator)}>
                <View>
                    <Text style={styles.text}>Welcome</Text>
                    <Text style={styles.text}>Click me</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

WelcomeScreen.propTypes = {
    onPress: PropTypes.func.isRequired,
    navigator: PropTypes.shape({push: PropTypes.func}).isRequired
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