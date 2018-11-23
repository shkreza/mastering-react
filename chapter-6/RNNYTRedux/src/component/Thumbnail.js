import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ViewPropTypes, Image, StyleSheet, Text } from 'react-native';

export const Thumbnail = ({style, url, title}) => (
    <View style={style}>
        <Image style={styles.image} source={{uri: url}}/>
        <View style={styles.innerContainer}>
            <Text style={styles.text} >{title}</Text>
        </View>
    </View>
);

Thumbnail.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    style: ViewPropTypes.style
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100
    },
    text: {
        textAlign: 'center',
        textAlignVertical: 'bottom'
    },
    innerContainer: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})