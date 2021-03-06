import React, { Component } from 'react';
import { View, Text, Image , TouchableOpacity, AsyncStorage} from 'react-native';
import { Container } from 'native-base';
import BaseHeaderComponent from '../BaseHeaderComponent';
import ItemMoreComponent from './itemMoreComponent';
import { NavigationActions } from 'react-navigation';
import HeaderTab from '../headerTab';
class MoreComponent extends BaseHeaderComponent {

  constructor(props) {
    super(props);
    this.state = {
        userData: {}
    };
    this.retrieveItem("USER_DATA").then((user) => {
        this.setState({
            userData: user
        });
            console.log(this.state.userData.fullname)
        }).catch((error) => {
      
        console.log('Promise is rejected with error: ' + error);
        });
         
  }
  
  async retrieveItem(key) {
    try {
      const retrievedItem =  await AsyncStorage.getItem(key);
      
      const item = JSON.parse(retrievedItem);
      return item;
    } catch (error) {
      console.log(error.message);
    }
    return
  }

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
            <Image style={{ borderRadius: 20, margin: 15, width: 40, height: 40 }} source={{ uri: this.state.userData.avatar}} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'flex-end' }} >
                <Text style={{ flex: 1, color: '#000' }}>{this.state.userData.fullname}</Text>
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
