import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ListView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NewsItem } from './NewsItem';
import mockData from '../mockData.json';

export class NewsFeed extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => ( row1.title !== row2.title )
        })

        this.refresh = this.refresh.bind(this);

        console.log(`HERE: ${JSON.stringify(props.news)}`);
        
        this.state = {
            dataSource: this.ds.cloneWithRows(props.news)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>{
                    console.log('hi');
                    this.refresh();
                }}>
                    <Text>Refresh</Text>
                </TouchableOpacity>
                <ListView
                    enableEmptySections
                    renderRow={this.renderRow}
                    dataSource={this.state.dataSource}
                    />
            </View>
        )
    }

    renderRow(rowData, ...rest) {
        console.log('***' + JSON.stringify(rowData))
        return (
            <NewsItem {...rowData}>
            </NewsItem>
        )
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            dataSource: this.ds.cloneWithRows(nextProps.news)
        })
    }

    refresh() {
        if(this.props.loadNews) {
            this.props.loadNews();
        }
    }
};

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    loadNews: PropTypes.func
}

NewsFeed.defaultProps = {
    news: mockData.news
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50
    }
})