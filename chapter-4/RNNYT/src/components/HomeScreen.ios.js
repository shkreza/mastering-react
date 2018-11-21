import React, { Component } from 'react';
import { TabBarIOS, StyleSheet, View, Text, Image, StatusBar } from 'react-native';
import { NewsFeed } from './NewsFeed';
import { Search } from './Search';
import * as globalStyles from '../styles/global';

type Props = {};
export class HomeScreen extends Component<Props> {

    constructor(props) {
        super(props);
        
        this.state = {
            tab: 'newsFeed'
        }

        StatusBar.setBarStyle('light-content');
    }

    render() {
        return (
            <TabBarIOS
                barTintColor={globalStyles.BAR_COLOR}
                tintColor={globalStyles.LINK_COLOR}
                translucent={false}>
                <TabBarIOS.Item selected={this.state.tab === 'newsFeed'} onPress={()=>{this.setState({tab: 'newsFeed'})}} systemIcon={'featured'} badge={4}>
                    <NewsFeed/>
                </TabBarIOS.Item>
                <TabBarIOS.Item selected={this.state.tab === 'search'} onPress={()=>{this.setState({tab: 'search'})}} systemIcon={'search'}>
                    <Search style={{marginTop: 100}}/>
                </TabBarIOS.Item>
                <TabBarIOS.Item selected={this.state.tab === 'bookmarks'} onPress={()=>{this.setState({tab: 'bookmarks'})}} systemIcon={'bookmarks'}>
                    <Text>Bookmarks</Text>
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
};
