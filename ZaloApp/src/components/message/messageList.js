import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch,TextInput, Image, ListView, TouchableOpacity,ActivityIndicator } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from "react-native-elements";
import MessageRow from '../message/messageRow';

export default class MessageList extends Component {
    constructor(props){
        super(props);
        this.renderRow = this.renderRow.bind(this);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});     
        this.state = {
            loading: true,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            dataSource: ds.cloneWithRows([
                {username:"Title 1", image:'https://reactjs.org/logo-og.png'},
                {username:"Title 1", image:'https://reactjs.org/logo-og.png'},
              ])
          };

        
    }
    renderRow(rowData, section, row) {
        const total = this.state.dataSource.getRowCount();
        const topLineStyle =  styles.topLine;
        const bottomLineStyle = row == total - 1 ? [styles.bottomLine, styles.hiddenLine] : styles.bottomLine;
        const activeDot = 
        <View style={styles.whiteDot}>
            <View style={styles.blueDot} />
        </View>  
        if(row == 0)
            return (<View style={{ marginRight:15}}>
                <TouchableOpacity style={{ flexDirection:'column',justifyContent:'flex-start', alignItems:'center'}}>
                    <Image source={{uri: rowData.image}} style={styles.avatar} />
                    <Text style={{marginTop:5}}>Create group</Text>
                </TouchableOpacity>
        </View>);
        else
            return (<View style={{marginRight:15}}>
                    <TouchableOpacity style={{ flexDirection:'column',justifyContent:'flex-start', alignItems:'center'}}>
                    <View style= {{ justifyContent:'center', alignItems:'center'}}> 
                        <Image source={{uri: rowData.image}} style={styles.avatar} />
                        <View style={{position:'absolute',alignSelf:'flex-end',top:34}}>
                            {activeDot}
                        </View>
                    </View>
                        <Text style={{marginTop:5}}>{rowData.username}</Text>
                    </TouchableOpacity>
            </View>);
      }
    componentDidMount() {
        this.makeRemoteRequest();
      }

      
    onItemClick = () => {
        this.props.onPress();
    }
    makeRemoteRequest = () => {
        const { page, seed } = this.state;
        const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: page === 1 ? res.results : [...this.state.data, ...res.results],
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
    };


    render() {
        if (this.state.loading)
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#25b8f7" />
                </View>
            )
        else
            return (
                <View style={styles.container}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.email}
                        ListHeaderComponent = {() =>  (<View style={{marginRight:10,marginLeft:10,width:'100%', height:100}}>
                        <ListView
                            horizontal={true}
                            style={{ height:60,width:'100%',marginTop:10, marginBottom:10 }}
                            dataSource={this.state.dataSource}
                            renderRow={this.renderRow}/>
                    </View>)}
                        renderItem={({ item,index }) => (<MessageRow
                            username={`${item.name.first} ${item.name.last}`}
                            subtitle={item.location.street}
                            avatar={item.picture.thumbnail }
                            containerStyle={{ borderBottomWidth: 0 }}
                            onPress={this.onItemClick}/>)}
                    />
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    rowLayout:{
        //height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '100%',
        padding:14,

    },
    statusLayout:{

    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
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
    }
});