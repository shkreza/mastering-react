import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import * as globalStyles from '../styles/global.js';

export const AppText = ({style, children, ...rest}) => (
    <Text style={[globalStyles.COMMON_STYLES.text, style]} {...rest}>
        {children}
    </Text>
);

AppText.propTypes = {
    style: Text.propTypes.style,
    children: PropTypes.node
};
