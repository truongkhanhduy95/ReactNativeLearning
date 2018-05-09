import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS } from 'react-native'
import { Button } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class BaseComponent extends Component{
    constructor(props) {
        super(props);
    }

    renderContent(){
    }

    render(){
        return this.renderContent();
    }

}
            