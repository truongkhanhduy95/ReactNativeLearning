import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS,Platform,  Image, ListView, Keyboard } from 'react-native'
import { Button } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseComponent from '../components/BaseComponent';
import MyStatusBar from '../components/MyStatusBar';
import PhotoGrid from 'react-native-photo-grid';
import Icon from 'react-native-vector-icons/Ionicons';

export default class ShareStatus extends BaseComponent {
    constructor() {
        super();
        this.state = { items: [],
            typedStatus: '' };
      }
      componentDidMount() {
        // Build an array of 60 photos
        let items = Array.apply(null, Array(20)).map((v, i) => {
          return { id: i, src: 'https://reactjs.org/logo-og.png' }
        });
        this.setState({ items });
      }
    renderContent() {
        return (
          <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor:'#F3F3F3',
                height: APPBAR_HEIGHT
            }}>
                
                <Icon.Button
                    onPress = {this.goBack.bind(this)} 
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-arrow-back'/>
                <TouchableOpacity
                      style={{ 
                        flex:1,
                      flexDirection:'row',
                      justifyContent:'center',
                      alignItems:'center'}}
                      onPress={this.goBack.bind(this)}
                  >
                    <Text style={{  color:'#007AFF', fontWeight:'bold'}}>Cong khai</Text>
                </TouchableOpacity>
                <Icon.Button
                    onPress = {this.goBack.bind(this)} 
                    backgroundColor='transparent' size={26} 
                    color='gray' name='md-send'/>

            </View>
            <TextInput
                style={{flex:1,
                        padding: 10,
                        fontSize:21
                      }}
                multiline={true}
                placeholder='Ban dang nghi gi?'
                editable={true}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                onChangeText={(text) => {this.setState(() => {
                    return {
                          typedStatus: text
                    };
                })}} />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor:'#F3F3F3',
                height: APPBAR_HEIGHT
            }}>
                
                <Icon.Button
                    backgroundColor='transparent' size={26} 
                    color='gray' name='md-happy'/>
                <View
                      style={{ 
                        flex:1,
                      flexDirection:'row',
                      justifyContent:'center',
                      alignItems:'center'}}
                      onPress={this.goBack.bind(this)}
                  >
                </View>
                <Icon.Button
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-image-outline'/>
                <Icon.Button
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-film-outline'/>
                <Icon.Button
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-mic-outline'/>
                <Icon.Button
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-attach'/>

            </View>
            <View style={{flex:1}}>
                <PhotoGrid
                    data = { this.state.items }
                    itemsPerRow = { 3 }
                    itemMargin = { 1 }
                    renderHeader = { this.renderHeader }
                    renderItem = { this.renderItem }
                />
            </View>
            
          </View>);
    }
      
    
      renderItem(item, itemSize) {
        return(
          <TouchableOpacity
            key = { item.id }
            style = {{ width: itemSize, height: itemSize }}
            onPress = { () => {
              // Do Something
            }}>
            <Image
              resizeMode = "cover"
              style = {{ flex: 1 }}
              source = {{ uri: item.src }}
            />
          </TouchableOpacity>
        )
      }
    
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: STATUSBAR_HEIGHT
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
    backgroundColor : '#F5F5F5'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    
  },
})
