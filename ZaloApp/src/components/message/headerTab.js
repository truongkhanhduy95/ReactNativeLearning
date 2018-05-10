import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableOpacity, Dimensions,
    TextInput, Button, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MyStatusBar from '../MyStatusBar';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class HeaderTab extends Component {

    constructor(props) {
        super(props);
    }

    goBack = () => {
        this.props.navigation.dispatch({ type: 'Navigation/BACK' });
    }

    addMessage = () => {
        console.log('Press Add Message');

    }

    onCamera = () => {
        console.log('Press Camera');
    }
    render() {
        const findPlaceholder = 'Tìm bạn bè,tin nhắn...';
        return (
            <LinearGradient
                start={{ x: 1.0, y: 0.0 }} end={{ x: 0, y: 1 }}
                colors={['#25b8f7', '#006FFD']}
                style={styles.container}>
                <MyStatusBar backgroundColor="#006FFD" barStyle="light-content" />
                <View style={styles.layout}>
                    <EvilIcons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#fff' name='search' />
                    <TextInput
                        style={styles.title}
                        fontSize={15}
                        placeholder={findPlaceholder}
                        paddingLeft={10}
                        opacity={0.7}
                        placeholderTextColor='white'
                        fontWeight='bold'
                        underlineColorAndroid='transparent'
                    />
                    <TouchableOpacity>
                        <View style={styles.back}
                        />
                    </TouchableOpacity>

                    <Ionicons.Button onPress={()=>this.onCamera()} backgroundColor='transparent' size={26} color='#fff' name='md-camera'/>
                    <Ionicons.Button onPress={()=>this.addMessage()} backgroundColor='transparent' size={26} color='#fff' name='md-add'/>
                    
                </View>
            </LinearGradient>
        )
    };
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginTop: 0,
        height: APPBAR_HEIGHT + STATUSBAR_HEIGHT
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
    },
    appBar: {
        backgroundColor: '#79B45D',
        height: APPBAR_HEIGHT,
    },
    layout: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        // justifyContent:'space-between',
        alignItems: 'center',
    },
    back: {
        width: 40,
        height: 40,
        alignSelf: 'center',
    },
    title: {
        flex: 1,
        color:'#fff',
        justifyContent: 'center',
        
    }
});
