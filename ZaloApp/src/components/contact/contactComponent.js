import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import ContactList from './contactList';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import HeaderTab from './headerTab'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';
import BaseHeaderComponent from '../BaseHeaderComponent';
import TopBar from '../TopBar'
export default class ContactComponent extends BaseHeaderComponent{
    navigateToChat(){
        let action = NavigationActions.navigate({ routeName: 'chat' });
        this.props.navigation.dispatch(action);
    }
    renderHeader() {
        return (
            <HeaderTab/>
        );
    }
    renderContent(){
        const friendSuggest = 'Gợi ý kết bạn';
        const bestFriend = 'Bạn thân';
        const selectFriend = 'Chọn bạn thường liên lạc';
        return(
            <View style = {styles.container}>
                <TopBar>
                    {/* Contact Tab */}
                    <View title="DANH BA" style={styles.content}>
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
                                onItemClick={()=>this.navigateToChat()} />
                    </View>

                    {/* Official Account tab */}
                    <View title="OFFICAL ACCOUNT" style={{ flex: 1,                            
                                                            justifyContent: 'center',    
                                                            alignItems: 'center',          
                                                            backgroundColor: '#C2185B',   }}>
                        <Text style={styles.header}>
                        Offical Account
                        </Text>
                        <Text style={styles.text}>
                        Components you define will end up rendering as native platform widgets
                        </Text>
                    </View>
        
                </TopBar>
                
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
    },
    content: {
        flex: 1, 
        backgroundColor: "#f4f6f7",
    },
    header: {
        margin: 10, 
        color: '#FFFFFF',                 
        fontFamily: 'Avenir',            
        fontSize: 26,                      
    },
    text: {
        marginHorizontal: 20,              
        color: 'rgba(255, 255, 255, 0.75)', 
        textAlign: 'center', 
        fontFamily: 'Avenir',
        fontSize: 18,
    },
});
