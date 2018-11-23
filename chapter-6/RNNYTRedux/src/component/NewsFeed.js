import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ListView, ViewPropTypes, StyleSheet } from 'react-native';
import { NewsItem } from './NewsItem';

export class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.refresh = this.refresh.bind(this);
        this.search = this.search.bind(this);
        this.renderRow = this.renderRow.bind(this);

        this.state = {
            dataSource: this.ds.cloneWithRows(props.news)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.refresh}>
                    <Text>Refresh</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.search}>
                    <Text>Search</Text>
                </TouchableOpacity>
                <ListView
                    style={styles.listStyles}
                    enableEmptySections
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    >
                </ListView>
            </View>
        )
    }

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        console.log(`***${JSON.stringify(rowData)}`);
        return (
            <NewsItem news={rowData}/>
        )
    }

    componentWillMount() {
        this.refresh()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(nextProps.news)
        })
    }

    refresh() {
        if(this.props.loadNews) {
            console.log('calling loadNews');
            this.props.loadNews()
        }
    }

    search() {
        if(this.props.searchNews) {
            console.log('calling searchNews');
            this.props.searchNews('search "hi reza!"')
        }
    }
};

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: ViewPropTypes.style,
    loadNews: PropTypes.func
};

const styles = StyleSheet.create({
    listStyles: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    container: {
        flexDirection: 'column'
    }
})