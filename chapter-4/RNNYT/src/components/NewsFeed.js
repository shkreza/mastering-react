import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, ViewPropTypes, ListView, StyleSheet, Modal, TouchableOpacity, WebView } from 'react-native';
import { NewsItem } from './NewsItem';
import * as globalStyles from '../styles/global';
import { SmallText } from './SmallText';

type Props = {};
export class NewsFeed extends Component<Props> {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1.title !== row2.title
        });

        this.state = {
            dataSource: this.ds.cloneWithRows(props.news),
            modalVisible: false,
            modalUrl: 'http://google.com'
        }

        this.renderRow = this.renderRow.bind(this);
        this.onModalOpen = this.onModalOpen.bind(this);
        this.onModalClose = this.onModalClose.bind(this);
    }

    render() {
        return (<View style={globalStyles.pageContainer}>
            <ListView
                    enableEmptySections
                    renderRow={this.renderRow}
                    dataSource={this.state.dataSource}
                    style={this.props.listStyles}/>
            {this.renderModal()}
        </View>)
    };

    renderRow(rowData, ...rest) {
        const index = parseInt(rest[1], 10);
        return (
            <NewsItem
                onPress={
                    ()=> { this.onModalOpen(rowData.url) }
                }
                style={styles.newsItem} {...rowData} />
        )
    }

    renderModal() {
        return (
            <Modal
                animationType='slide'
                visible={this.state.modalVisible}
                onRequestClose={this.onModalClose}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        onPress={
                            () => { 
                                this.onModalClose()
                            }
                        }
                        style={styles.closeButton}>
                        <SmallText>Close</SmallText>
                    </TouchableOpacity>
                    <WebView
                        onNavigationStateChange={(navState) => {
                            if(navState.canGoBack) {
                                this.showBackButton();
                            }
                        }}
                        source={{uri: this.state.modalUrl}}
                        scalesPageToFit/>
                </View>
            </Modal>
        )
    }

    onModalOpen(url) {
        this.setState({
            modalVisible: true,
            modalUrl: url
        })
    }

    onModalClose() {
        this.setState({
            modalVisible: false
        })
    }

    showBackButton() {
        this.setState({
            showBackButton: true
        })
    }
};

NewsFeed.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object),
    listStyles: ViewPropTypes.style
};

NewsFeed.defaultProps = {
    news: [
        {
            title: 'Some title',
            author: 'Reza',
            date: new Date(),
            location: 'home',
            description: 'Random stuff',
            imageUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_120x44dp.png',
            url: 'http://gmail.com'
        },
        {
            title: 'Some title',
            author: 'Roya',
            date: new Date(),
            location: 'Worke',
            description: 'Not so random stuff',
            imageUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
            url: 'http://msn.com'
        },
        {
            title: 'Some title',
            author: 'Roya',
            date: new Date(),
            location: 'Worke',
            description: 'Not so random stuff',
            imageUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
            url: 'http://google.com'
        },
        {
            title: 'Some title',
            author: 'Roya',
            date: new Date(),
            location: 'Worke',
            description: 'Not so random stuff',
            imageUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
            url: 'http://cnn.com'
        },
        {
            title: 'Some title',
            author: 'Roya',
            date: new Date(),
            location: 'Worke',
            description: 'Not so random stuff',
            imageUrl: 'https://facebook.github.io/react-native/img/header_logo.png',
            url: 'http://foxnews.com'
        }
    ]
};

const styles = StyleSheet.create({
    newsItem: {
        marginBottom: 20
    },
    modalContent: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 40,
        backgroundColor: globalStyles.BG_COLOR
    },
    closeButton: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: 'row'
    }
});
