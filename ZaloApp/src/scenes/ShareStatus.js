import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS,Platform,  Image, ListView, Keyboard  } from 'react-native'
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
            typedStatus: '',
            isSelected:false,
            selectedItems: [],
            isFocus:false
        }
      }
      
      

    componentDidMount() {
        // Build an array of 60 photos
        let items = Array.apply(null, Array(20)).map((v, i) => {
            return { id: i, src: 'https://reactjs.org/logo-og.png' }
        });
        this.setState({ items });
    }

    selectItem(itemId) {
        var item = this.state.items.find((e) => {
            return e.id === itemId
        })
        var items = this.state.selectedItems;
        items.push(item)
        this.setState( {selectedItems} )
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
                        fontSize:21,
                        textAlignVertical:'top'
                      }}
                multiline={true}
                placeholder='Ban dang nghi gi?'
                editable={true}
                returnKeyType='done'
                onSubmitEditing={Keyboard.dismiss}
                onTouchStart={() => {
                    this.setState(() => {
                        return {
                              isFocus: true
                        };
                })}}
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
                    onPress={() => {
                        this.setState(() => {
                            return {
                                  isFocus: true
                            };
                    })}}
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
                    onPress={() => {
                        Keyboard.dismiss()
                        this.setState(() => {
                            return {
                                  isFocus: false
                            };
                    })}}
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-image-outline'/>
                <Icon.Button
                    onPress={() => {
                        Keyboard.dismiss()
                        this.setState(() => {
                            return {
                                  isFocus: false
                            };
                    })}}
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-film-outline'/>
                <Icon.Button
                    onPress={() => {
                        Keyboard.dismiss()
                        this.setState(() => {
                            return {
                                isFocus: false
                            };
                    })}}
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-mic-outline'/>
                <Icon.Button
                    onPress={() => {
                        this.setState(() => {
                            Keyboard.dismiss()
                            return {
                                  isFocus: false
                            };
                    })}}
                    backgroundColor='transparent' size={26} 
                    color='gray' name='ios-attach'/>

            </View>
            <View style={!this.state.isFocus ? {flex:1} : {height:0,width:0}}>
                <PhotoGrid
                    data = { this.state.items }
                    itemsPerRow = { 3 }
                    itemMargin = { 1 }
                    renderItem = { this.renderItem }
                />
            </View>
            
          </View>);
    }
      
    
      renderItem(item, itemSize) {
        return(
          <ImageCell
          itemSize = {itemSize} 
            key = {item.id}
            id = {item.id}
            src= {item.src} />
        )
      }
    
}

class ImageCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected : false,
        }
    }

    onItemClick() {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
          }));
          console.log(this.props.id)
    }

    render() {   
        
        return (  
                
            <TouchableOpacity
                key = {this.props.id}
                style = {{ flexDirection:'column', justifyContent:'flex-end', alignItems:'flex-end', width: this.props.itemSize, height: this.props.itemSize }}
                onPress = {()=>this.onItemClick()}>
                <Image 
                    resizeMode = "cover"
                    style={{ width: this.props.itemSize, height: this.props.itemSize, position: 'absolute', top: 0, left: 0 }}
                    source = {{ uri: this.props.src }}
                    />
                <View style={ !this.state.isSelected?{opacity: 0}:{opacity: 100}}>
                    <Icon.Button
                        backgroundColor='transparent' size={26} 
                        color='white'  name='ios-checkmark-circle-outline'/>
                </View>
            
          </TouchableOpacity>
        );
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
