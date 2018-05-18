import React, {Component} from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableOpacity, Dimensions,
    TextInput, Button, StatusBar
} from 'react-native';
import  Header  from '../components/Header';
import BaseComponent from '../components/BaseComponent';

// function baseHeaderComponent(WrappedComponent, title){
//   return class extends BaseComponent {
//     constructor(props) {
//         super(props);
//     }

//     render(){
//         return (
//             <View style={{flex:1,justifyContent:'center'}}>
//                 <Header
//                         title = {title}
//                         onBack = {() => this.goBack()} />
//                 <WrappedComponent
//                     {...this.props}/>
//             </View>
            
//         )
//     }
// };
// }

export default class BaseHeaderComponent extends BaseComponent{
    constructor(props) {
        super(props);
    }

    getTitle(){
    }

    isShowSettings(){
        return false;
    }

    onSettingsClick(){

    }
    renderHeader() {
        return(
            <Header
                title = {this.getTitle()}
                onBack = {() => this.goBack()}
                showSettings = {this.isShowSettings()}
                onSettingsClicked = {()=>this.onSettingsClick()} />);
    }

    render(){
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                {this.renderHeader()}
                {this.renderContent()}
            </View>
        ) 
    }
};