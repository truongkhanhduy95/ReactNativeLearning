import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconIO from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

export default class SettingsRow extends Component{
    render(){
        return (
            <View style = {{backgroundColor:'white', paddingLeft: 22}}>
                <View style = {{flexDirection:'row',alignItems:'center', padding:15}}>
                    <View style= {{ justifyContent:'center', alignItems:'center', }}> 
                        <Icon name={this.props.icon} style={{}} size = {26} color={this.props.color}/>
                    </View>
                    <View style={styles.textLayout}>
                        <Text style={{fontSize:18}} >{this.props.title}</Text>
                    </View>
                    <Icon name='chevron-right' style={{}} size = {26} color='#d9dadb'/>
                    
                </View>
                <View style={{height:0.5, backgroundColor:'gray',width:'100%'}}/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    icon:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50,
        borderRadius: 25,
    },
    suggestLayout:{
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        padding:12,
    },
    bestFriendLayout:{
        flexDirection:'column',
        backgroundColor:'white',
        marginTop:10,
        marginBottom:10,
        padding:12,
    },
    textLayout:{
        flex:3.6,
        marginLeft:15,
    }
});