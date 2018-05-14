import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native'; 
import { List, ListItem } from "react-native-elements";
import NotificationRow from './notiRow';
import BaseHeaderComponent from '../BaseHeaderComponent';
import { NavigationActions } from 'react-navigation';

export default class NotificationList extends BaseHeaderComponent {

    constructor(props){
        super(props);
        this.isShowSettings = this.isShowSettings.bind(this);
        this.onSettingsClick = this.onSettingsClick.bind(this);
        
        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
          };
    }

    getTitle() {
        return 'Thông báo mới';
    }

    isShowSettings(){
        return true;
    }

    onSettingsClick(){
        let action = NavigationActions.navigate({ routeName: 'settings' });
        this.props.navigation.dispatch(action);
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

    renderContent() {
        return (
        
            <FlatList
                data={this.state.data}
                keyExtractor={item => item.email}
                renderItem={({ item }) => (
                  <NotificationRow
                    username={`${item.name.first} ${item.name.last}`}
                    action={'đã đăng ảnh vào album'}
                    subtitle={'24/05/2018'}
                    avatar={item.picture.thumbnail }
                    photo={item.picture.thumbnail }
                    containerStyle={{ borderBottomWidth: 0 }}
                
                  />
                )}
            />
        );
    }
}