import React, { Component } from 'react';
import {
    AppRegistry, FlatList,
    StyleSheet, Text, View, Image, Alert, Platform,
    TouchableHighlight,TouchableOpacity,
    RefreshControl, TextInput,
    SectionList
} from 'react-native';


class FlatListItem extends Component {
  render() {   
      
      return (  
              
          <View style={{
                  flex: 1,
                  flexDirection:'column',   
                  height: 100                 
              }}>            
                  <Text style={{ padding: 10, flex:4}}>{this.props.item.name}</Text>
                  <Text style={{ padding: 10, flex: 1}}>{this.props.item.dialingCode}</Text>
          </View>  
      );
  }
}
export default class PhoneCodeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            countryName: ''
        });
    }
    GetItem (item) {
  
        Alert.alert(item.dialingCode);
        
        }
    selectionList = () => {
        return([
            {
              key:'V',
                  data: [{
                      name: 'Vietnam',
                      shortName:'VN',
                      dialingCode:'+84'
          
                  }]
              },
              {
                  key:'U',
                  data: [{
                      name: 'United Kingdom',
                      shortName:'UK',
                      dialingCode:'+44'
          
                  },
                  {
                      name: 'United States of America',
                      shortName:'US',
                      dialingCode:'+1'
          
                  }]
              },
              {
                  key:'J',
                  data: [{
                          name: 'Japan',
                          shortName: 'JAP',
                          dialingCode: '+81'
                  }]
              }
          ].filter(item => item.data.some(e => e.name.toLowerCase().includes(this.state.countryName.toLowerCase()))));
      }
      goBack = () => {
        this.props.navigation.dispatch({ type: 'Navigation/BACK' });
        return true;
    }
    render() {
        return (
          <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor:'#F3F3F3',
                height: 46
            }}>
                <TouchableOpacity
                      style={{ 
                        flex:1,
                      paddingLeft:10 }}
                      onPress={this.goBack.bind(this)}
                  >
                    <Image
                        style={{ width: 24, height: 24 }}
                        source={require('../../public/ic_back.png')}
                    />
                </TouchableOpacity>
                <TextInput style={{
                   flex: 9,
                    height: 32,
                    margin: 10,
                    borderBottomWidth: 1,
                    borderColor: '#007aff'
                }}
                    keyboardType='default'
                    placeholderTextColor='gray'
                    placeholder='Search'
                    autoCapitalize='none'
                    onChangeText={
                        (text) => {
                            this.setState({ countryName: text });
                        }
                    }
                    clearButtonMode="always"
                />
            </View>
            <SectionList
                sections={this.selectionList()}
                renderItem={({item}) =>
                    <TouchableOpacity onPress={this.GetItem.bind(this, item)}>
                        <View style={{flex:1, flexDirection: 'row'}}>
        
                            <Text 
                            
                            style={{
                                padding: 10,
                                fontSize: 18,
                                height: 44,
                                flex: 4
                            }}>{item.name}</Text>}
                    
                            <Text style={{
                                padding: 10,
                                fontSize: 18,
                                height: 44,
                                flex: 1,
                                textAlign: 'right'
                            }} >{item.dialingCode}</Text>
    
                        </View>
                    </TouchableOpacity>
                }
                renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.key}</Text>}
                keyExtractor={(item, index) => index}
            />
          </View>);
    }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
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