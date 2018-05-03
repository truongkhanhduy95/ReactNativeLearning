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
import { createStore } from 'redux';
import rootReducer from './src/reducers';
import AppNavigation from './src/containers/navigation/appNavigation';

const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <AppNavigation/>
      </Provider>
    );
  }
}
