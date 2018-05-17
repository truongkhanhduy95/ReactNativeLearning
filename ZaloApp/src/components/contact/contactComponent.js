import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import ContactList from './contactList';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import HeaderTab from './headerTab'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';

export default class ContactComponent extends Component{
    navigateToChat(){
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
                <View style = {styles.suggestLayout}>
                    <View style= {{ justifyContent:'center', alignItems:'center'}}> 
                        <LinearGradient
                            colors={['#E5BF84', '#E56505']}
                            style={styles.icon}>
                            <Icon name='user' backgroundColor='transparent' color='#fff' size={26} />
                        </LinearGradient>
                    </View>
                    <View style={styles.textLayout}>
                        <Text style={{fontSize:18}} >{friendSuggest}</Text>
                    </View>
                    <Icon name='angle-right' style={{}} size = {26} color='gray'/>
                </View>
                <View style = {styles.bestFriendLayout}> 
                    <Text style={{fontSize:15,fontWeight:'bold', marginBottom: 10}} >{bestFriend}</Text>
                    <View style = {{flexDirection:'row', alignItems:'center',}}>
                        <View style= {{ justifyContent:'center', alignItems:'center'}}> 
                            <View
                                style={[styles.icon,{backgroundColor:'#b4e3f7',borderWidth:2, borderColor:'#0062e0', borderStyle:'dotted'}]}>
                                <IconIO name='md-add' backgroundColor='transparent' color='#0062e0' size={26} />
                            </View>
                        </View>
                        <View style={styles.textLayout}>
                            <Text style={{fontSize:18, color:'#006FFD'}} >{selectFriend}</Text>
                        </View>
                    </View>
                </View>

                <ContactList
                        onItemClick={()=>this.navigateToChat()}
                    />
            </View>
        );
    }
    //{borderStyle: 'dashed',borderColor: '#006FFD',backgroundColor:'#25b8f7'}
}

const styles = StyleSheet.create({
    container:{
        flex:1,
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
