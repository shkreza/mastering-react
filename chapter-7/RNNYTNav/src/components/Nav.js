import React, { Component } from 'react';
import { Navigator } from 'react-native-deprecated-custom-components';
import { HomeScreen } from './HomeScreen';
import { WelcomeScreen } from './WelcomeScreen';

const HOME_ROUTE = {
    title: 'HOME_ROUTE',
    component: HomeScreen
};

const WELCOME_ROUTE = {
    title: 'WELCOME_ROUTE',
    component: WelcomeScreen,
    props: {onPress: 
        (navigator)=>{
            navigator.push(HOME_ROUTE)
        }
    }
};

export class Nav extends Component { 
    constructor(props) {
        super(props);

        this.renderScene = this.renderScene.bind(this);
    }

    render() {
        return (
            <Navigator
                initialRoute={WELCOME_ROUTE}
                renderScene={this.renderScene}>

            </Navigator>
        )
    }

    renderScene(route, navigator) {
        console.log('HERE' + navigator.push);
        return (<route.component navigator={navigator} {...route.props}/>)
    }
}