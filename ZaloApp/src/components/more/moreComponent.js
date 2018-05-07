import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Container } from 'native-base';
import BaseHeaderComponent from '../BaseHeaderComponent';
import ItemMoreComponent from './itemMoreComponent';

class MoreComponent extends BaseHeaderComponent {

  renderContent() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F4F5' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}>
          <Image style={{ borderRadius: 50, margin: 15, width: 40, height: 40 }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ flex: 1, textAlignVertical: 'center' }}>Title</Text>
            <Text style={{ flex: 1, textAlignVertical: "center" }} >Right</Text>
          </View>
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: 'transparent' }}></View>
        <ItemMoreComponent title="Tìm quanh đây" icon='map-marker-outline' backgroundColor='#17A6F6'/>
        <ItemMoreComponent title="Phòng trò chuyện" icon='message-outline' backgroundColor='#43B8C9'/>
        <ItemMoreComponent title="Shop" icon='map-marker-outline' backgroundColor='#AFDA39'/>
        <ItemMoreComponent title="Sticker" icon='map-marker-outline' backgroundColor='#F2B14B'/>
        <ItemMoreComponent title="Game" icon='map-marker-outline' backgroundColor='#EB6261'/>
        <ItemMoreComponent title="Channel" icon='map-marker-outline' backgroundColor='#9F70CE'/>
        
      </View>
    );
  }
}

export default MoreComponent;
