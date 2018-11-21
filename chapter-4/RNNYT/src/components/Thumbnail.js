import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import * as globalStyles from '../styles/global';

export const Thumbnail = ({imageUrl, style, title, accentColor}) => {
    const imageStyle = {
        backgroundColor: `${accentColor}77`
    };
    return (
        <View style={[styles.outerContainer, {borderColor: accentColor}]}>
            {imageUrl.length > 0 ? 
                (
                <Image blurRadius={2} source={{uri: imageUrl}} style={[styles.image]}></Image>
                ):(
                    <View style={{width: 100, height: 100}}/>
                )
            }
            <View style={[styles.innerContainer, ]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )
};

Thumbnail.prototype = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    style: Image.propTypes.style,
    accentColor: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        justifyContent: 'center'
    },
    title: {
        padding: 10,
        alignItems: 'center'
    },
    outerContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 3,
        borderStyle: 'solid',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    innerContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})