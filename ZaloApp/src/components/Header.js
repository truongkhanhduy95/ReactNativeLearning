import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableOpacity, Dimensions,
    TextInput, Button, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import MyStatusBar from './MyStatusBar';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Header extends Component {

    constructor(props) {
        super(props);
    }
    
    goBack = () => {
        this.props.navigation.dispatch({ type: 'Navigation/BACK' });
    }
    

    render() {
        return (
           
            <LinearGradient 
                    start={{x: 1.0, y: 0.0}} end={{x: 0, y: 1}}
                    colors={['#25b8f7','#006FFD']}
                    style = { styles.container}>
                     <MyStatusBar backgroundColor="#006FFD" barStyle="light-content"/>
                    <View style={styles.layout}>
                        <Icon.Button onPress = {this.props.onBack} backgroundColor='transparent' size={26} color='#fff' name='ios-arrow-back'/>
                        <Text style={styles.title}>
                            {this.props.title}
                        </Text>
                        <TouchableOpacity>
                            <View style={styles.back}
                            />
                        </TouchableOpacity>
                    </View> 
            </LinearGradient>
        )
    };
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

const styles = StyleSheet.create({
    container: {
        alignSelf:'stretch',
        marginTop: 0,
        height: APPBAR_HEIGHT + STATUSBAR_HEIGHT
    },
    statusBar: {
        height: STATUSBAR_HEIGHT,
      },
      appBar: {
        backgroundColor:'#79B45D',
        height: APPBAR_HEIGHT,
      },
    layout:{
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    back:{
        width:40,
        height:40,
        alignSelf:'center',
    },
    title:{
        fontSize:19,
        justifyContent:'center',
        fontWeight:'bold',
        color:'white'
    }
  });
