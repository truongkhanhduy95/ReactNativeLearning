import {userConstants} from '../constants';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS,Platform } from 'react-native'

const initialState = {
    userData: {},
    isLoading: false,
    isLogged: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
            ...state,
            isLoading : true,
        };

    case userConstants.LOGIN_SUCCESS:
        return {
            ...state,
            isLoading :false,
            isLogged: true,
        };

    case userConstants.LOGIN_FAILED:
        return {
            ...state,
            isLoading :false,
        };

    default:
      return state;
  }
}