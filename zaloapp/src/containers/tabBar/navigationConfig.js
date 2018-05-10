import { TabNavigator } from 'react-navigation'
import React from 'react';
import Login from '../../scenes/Login';
import Dummy from '../../scenes/dummyScreen';
import MessageTabNavigation from '../messageTab/messageTabNavigation';
import MoreTabNavigation from '../moreTab/moreTabNavigation';
import NotificationComponent from '../../components/notification/notificationComponent';
import ContactTabNavigation from '../contactTab/contactTabNavigation';
import NewsFeedNavigation from '../newsFeedTab/newsFeedTabNavigation';

const routeConfiguration = {
    messageNavigation: {
        screen: MessageTabNavigation,
    },
    AnimationNavigation: {
        screen: ContactTabNavigation, 
    },
    CustomerNaviagtion: {
        screen: Dummy,
    },
    NewsFeedNavigation: {
        screen: NewsFeedNavigation,
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
            height: 56
        },
        labelStyle: {
            fontSize: 11,
            marginBottom: 4,
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