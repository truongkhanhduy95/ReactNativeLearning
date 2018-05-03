import React, { Component } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableOpacity, Dimensions,
    TextInput, Button
} from 'react-native';
import Modal from 'react-native-modalbox';

var screen = Dimensions.get('window');
export default class ConfirmDialog extends Component {
    constructor(props) {
        super(props);
    }
    showAddModal = () => {
        this.refs.myModal.open();
    }
    onCloseDialog = () => {

    }
    render() {
        //let confirmMsg = `You will recive an automatic call from Zalo to activate your account. Please confirm your phone number is correct. Continue?`
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 290
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                }}
            >
                <Text style={{
                    fontSize: 24,
                    textAlign: 'center'
                }}>{this.props.title}</Text>
                <View style={{
                    borderBottomColor: 'gray',
                    borderBottomWidth: 0.5, 
                    marginTop: 8,
                    marginBottom: 8,
                    alignSelf:'stretch'
                }}/>
                <Text style={{
                    fontSize: 32,
                    textAlign: 'center',
                    marginTop: 8
                }}>{this.props.phoneNumber}</Text>
                <Text style={{
                    fontSize: 16,
                    color:'gray',
                    textAlign: 'center',
                    marginTop: 16
                }}>{this.props.message}</Text>
                <View style={{ height: 52, flexDirection:'row', alignItems:'flex-end'}}>
                    <View style={{flex:1}}>
                    <TouchableOpacity>
                        <Text style={{
                                    fontSize: 16,
                                    marginTop: 20,
                                    color:'#007BF9',
                                    alignSelf:'center',
                                    fontWeight:'bold'}}>CONFIRM</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{flex:1}}>
                    <TouchableOpacity>
                        <Text style={{
                                    fontSize: 16,
                                    marginTop: 20,
                                    color:'#007BF9',
                                    alignSelf:'center',
                                    fontWeight:'bold'}}>CHANGE</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}