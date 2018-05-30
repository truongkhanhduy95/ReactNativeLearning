import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableHighlight } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationActions } from 'react-navigation';
import FastImage from 'react-native-fast-image'

const width = Dimensions.get('window').width;


class ItemNewsFeedComponent extends Component {

    onNavigateToDetail = () => {
        let action = NavigationActions.navigate({
            routeName: 'newsfeedDetail', params: { item: this.props.item }
        });
        this.props.navigation.dispatch(action);
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                    <FastImage style={{ borderRadius: 20, margin: 10, width: 40, height: 40 }} source={{ uri: this.props.avatar }} />
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }} >
                            <Text style={{ color: '#000' }}>{this.props.username}</Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }} >
                            <Text style={{ fontSize: 12, color: '#838B92' }} >{this.props.time_create}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >
                        <Ionicons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='ios-arrow-down' />
                    </View>
                </View>
                <Text style={{ flex: 1, margin: 10, color: '#000' }} >{this.props.content}</Text>
                <FastImage style={{ width: width, height: width }} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
                <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: '#DEDEDE', marginTop: 10 }}></View>
                <TouchableHighlight onPress={this.onNavigateToDetail}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <EvilIcons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='heart' />
                        <Text style={{ marginRight: 10, color: '#000' }} >{this.props.likes}</Text>
                        <MaterialCommunityIcons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='comment-processing-outline' />
                        <Text style={{ color: '#000' }} >{this.props.comments}</Text>
                    </View>
                </TouchableHighlight>
                <View style={{ height: 10, backgroundColor: '#F2F4F5' }}></View>
            </View>

        );
    }
}

export default ItemNewsFeedComponent;
