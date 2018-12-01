import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default OnboardingButton = ({totalItems, currentIndex, moveNext, movePrev, onDone}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={movePrev}>
                <Text>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDone}>
                <Text>Done</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={moveNext}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

OnboardingButton.propTypes = {
    moveNext: PropTypes.func.isRequired,
    movePrev: PropTypes.func.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
    onDone: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 0.25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 200
    },
})