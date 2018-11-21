import PropTypes from 'prop-types';
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { AppText } from './AppText';

export const SmallText = ({style, children, ...rest}) => (
    <AppText style={[styles.small, style]} {...rest} >
        {children}
    </AppText>
);

SmallText.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
}

const styles = StyleSheet.create({
    small: {
        fontSize: 11
    }
});
