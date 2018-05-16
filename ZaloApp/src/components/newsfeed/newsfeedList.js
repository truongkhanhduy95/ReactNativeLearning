import React, { Component } from 'react';
import { View, Image, Text, FlatList, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from "react-native-elements";
import ItemNewsFeedComponent from './itemNewsFeed';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default class NewsFeedList extends Component {
    constructor(props) {
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
    navigateToProfile(){
        let action = NavigationActions.navigate({ routeName: 'profile' });
        this.props.navigation.dispatch(action);
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
            <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.email}
                    renderItem={({ item }) => (
                        <ItemNewsFeedComponent
                            {...this.props}
                            item={item}
                            username={`${item.name.first} ${item.name.last}`}
                            subtitle={'status'}
                            avatar={item.picture.thumbnail}
                            containerStyle={{ borderBottomWidth: 0 }} />)}
                />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F2F4F5',
    },
    rowLayout: {
        //height:60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 14,

    },
    statusLayout: {

    }
});