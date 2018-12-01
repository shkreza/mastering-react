import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ViewPropTypes, Text, TouchableOpacity, Image, LayoutAnimation, StyleSheet } from 'react-native';

class Onboarding extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { style, text, url, isDone } = this.props;

        return (
            <View style={[isDone ? styles.hidden : null, style, styles.container]}>
                <TouchableOpacity onPress={this.props.onPress}>
                    <Text style={styles.text}>{text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Onboarding.propTypes = {
    style: ViewPropTypes.style,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    navigation: PropTypes.shape({navigate: PropTypes.func}).isRequired,
    isDone: PropTypes.bool.isRequired
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    },
    text: {
        fontWeight: 'bold'
    },
    hidden: {
        width: 0
    }
})

export default Onboarding;