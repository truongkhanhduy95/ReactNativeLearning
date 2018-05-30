import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
  
} from 'react-native';

import { NavigationActions } from 'react-navigation';
import { Button } from 'native-base';
import BaseHeaderComponent from '../components/BaseHeaderComponent';

export default class RegisterNameScreen extends BaseHeaderComponent
{
    state = {
        fullname:'',
        password:'',
    }
    
    getTitle(){
        return 'Name';
    }

    handleFullname = (text) => {
        this.setState({fullname:text})
    }

    handlePassword = (text) => {
        this.setState({password:text})
    }

    canRegister(){
        return this.state.fullname && this.state.password;
    }

    onRegisterButtonPressed(){
        let action = NavigationActions.navigate({ 
            routeName: 'registerPhone',
            params: {
                fullname: this.state.fullname,
                password: this.state.password
            } })
        this.props.navigation.dispatch(action);
    }

    renderContent() {
        return (
            <View style= {styles.container}>
                <Text style={styles.header}>What's Your Full Name?</Text>
                <Text style={styles.body}>Using real name make you more recognizable.</Text>
                <TextInput style={styles.textInput}
                    placeholder='Enter your full name'
                    onChangeText={this.handleFullname}
                    clearButtonMode="always"
                    keyboardType='default'
                    underlineColorAndroid='transparent'
                />
                <Text style={styles.body}>Type your password here.</Text>
                <TextInput style={styles.textInput}
                    placeholder='Enter your password'
                    onChangeText={this.handlePassword}
                    clearButtonMode="always"
                    keyboardType='default'
                    secureTextEntry = {true}
                    underlineColorAndroid='transparent'
                />
                <Button
                        style={styles.registerButton}
                        full
                        rounded
                        info
                        onPress={this.onRegisterButtonPressed.bind(this)}
                        disabled={!this.canRegister()}>
                        <Text style={{color:'white',fontWeight:'bold'}}>{'next'.toUpperCase()}</Text>
                </Button>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontWeight:'bold',  
      textAlign: 'center',
      marginTop:30,
      marginBottom:30,
    },
    body: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 20,
    },
    textInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginBottom: 20,
        fontSize: 20,
        height: 50,
        paddingLeft:10,
        textAlign: 'left',
        backgroundColor:'white',
    },
    phoneInput: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 50
    },
    registerButton:{
        marginLeft:80,
        marginRight:80,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      }
  });
  