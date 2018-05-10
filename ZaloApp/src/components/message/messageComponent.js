import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import MessageList from './messageList';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import HeaderTab from './headerTab'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';

export default class MessageComponent extends Component {
    navigate(){
        let action = NavigationActions.navigate({ routeName: 'chat' });
        this.props.navigation.dispatch(action);
    }
    render(){
        const friendSuggest = 'Gợi ý kết bạn';
        const bestFriend = 'Bạn thân';
        const selectFriend = 'Chọn bạn thường liên lạc';
        return(
            <View style = {styles.container}>
                <HeaderTab/>
            
                <MessageList
                 onPress={this.navigate}/>
            </View>
        );
    }
    //{borderStyle: 'dashed',borderColor: '#006FFD',backgroundColor:'#25b8f7'}
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#f4f6f7",
    },
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
