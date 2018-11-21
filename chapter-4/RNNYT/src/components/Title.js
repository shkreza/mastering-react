import PropTypes from 'prop-types';
import React from 'react';
import {AppText} from './AppText';
import * as globalStyles from '../styles/global';
import { Text, StyleSheet } from 'react-native';

export const Title = ({style, children}) => (
    <AppText style={[styles.title, style]}>
        {children}
    </AppText>
);

Title.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};

const styles = StyleSheet.create({
    title: {
        fontFamily: 'HelveticaNeue-CondensedBold',
        fontSize: 18,
        color: globalStyles.HEADER_TEXT_COLOR,
        backgroundColor: `${globalStyles.BG_COLOR}99`
    }
})
