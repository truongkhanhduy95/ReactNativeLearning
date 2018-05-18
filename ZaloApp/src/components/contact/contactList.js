import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch,TextInput,ActivityIndicator } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from "react-native-elements";
import ContactRow from '../contact/contactRow';

export default class ContactList extends Component {
    constructor(props){
        super(props);        
        this.state = {
            loading: true,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
          };
    }

    componentDidMount() {
        this.makeRemoteRequest();
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
        const title ='Bạn mới cập nhật';
        const changeStatus = ' "Thay đổi trạng thái?"';
        if (this.state.loading)
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#25b8f7" />
                </View>
            )
        else
            return (
                <View style={styles.container}>
                    <View style ={styles.rowLayout}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>{title}</Text>
                        <Switch style={{marginRight:10}} value tintColor={'#25b8f7'} onTintColor={'#25b8f7'}  />
                    </View>
                    <View style ={[styles.rowLayout,{paddingTop:0,}]}>
                        <TextInput
                            style={{backgroundColor:'#f4f6f7',width:'100%',height:50,}}
                            fontSize={18}
                            placeholder={changeStatus}
                            paddingLeft={10}
                            //value={this.state.username}
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={item => item.email}
                        renderItem={({ item }) => (
                        <ContactRow
                            username={`${item.name.first} ${item.name.last}`}
                            subtitle={'status'}
                            avatar={item.picture.thumbnail }
                            onItemClick = {()=>this.props.onItemClick()}
                            containerStyle={{ borderBottomWidth: 0 }}/>)}
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

    }
});