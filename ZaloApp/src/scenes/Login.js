import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS,Platform } from 'react-native'
import { Button } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseHeaderComponent from '../components/BaseHeaderComponent';
import { userActions } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Login extends BaseHeaderComponent {
    state = {
        isShowPassword: false,
        username: '',
        password: '',
        isLogged: false,
    }

    constructor(props) {
        super(props);
    }

    getTitle(){
        return 'Login';
    }

    onLoginButtonPressed() {
        if(this.canLogin()) {
			// BackHandler.removeEventListener('hardwareBackPress', this.goBack);
            this.props.login(this.state.username, this.state.password);
        }
    }

    onShowPasswordPressed(){
        this.setState({ isShowPassword: !this.state.isShowPassword })
    }

    canLogin(){
        return this.state.username && this.state.password;
    }

    componentDidUpdate(){
        if (this.props.isLogged){
            let action = NavigationActions.navigate({ routeName: 'tabBar' });
            this.props.navigation.dispatch(action);
		}

    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack);
    }

    renderContent() {
        let title = 'You can login with your phone number or username';
        let loginText = 'Login';
        let username = 'Username';
        let password = 'Password';
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.line} />
                <View style={styles.rowField}>
                    <TextInput
                        style={{flex:13}}
                        placeholder={username}
                        placeholderTextColor='gray'
                        onChange={(event)=> this.setState({username: event.nativeEvent.text})}
                        underlineColorAndroid='transparent'
                    />
                    <Button
                        style={{flex:2,justifyContent: 'center',}}
                        bordered
                        dark
                        onPress={null}>
                        <Text style={{ color: 'gray', fontWeight: 'bold' }}>ABC</Text>
                    </Button>
                </View>
                <View style={styles.line} />
                <View style={styles.rowField}>
                    <TextInput
                        style={{flex:13}}
                        placeholder={password}
                        placeholderTextColor='gray'
                        secureTextEntry = {!this.state.isShowPassword}
                        onChange={(event)=> this.setState({password: event.nativeEvent.text})}
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity
                        style={{flex:2}}
                        onPress = {this.onShowPasswordPressed.bind(this)}>
                        <Text style={{ color: 'gray' }}>{this.state.isShowPassword ? 'HIDE': 'SHOW'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.line} />
                <Button
                    style={styles.loginButton}
                    full
                    rounded
                    info = {!this.canLogin()}
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

const mapStateToProps = state => ({
    isLogged: state.login.isLogged
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators( userActions , dispatch);
}  

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
    },
    title: {
        marginTop: 30,
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: Platform.OS === 'ios' ? 15 : 5
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