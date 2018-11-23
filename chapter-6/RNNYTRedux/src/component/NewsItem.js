import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ViewPropTypes, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Thumbnail } from './Thumbnail';
import mockData from '../mockData.json'

export class NewsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { style, author, description, title, imageUrl, location, date } = this.props.news;
        return (
            <TouchableOpacity style={{padding: 0, left: 0, right: 0}}>
                <View style={[style, styles.container]}>
                    <Thumbnail style={style} title={title} url={imageUrl} />
                    <View style={styles.innerContainer}>
                        <Text>By {author}</Text>
                        <Text>{description}</Text>
                        <Text>Location: {location}</Text>
                        <Text>@ {date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
};

NewsItem.propTypes = {
    news: PropTypes.object,
    style: ViewPropTypes.style,
};

NewsItem.defaultProps = {
    news: mockData.news[0]
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignContent: 'flex-start',
        padding: 0,
        borderBottomWidth: 3,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    innerContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 5
    }
})