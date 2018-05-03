import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Button } from 'native-base';
import  ConfirmDialog  from '../components/ConfirmDialog';

export default class RegisterPhoneScreen extends Component
{
    state = {
        phonenumber:''
    }
    handlePhonenumber = (text) => {
        this.setState({phonenumber:text})
    }

    onRegisterButtonPressed(){
        if(this.state.phonenumber.length >= 10)
            this.refs.addModal.showAddModal();
    }
    render() {
        let confirmMsg = `You will recive an automatic call from Zalo to activate your account. Please confirm your phone number is correct. Continue?`
        
        return (
            <View style= {styles.container}>
                <Text style={styles.header}>What's Your Phone Number?</Text>
                <Text style={styles.body}>This number could be used to log in and reset your password.</Text>
                <View style = {styles.phoneInput}>
                    <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={{ textAlign: 'center', color: '#007aff', fontSize: 20 }}>VN</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                        placeholder='Enter your phone number'
                        keyboardType='phone-pad'
                        clearButtonMode="always"
                        onChangeText={this.handlePhonenumber}
                        maxLength={10}></TextInput>
                </View>
                 <Button
                        style={styles.registerButton}
                        rounded
                        info
                        onPress={this.onRegisterButtonPressed.bind(this)}>
                        <Text style={{color:'white',fontWeight:'bold'}}>{'register'.toUpperCase()}</Text>
                </Button>
                <ConfirmDialog ref={'addModal'} title='confirm' message={confirmMsg} phoneNumber={this.state.phonenumber} >

                </ConfirmDialog>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    phoneInput: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 50
    },
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
        flex:9,
        fontSize: 20,
        height: 50,
        paddingLeft:5,
        textAlign: 'left'
    },
    buttonContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
      }
  });
  