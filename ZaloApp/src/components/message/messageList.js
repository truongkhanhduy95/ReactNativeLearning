import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch,TextInput } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from "react-native-elements";
import MessageRow from '../message/messageRow';

export default class MessageList extends Component {
    constructor(props){
        super(props);     
        this.state = {
            loading: false,
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
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.email}
                    renderItem={({ item }) => (
                    <MessageRow
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