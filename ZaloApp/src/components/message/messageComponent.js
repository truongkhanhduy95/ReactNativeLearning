import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity, ListView } from 'react-native';
import MessageList from './messageList';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import HeaderTab from './headerTab'
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions } from 'react-navigation';

export default class MessageComponent extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([
            {username:"Title 1", avatar:'https://reactjs.org/logo-og.png'},
            {username:"Title 1", avatar:'https://reactjs.org/logo-og.png'},
          ])};
    }
    navigate(){
        let action = NavigationActions.navigate({ routeName: 'chat' });
        this.props.navigation.dispatch(action);
    }
    renderRow(rowData, section, row) {
        const total = this.state.dataSource.getRowCount();
        const topLineStyle =  styles.topLine;
        const bottomLineStyle = row == total - 1 ? [styles.bottomLine, styles.hiddenLine] : styles.bottomLine;
        
        if(row == 0)
            return (<View style={{ marginRight:15}}>
                <TouchableOpacity style={{ flexDirection:'column',justifyContent:'flex-start', alignItems:'center'}}>
                    <Image source={{ uri: rowData.avatar}} style={styles.avatar} />
                    <Text style={{marginTop:5}}>Create group</Text>
                </TouchableOpacity>
        </View>);
        else
            return (<View style={{marginRight:15}}>
                    <TouchableOpacity style={{ flexDirection:'column',justifyContent:'flex-start', alignItems:'center'}}>
                        <Image source={{uri: rowData.avatar}} style={styles.avatar} />
                        <Text style={{marginTop:5}}>{rowData.username}</Text>
                    </TouchableOpacity>
            </View>);
      }
    render(){
        const friendSuggest = 'Gợi ý kết bạn';
        const bestFriend = 'Bạn thân';
        const selectFriend = 'Chọn bạn thường liên lạc';
        
        return (
            <View style = {styles.container}>
                <HeaderTab/>
                <MessageList
                    onPress={()=>this.navigate()}/>
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
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    }
});