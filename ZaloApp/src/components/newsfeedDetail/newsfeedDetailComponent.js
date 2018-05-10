import React, { Component } from 'react';
import { View, Text, FlatList, Image, Dimensions, ScrollView } from 'react-native';
import { List, ListItem } from "react-native-elements";
import BaseHeaderComponent from '../BaseHeaderComponent';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

export default class NewsFeedDetailComponent extends BaseHeaderComponent {

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

    getTitle() {
        return 'Bình luận';
    }

    renderContent() {
        const item = this.props.navigation.state.params.item;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#fff' }}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
                        <Image style={{ borderRadius: 20, margin: 10, width: 40, height: 40 }} source={{ uri: item.picture.thumbnail }} />
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }} >
                                <Text style={{ color: '#000' }}>{`${item.name.first} ${item.name.last}`}</Text>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }} >
                                <Text style={{ fontSize: 12, color: '#838B92' }} >1 giờ trước</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }} >
                            <Ionicons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='ios-arrow-down' />
                        </View>
                    </View>
                    <Text style={{ flex: 1, margin: 10, color: '#000' }} >Hôm nay tôi buồn</Text>
                    <Image style={{ width: width, height: width }} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
                    <View style={{ marginLeft: 10, marginRight: 10, height: 1, backgroundColor: '#DEDEDE', marginTop: 10 }}></View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <EvilIcons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='heart' />
                        <Text style={{ marginRight: 10, color: '#000' }} >10</Text>

                        <Text style={{ color: '#000' }} >Xem lượt thích</Text>
                    </View>
                    <View style={{ height: 10, backgroundColor: '#F2F4F5' }}></View>
                </View>
            </ScrollView>
        );
    }
}