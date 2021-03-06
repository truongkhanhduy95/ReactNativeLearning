import React, { Component } from 'react';
import { View, Image, Text, FlatList,RefreshControl, StyleSheet, Switch, TextInput, TouchableOpacity, AsyncStorage } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from "react-native-elements";
import ItemNewsFeedComponent from './itemNewsFeed';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


import { statusActions } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class NewsFeedList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            userData: {}
        };
       

    }

    loadData =() => {
         this.retrieveItem("USER_DATA").then((user) => {
            //this callback is executed when your Promise is resolved
            this.setState({
                userData: user
            });
            console.log(this.state.userData._id)
            this.props.getStatus(this.state.userData._id);
        }).catch((error) => {
            //this callback is executed when your Promise is rejected
            console.log('Promise is rejected with error: ' + error);
        });
    }


    _onRefresh = () => {
        if(!this.state.refreshing){
            this.loadData();
        }
    }

    async retrieveItem(key) {
        try {
            const retrievedItem = await AsyncStorage.getItem(key);

            const item = JSON.parse(retrievedItem);
            return item;
        } catch (error) {
            console.log(error.message);
        }
        return
    }
    componentDidMount() {
        // this.makeRemoteRequest();
        this.loadData();
    }
    navigateToProfile() {
        let action = NavigationActions.navigate({ routeName: 'profile' });
        this.props.navigation.dispatch(action);
    }
    makeRemoteRequest = () => {

    };

    render() {

        return (
            <FlatList
                data={this.props.data}
                keyExtractor={item => item._id}
                refreshControl={
                    <RefreshControl
                      refreshing={this.state.refreshing}
                      onRefresh={this._onRefresh.bind(this)}
                    />
                  }
                renderItem={({ item }) => (
                    <ItemNewsFeedComponent
                        {...this.props}
                        item={item}
                        username={item.owner.user_name}
                        subtitle={'status'}
                        avatar={item.owner.user_avatar}
                        content={item.content}
                        likes={item.likes}
                        comments={item.comments}
                        time_create={item.time_create}
                        image={item.image}
                        containerStyle={{ borderBottomWidth: 0 }} />)}
            />
        );
    }
}

const mapStateToProps = state => ({
    loading: state.statusList.isLoading,
    error: state.statusList.error,
    data: state.statusList.statuses.reverse(),
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(statusActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedList);

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