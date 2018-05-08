import {userConstants} from '../constants';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, AlertIOS,Platform } from 'react-native'

const initialState = {
    userData: {},
    isRegistering: false,
    isRegistered: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
        return {
            ...state,
            isRegistering : true,
        };

    case userConstants.REGISTER_SUCCESS:
        return {
            ...state,
            isRegistering :false,
            isRegistered: true,
            
        };

    case userConstants.REGISTER_FAILED:
        return {
            ...state,
            isRegistering :false,
        };

    default:
      return state;
  }
}