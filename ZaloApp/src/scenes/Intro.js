import React,{Component} from 'react'
import {View, Image, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class Intro extends Component{

    onLoginButtonPressed(){
        let action = NavigationActions.navigate({ routeName: 'login' })
        this.props.navigation.dispatch(action);
    }

    onRegisterButtonPresses(){
        console.log('Register pressed');
    }

    render(){
        let loginText = 'Login'
        let registerText = 'Register'
        return (
            <View style={styles.container}>
                <View style={styles.imageLayout}>
                    <Image
                        style={styles.imageLogo}
                        source={require('../../public/images/zalo_logo.png')}/>
                </View>
                <View style={styles.buttonLayout}>
                    <Button
                        style={styles.loginButton}
                        rounded
                        onPress={this.onLoginButtonPressed.bind(this)}>
                        <Text style={{color:'white',fontWeight:'bold'}}>{loginText.toUpperCase()}</Text>
                    </Button>
                    <Button
                        style={styles.registerButton}
                        rounded
                        bordered
                        dark
                        onPress={this.onRegisterButtonPresses.bind(this)}>
                        <Text style={{color:'black',fontWeight:'bold'}}>{registerText.toUpperCase()}</Text>
                    </Button>
                </View>
                <View style={styles.textLayout}>
                    <Text style={styles.text}>{'Tiếng Việt'}</Text>
                    <Text style={[styles.text,{textDecorationLine:'underline'}]}>{'English'}</Text>
                    <Text style={styles.text}>{'ภาษาไทย'}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        justifyContent:'center'
    },
    imageLayout:{
        flex:7,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonLayout:{
        backgroundColor:'white',
        flex:2,
        justifyContent:'space-around',
        alignItems:'center'
    },
    imageLogo:{
        flex:1,
        resizeMode:'contain',
    },
    textLayout:{
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        flex:1
    },
    loginButton:{
        marginLeft:80,
        marginRight:80,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    registerButton:{
        backgroundColor:'white',
        marginLeft:80,
        marginRight:80,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    text:{
        margin: 5,
        fontSize:16,
        fontWeight:'bold',
        backgroundColor:'white'
    }
});