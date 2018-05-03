import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import { Button } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    constructor(props) {
        super(props);
        // this.goBack=this.goBack.bind(this);
    }


    handleUsername = (text) => {
        this.setState({ username: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    onLoginButtonPressed() {
        console.log('Login pressed');
    }

    goBack = () => {
        let action = NavigationActions.back({ key: 'intro' })
        this.props.navigation.dispatch({ type: 'Navigation/BACK' });
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack);
    }

    render() {
        let title = 'You can login with your phone number or username'
        let loginText = 'Login'
        let username = 'Username'
        let password = 'Password'
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.line} />
                <View style={styles.rowField}>
                    <TextInput
                        placeholder={username}
                        placeholderTextColor='gray'
                        onChangeText={this.handleUsername}
                    />
                    <Button
                        bordered
                        dark
                        small
                        onPress={this.onLoginButtonPressed.bind(this)}>
                        <Text style={{ color: 'gray', fontWeight: 'bold' }}> ABC </Text>
                    </Button>
                </View>
                <View style={styles.line} />
                <View style={styles.rowField}>
                    <TextInput
                        placeholder={password}
                        placeholderTextColor='gray'
                        onChangeText={this.handleUsername}
                    />
                    <TouchableOpacity>
                        <Text style={{ color: 'gray' }}>SHOW</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Button
                    style={styles.loginButton}
                    rounded
                    info
                    onPress={this.onLoginButtonPressed.bind(this)}>
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>{loginText.toUpperCase()}</Text>
                </Button>
                <TouchableOpacity>
                    <Text style={styles.forgotPassword}>Recover password</Text>
                </TouchableOpacity>
                <View style={{ flex: 1, justifyContent: 'flex-end', }}>
                    <TouchableOpacity>
                        <Text style={styles.faq}>FAQ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
    },
    title: {
        marginTop: 50,
        marginBottom: 30,
        color: 'gray',

    },
    line: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        alignSelf: 'stretch'
    },
    rowField: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        padding: 15,
    },
    keyboardTypeButton: {
        backgroundColor: 'white',
    },

    buttonLayout: {

    },
    loginButton: {
        marginTop: 20,
        marginLeft: 80,
        marginRight: 80,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    forgotPassword: {
        marginTop: 20,
        color: '#007BF9',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    faq: {
        marginBottom: 20,
        textDecorationLine: 'underline'
    },
})