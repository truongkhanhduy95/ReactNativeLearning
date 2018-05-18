import React , { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import FastImage from 'react-native-fast-image'

export default class ContactRow extends Component {
    constructor(props){
        super(props);
    }

    

    render() {
        const activeDot = 
        <View style={styles.whiteDot}>
            <View style={styles.blueDot} />
        </View>   
        return (
        <View style={[styles.container, {backgroundColor: 'transparent'}]} >
            <TouchableOpacity
                onPress={()=>this.props.onItemClick()}>
            <View style={{padding: 12,flexDirection: 'row',alignItems: 'center',}}>
                <View style= {{flex:1.2, justifyContent:'center', alignItems:'center'}}> 
                    <FastImage source={{ uri: this.props.avatar}} style={styles.avatar} />
                    <View style={{position:'absolute',alignSelf:'flex-end',top:33,right:5}}>
                        {activeDot}
                    </View>
                </View>
                <View style={styles.textLayout}>
                    <Text style={styles.title}>{this.props.username} </Text>
                    <Text style={styles.subtitle}
                        textColor='gray'>
                        {this.props.subtitle}
                    </Text>
                </View>
                <Icon.Button style={{flex:1}} onPress = {this.props.onBack} backgroundColor='transparent' size={26} color='gray' name='phone'/>                
                <Icon.Button style={{flex:1}} onPress = {this.props.onBack} backgroundColor='transparent' size={26} color='gray' name='video'/>
            </View>
            </TouchableOpacity>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textLayout: {
        flex: 2.8,
        flexDirection: 'column',
        marginLeft: 12,
        marginRight: 12,
    },
    title: {
        color:'black',
        fontSize: 20,
    },
    subtitle: {
        fontSize: 14,
        color:'gray',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    photo: {
        flex: 1.2,
        height: '100%',
        width: '100%',
    },
    whiteDot:{
        height:16,
        width:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
    },
    blueDot:{
        height:12,
        width:12,
        borderRadius:6,
        backgroundColor:'green',
    },
});