import React, {Component } from 'react';
import { View, } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Header from './header';

export default class ChatComponent extends Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
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

  render() {
    return (
        <View style={{flex:1}}>
            <Header
              title='Phuong'
              onBack={()=>this.props.navigation.dispatch({ type: 'Navigation/BACK' })}
            />
            <GiftedChat
                style={{flex:1}}
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    )
  }
} 