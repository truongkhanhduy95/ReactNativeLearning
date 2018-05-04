import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS } from 'react-native'
import { Button } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class BaseComponent extends Component{
    constructor(props) {
        super(props);
    }
    
    goBack(){
        this.props.navigation.dispatch({ type: 'Navigation/BACK' });
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack);
    }

    renderContent(){
    }

    render(){
        return this.renderContent();
    }

}
            