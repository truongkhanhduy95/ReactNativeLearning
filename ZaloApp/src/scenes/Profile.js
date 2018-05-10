import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS,Platform,  Image, ListView} from 'react-native'
import { Button, Icon } from 'native-base';
import { BackHandler } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseComponent from '../components/BaseComponent';
import MyStatusBar from '../components/MyStatusBar';
import ImagePicker from 'react-native-image-picker';


export default class Profile extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {
            avatarSource: null,
        };

        this.renderRow = this.renderRow.bind(this);
    
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows([
            {Title:"Title 1", Content:'row 1'},
            {Title:"Title 1", Content:'row 1'},
            {Title:"Title 2", Content:'row 2'},
            {Title:"Holidays 30/4 - 1/5", Content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut venenatis felis. Donec at tempus neque. Morbi vitae sem et nisi porta ornare. Cras at venenatis tellus. Curabitur consequat lacinia lacus, et luctus tortor dignissim nec. Suspendisse scelerisque aliquet vehicula. Integer at ante elit.'},
            {Title:'Birthday 6/5', Content:'Suspendisse potenti. Proin varius risus ac venenatis elementum. Morbi fringilla ante et nibh accumsan, ultricies tempor est porta. Nunc molestie neque a efficitur posuere. Nunc egestas, massa vitae hendrerit feugiat, ligula sem ullamcorper ante, quis ultricies quam turpis ac lectus. Praesent luctus, sapien imperdiet sagittis iaculis, nibh lacus convallis velit, sed placerat enim justo ornare tortor. Phasellus sed dui id odio lobortis imperdiet. Duis sollicitudin tellus sed eros commodo ultrices. Donec auctor nunc id quam suscipit, tempus tincidunt elit placerat. Sed nec odio vel ligula maximus varius. Nullam vulputate augue non gravida lacinia. Nam ac lobortis libero, id sollicitudin nulla.'}]),
        };
      }
      
      selectPhotoTapped() {
        const options = {
          quality: 1.0,
          maxWidth: 500,
          maxHeight: 500,
          storageOptions: {
            skipBackup: true
          }
        };
    
        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);
    
          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };
    
            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    
            this.setState({
              avatarSource: source
            });
          }
        });
      }
            
      renderRow(rowData, section, row) {
        const total = this.state.dataSource.getRowCount();
        const topLineStyle =  styles.topLine;
        const bottomLineStyle = row == total - 1 ? [styles.bottomLine, styles.hiddenLine] : styles.bottomLine;
        
        if(row == 0)
            return (<View style={styles.row}>
                <View style={styles.timeline}>
                    <View style={styles.bigDot} />
                    <View style={styles.dot} />
                    <View style={styles.line}>
                        <View style={topLineStyle} />
                        <View style={bottomLineStyle} />
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.eventDate}>Moments</Text>
                    <View style={{flex:1, flexDirection:'row', marginTop: 8}}>
                    <Button style= {{  marginBottom:8}} 
                    bordered>
                        <Icon name='add' />
                    </Button>
                        <Text style={{ marginLeft:20, marginRight:20 }}>Share wonderful moments in life with your friends</Text>
                    </View>
                </View>
            </View>);
        else
            return (<View style={styles.row}>
                <View style={styles.timeline}>
                    <View style={styles.bigDot} />
                    <View style={styles.dot} />
                    <View style={styles.line}>
                        <View style={topLineStyle} />
                        <View style={bottomLineStyle} />
                    </View>
                </View>
                <View style={styles.content}>
                <Text style={styles.eventDate}>{rowData.Title}</Text>
                <Text style={{ marginTop:8}}>{rowData.Content}</Text>
                <Text></Text>
                </View>
            </View>);
      }
    renderContent() {
        const remote = 'https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg?auto=compress&cs=tinysrgb&h=350';
        const resizeMode = 'cover';
        const text = 'I am some centered text';
        
        return (
            <View
             style={{flex:1}}>
             <MyStatusBar backgroundColor="#006FFD" barStyle="light-content" opacity={0.5}/>
            <View
                style={{
                width: '100%',
                height: '30%',
                backgroundColor: '#eee',
                flexDirection:'column',
                justifyContent:'space-between'
                }}
            >
                <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                }}
                >
                <Image
                    style={{
                    flex: 1,
                    resizeMode,
                    }}
                    source={{ uri: remote }}
                />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent', margin: 15 }}>
                    
                    <TouchableOpacity
                        onPress={()=>this.goBack()}>
                        <Icon name='arrow-back'
                        style={{fontSize: 32,color:'white'}} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Icon name='more'
                        style={{fontSize: 32,color:'white'}} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', margin: 15 }}>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <Image style={{ borderRadius: 30, margin:5, width: 60, height: 60 }} 
                        source={{ uri: 'https://reactjs.org/logo-og.png' }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'column' }}>
                        <Text style={{ flex: 1, textAlignVertical: 'center', fontSize:24, color:'white', margin:10 }}>Andy Ngo</Text>
                    </View>
                </View>
            </View>
            <ListView
                style={{ marginTop:10}}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        </View>);
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    listView: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    row: {
      padding: 2,
      paddingLeft: 12,
    },
    content: {
      marginLeft: 40,
      marginRight:20
    },
    timeline: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      width: 40,
      justifyContent: 'flex-start', // center the dot
      alignItems: 'center',
    },
    line: {
      position: 'absolute',
      top: 0,
      width: 4,
      bottom: 0,
      alignItems: 'center',
    },
    topLine: {
      flex: 1,
      width: 1,
      backgroundColor: 'black',
    },
    bottomLine: {
      flex: 1,
      width: 1,
      backgroundColor: 'black',
    },
    hiddenLine: {
      width: 0,
    },
    bigDot: {
      width: 32,
      height: 32,
      borderRadius: 30,
      backgroundColor: 'black',
    },
    dot: {
        marginTop:8,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'black',
      },
    eventDate: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    },
  });

