import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  BackHandler,
  ActivityIndicator,
  Keyboard,
  AlertIOS
} from 'react-native';

import { Button } from 'native-base';
import  ConfirmDialog  from '../components/ConfirmDialog';

import { NavigationActions } from 'react-navigation';
import BaseHeaderComponent from '../components/BaseHeaderComponent';
import { userActions } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class RegisterPhoneScreen extends BaseHeaderComponent{
    
    constructor(props) {
        super(props);
        this.state = {
            phonenumber:'',
            countryCode:'',
            dialingCode:'',
            isDisable:true,
            isRegistered:false,
            isLoading:false,
            error: '',
        };
    }
    getTitle(){
        return 'Phone number';
    }

    handlePhonenumber = (text) => {
        this.setState({phonenumber:text});
        if(text.length >= 10)
            this.setState({isDisable:false});
        else
            this.setState({isDisable:true});
    }

    onRegisterButtonPressed(){
        Keyboard.dismiss();
        var fullname = this.props.navigation.state.params.fullname;
        var password = this.props.navigation.state.params.password;
        this.props.register(fullname, fullname, password, this.state.phonenumber);
    }

    onSelectPhoneCode(){
        let action = NavigationActions.navigate({ routeName: 'phoneCode', params: {returnData: this.returnData } })
        this.props.navigation.dispatch(action);
    }

    componentWillReceiveProps(newProps){
        if(!newProps.isLoading){
            if (newProps.isRegistered){
                let action = NavigationActions.navigate({ routeName: 'tabBar' });
                this.props.navigation.dispatch(action);
            }
            
            if (newProps.error) {
                if(newProps.error.code == 11000){
                    AlertIOS.alert("Username already exist!");
                    this.goBack();
                }
                else
                    AlertIOS.alert(newProps.error);        
            }
        }
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack);
    }

    returnData = (countryCode, dialingCode) => {
        this.setState({countryCode: countryCode, dialingCode: dialingCode})

        console.log(this.state.countryCode);
    }
    renderContent() {
        let confirmMsg = `You will recive an automatic call from Zalo to activate your account. Please confirm your phone number is correct. Continue?`
        
        return (
            <View style= {styles.container}>
                <ConfirmDialog ref={'addModal'} title='confirm' message={confirmMsg} phoneNumber={this.state.phonenumber} >
                </ConfirmDialog>
                <Text style={styles.header}>What's Your Phone Number?</Text>
                <Text style={styles.body}>This number could be used to log in and reset your password.</Text>
                <View style = {styles.phoneInput}>
                    <TouchableOpacity style={styles.buttonContainer}
                    onPress={this.onSelectPhoneCode.bind(this)}>
                            <Text style={{ textAlign: 'center', color: '#007aff', fontSize: 20 }}>{this.state.countryCode != '' ? this.state.countryCode : 'VN'}</Text>
                    </TouchableOpacity>
                    <TextInput style={styles.textInput}
                        placeholder='Enter your phone number'
                        keyboardType='phone-pad'
                        clearButtonMode="always"
                        onChangeText={this.handlePhonenumber}
                        maxLength={10}
                        underlineColorAndroid='transparent'></TextInput>
                </View>
                 <Button
                        style={styles.registerButton}
                        full
                        rounded
                        info
                        onPress={this.onRegisterButtonPressed.bind(this)}
                        disabled={this.state.isDisable}
                        >
                        <Text style={{color:'white',fontWeight:'bold'}}>{'register'.toUpperCase()}</Text>
                </Button>
                {this.props.isLoading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size='large' color="#25b8f7" />
                    </View>
                }
                
            </View>
            
        );
    }

}
const mapStateToProps = state => ({
    isRegistered: state.register.isRegistered,
    isLoading: state.register.isRegistering,
    error: state.register.error,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators( userActions , dispatch);
}  

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPhoneScreen);

const styles = StyleSheet.create({
    phoneInput: {
        flexDirection: 'row',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: 'gray',
        height: 55,
        backgroundColor:'white'
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
      marginTop:30,
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
        justifyContent: 'center'
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
      },
    loading: {
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor:'#00000040'
        }
  });
  