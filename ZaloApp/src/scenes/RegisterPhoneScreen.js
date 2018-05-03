import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { Button } from 'native-base';

export default class RegisterPhoneScreen extends Component
{
    state = {
        phonenumber:''
    }
    handlePhonenumber = (text) => {
        this.setState({phonenumber:text})
    }

    onRegisterButtonPressed(){
        console.log('Register pressed');
    }
    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.header}>What's Your Phone Number?</Text>
                <Text style={styles.body}>This number could be used to log in and reset your password.</Text>
                <TextInput style={styles.textInput}
                    placeholder='Enter your phone number'
                    keyboardType='phone-pad'
                    clearButtonMode="always"
                    onChangeText={this.handlePhonenumber}></TextInput>
                 <Button
                        style={styles.registerButton}
                        rounded
                        info
                        onPress={this.onRegisterButtonPressed.bind(this)}>
                        <Text style={{color:'white',fontWeight:'bold'}}>{'register'.toUpperCase()}</Text>
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

    registerButton:{
        marginTop: 20,
        marginLeft:80,
        marginRight:80,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    textInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        fontSize: 20,
        height: 50,
        paddingLeft:10,
        textAlign: 'left'
    }
  });
  