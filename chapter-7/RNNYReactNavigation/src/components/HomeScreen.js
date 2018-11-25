import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import NewsFeedContainer from '../containers/NewsFeedContainer';
import createStore from '../store/createStore';

const store = createStore();

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Provider store={store}>
                <NewsFeedContainer />
            </Provider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    }
})