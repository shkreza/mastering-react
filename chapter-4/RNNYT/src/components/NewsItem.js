/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Vibration } from 'react-native';
import { ByLine } from './ByLine';
import { Thumbnail } from './Thumbnail';
import { Title } from './Title';
import { SmallText } from './SmallText';
import * as globalStyles from '../styles/global';

type Props = {};
export class NewsItem extends Component<Props> {
    render() {
        const {date, location, imageUrl, onPress, description, author, title, style} = this.props;
        return (
            <TouchableOpacity
                onPress={onPress}
                stype={styles.container}
                onLongPress={
                    (e)=> {
                        this.onLongPress()
                    }
                }
                delayLongPress={1000}>
                <View stype={styles.container}>
                    <Thumbnail imageUrl={imageUrl} title={title} accentColor={globalStyles.ACCENT_COLOR}></Thumbnail>
                    <ByLine author={author} date={date} location={location} ></ByLine>
                    
                </View>
            </TouchableOpacity>
        )
    }

    onLongPress() {
        Alert.alert('Title', 'Long press detected',
            [ 
                { text: 'Click me', onPress: ()=>console.log('hi') },
                { text: 'Click here', onPress: ()=>Vibration.vibrate() }
            ])
    }
};

NewsItem.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    style: Text.propTypes.style
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    }
});

NewsItem.defaultProps = {

}