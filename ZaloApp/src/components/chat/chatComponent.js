import React, {Component } from 'react';
import { View, } from 'react-native';
import { GiftedChat, Composer, Send } from 'react-native-gifted-chat';
import Header from './header';
import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BaseHeaderComponent from '../BaseHeaderComponent';

export default class ChatComponent extends BaseHeaderComponent {
  state = {
    messages: [],
  }

  constructor(props){
      super(props);

      this.renderComposer   = this.renderComposer.bind(this);
  }

  componentWillMount() {
    var avatar = this.props.navigation.state.params.avatar;
    var username = this.props.navigation.state.params.username;
    var message = this.props.navigation.state.params.message;

    this.setState({
      messages: [
        {
          _id: 1,
          text: message,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: username,
            avatar: avatar,
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  renderComposer(props) {
    return (
      <View style = {{flexDirection:'row'}}>
        <Icon.Button  onPress = {this.props.onSettingsClicked} backgroundColor='transparent' size={26} color='black' name='camera'/>
        <Composer
          {...props}
        />
        <MaterialCommunityIcons.Button  onPress = {this.props.onSettingsClicked} backgroundColor='transparent' size={26} color='black' name='emoticon'/>        
        <Icon.Button  onPress = {this.props.onSettingsClicked} backgroundColor='transparent' size={26} color='black' name='plus'/>
        <Send {...props}>
            <View style={{marginRight: 10, marginBottom: 5}}>
                <MaterialCommunityIcons backgroundColor='transparent' size={26} color='#006FFD' name='send'/>
                </View>
            </Send>
      </View>
      
    );
  }

  renderHeader() {
    return (
      <Header
          title={this.props.navigation.state.params.username}
          onBack={()=>this.props.navigation.dispatch({ type: 'Navigation/BACK' })}
        />
    );
  }
  renderContent() {
    return (
        <View style={{flex:1}}>
            <GiftedChat
                style={{flex:1}}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                renderComposer  = {this.renderComposer}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
  }
} 