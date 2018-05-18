import React, { Component } from 'react';
import { View, Text, Image , TouchableOpacity} from 'react-native';
import { Container } from 'native-base';
import BaseHeaderComponent from '../BaseHeaderComponent';
import ItemMoreComponent from './itemMoreComponent';
import { NavigationActions } from 'react-navigation';
import HeaderTab from '../headerTab';
class MoreComponent extends BaseHeaderComponent {

  navigateToProfile(){
    let action = NavigationActions.navigate({ routeName: 'profile' });
    this.props.navigation.dispatch(action);
  }

  navigateToSettings(){
    let action = NavigationActions.navigate({ routeName: 'settings' });
    this.props.navigation.dispatch(action);
  }

  renderHeader() {
    return(<HeaderTab 
          onSettingsClicked = {() => this.navigateToSettings()}
        />)
  }

  renderContent() {
  
    return (
      <View style={{ flex: 1, backgroundColor: '#F2F4F5' }}>
          <TouchableOpacity
          onPress={()=>this.navigateToProfile()}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}>
            <Image style={{ borderRadius: 20, margin: 15, width: 40, height: 40 }} source={{ uri: 'https://reactjs.org/logo-og.png' }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }} >
                <Text style={{ flex: 1, color: '#000' }}>Kris Nguyen</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-start' }} >
                <Text style={{ flex: 1, color: '#000' }} >Trang cá nhân của bạn</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
          <View style={{ paddingTop: 20, paddingBottom: 20, backgroundColor: 'transparent' }}></View>
          <ItemMoreComponent title="Tìm quanh đây" icon='map-marker-outline' backgroundColor='#17A6F6' />
          <ItemMoreComponent title="Phòng trò chuyện" icon='message-outline' backgroundColor='#43B8C9' />
          <ItemMoreComponent title="Shop" icon='map-marker-outline' backgroundColor='#AFDA39' />
          <ItemMoreComponent title="Sticker" icon='map-marker-outline' backgroundColor='#F2B14B' />
          <ItemMoreComponent title="Game" icon='map-marker-outline' backgroundColor='#EB6261' />
          <ItemMoreComponent title="Channel" icon='map-marker-outline' backgroundColor='#9F70CE' />
        </View>
    );
  }
}

export default MoreComponent;
