import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export const NewsItem = (props) => {
    const {title, author, imageUrl } = props;
    return (
        <TouchableOpacity >
            <View styles={styles.container} >
                <Image source={{uri: imageUrl}} style={styles.image}/>
                <Text>{title}</Text>
                <Text>{author}</Text>
            </View>
        </TouchableOpacity>
    )
}

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 3
    },
    image: {
        width: 100,
        height: 100
    }
})