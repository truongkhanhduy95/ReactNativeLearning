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

export default class RegisterNameScreen extends Component
{
    state = {
        fullname:'',
        isDisable:true
    }

    handleFullname = (text) => {
        this.setState({fullname:text})
        if(text === '')
            this.setState({isDisable:true})
        else
            this.setState({isDisable:false})

    }

    onRegisterButtonPressed(){
        let action = NavigationActions.navigate({ routeName: 'registerPhone' })
        this.props.navigation.dispatch(action);
    }
    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.header}>What's Your Full Name?</Text>
                <Text style={styles.body}>Using real name make you more recognizable.</Text>
                <TextInput style={styles.textInput}
                    placeholder='Enter your full name'
                    onChangeText={this.handleFullname}
                    clearButtonMode="always"
                    keyboardType='default'
                />
                <Button
                        style={styles.registerButton}
                        rounded
                        info
                        onPress={this.onRegisterButtonPressed.bind(this)}
                        disabled={this.state.isDisable}>
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
      marginTop:50,
      marginBottom:30,
    },
    body: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 40,
    },
    textInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        height: 50,
        paddingLeft:10,
        textAlign: 'left'
    },
    phoneInput: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 50
    },
    registerButton:{
        marginTop: 20,
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
  