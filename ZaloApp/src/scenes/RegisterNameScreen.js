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

export default class RegisterNameScreen extends Component
{
    state = {
        fullname:''
    }

    handleFullname = (text) => {
        this.setState({fullname:text})
    }

    onRegisterButtonPressed(){
        console.log('Register pressed');
    }
    render() {
        return (
            <View style= {styles.container}>
                <Text style={styles.header}>What's Your Full Name?</Text>
                <Text style={styles.body}>Using real name make you more recognizable.</Text>
                <View style = {styles.phoneInput}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={{ textAlign: 'center', color: '#007aff', fontSize: 20 }}>VN</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                        placeholder='Enter your full name'
                        onChangeText={this.handleFullname}
                        clearButtonMode="always"
                        keyboardType='default'
                    />
                </View>
                <Button
                        style={styles.registerButton}
                        rounded
                        info
                        onPress={this.onRegisterButtonPressed.bind(this)}>
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
        flex:9,
        fontSize: 20,
        height: 50,
        paddingLeft:5,
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
  