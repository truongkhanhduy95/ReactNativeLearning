/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './src/reducers';
import AppNavigation from './src/containers/navigation/appNavigation';

import SplashScreen from 'react-native-splash-screen';

import firebase from 'react-native-firebase';
import { registerAppListener} from './src/notification/FirebaseListener';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends Component {

  async componentDidMount(){
    //SplashScreen.hide()
    
    // Build a channel
    const channel = new firebase.notifications.Android.Channel('test-channel', 'Test Channel', firebase.notifications.Android.Importance.Max)
    .setDescription('My apps test channel');
    // Create the channel
    firebase.notifications().android.createChannel(channel);

    registerAppListener();

    if (!await firebase.messaging().hasPermission()) {
      try {
        await firebase.messaging().requestPermission();
      } catch(e) {
        alert("Failed to grant permission")
      }
    }

    firebase.messaging().getToken().then(token => {
      // alert("TOKEN: "+token);
    });
  }

  componentWillUnmount(){
    this.onTokenRefreshListener();
    this.notificationOpenedListener();
    this.messageListener();
  }

  render() {
    return (
      <Provider store={store} >
        <AppNavigation/>
      </Provider>
    );
  }
}
