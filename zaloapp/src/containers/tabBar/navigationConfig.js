import { TabNavigator } from 'react-navigation'
import React from 'react';
import Login from '../../scenes/Login';
import Dummy from '../../scenes/dummyScreen';
import MessageTabNavigation from '../messageTab/messageTabNavigation';
import MoreTabNavigation from '../moreTab/moreTabNavigation';

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
    moreNavigation: {
        screen: MoreTabNavigation,
    },
}

const tabbarConfiguration = {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        upperCaseLabel: false,
        showIcon: true,
        showLabel: true,
        style:{
            height: 50
        },
        labelStyle: {
            fontSize: 10,
            marginTop: 0,
        },
        iconStyle: {
            padding:0,
            margin: 0,
        },
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