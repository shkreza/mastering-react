import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SmallText } from './SmallText';
import * as globalStyles from '../styles/global';

export const ByLine = ({ author, date, location }) => (
    <View accessibilityLabel={`${author} wrote at ${date}`} accessible shouldRasterizeIOS
            onMagicTap={(e)=>console.log(e)}
            onAccessibilityTap={(e)=>console.log(e)}
            onLayout={(e)=>console.log(e)}>
        <View style={styles.row}>
            <SmallText>
                {date.toLocaleDateString()}
            </SmallText>
            <SmallText>
                {author}
            </SmallText>
            {location ? (
                <View style={styles.row}>
                    <SmallText style={styles.location}>
                        {location}
                    </SmallText>
                </View>
            ) : null}
        </View>
    </View>
);

ByLine.propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    location: PropTypes.string
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    location: {
        color: globalStyles.MUTED_TEXT
    }
});