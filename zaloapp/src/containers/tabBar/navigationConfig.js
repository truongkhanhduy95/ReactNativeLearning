import { TabNavigator } from 'react-navigation'
import React from 'react';
import Login from '../../scenes/Login';
import Dummy from '../../scenes/dummyScreen';
import MessageTabNavigation from '../messageTab/messageTabNavigation';

const routeConfiguration = {
    messageNavigation: {
        screen: MessageTabNavigation,
    },
    AnimationNavigation: {
        screen: Dummy, 
    },
    CustomerNaviagtion: {
        screen: Dummy,
    },
}

const tabbarConfiguration = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        showLabel: true,
        labelStyle: {
            fontSize: 10,
        }
    },
    lazyLoad: true,
}

export const TabBar = TabNavigator(routeConfiguration, tabbarConfiguration)

export const tabBarReducer = (state, action) => {
    if (action.type === 'JUMP_TO_TAB') {
      return { ...state, index: 0 };
    } else {
      return TabBar.router.getStateForAction(action, state);
    }
  };