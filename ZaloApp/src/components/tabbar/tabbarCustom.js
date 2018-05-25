import React, { Component } from 'react';
import { View, ViewPagerAndroid, Animated, Platform, ScrollView, Dimensions, Text, StyleSheet } from 'react-native';
import TabbarItem from './tabbarItem';
import Dummy from '../../scenes/dummyScreen';
import MessageTabNavigation from '../../containers/messageTab/messageTabNavigation';
import MoreTabNavigation from '../../containers/moreTab/moreTabNavigation';
import NotificationComponent from '../notification/notificationComponent';
import ContactTabNavigation from '../../containers/contactTab/contactTabNavigation';
import NewsFeedNavigation from '../../containers/newsFeedTab/newsFeedTabNavigation';
import Profile from '../../scenes/Profile'

import PropTypes from 'prop-types';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const WIDTH_ITEM = WIDTH / 5
const HEIGHT_TAB = 56;

class TabBarCustom extends Component {

    routeConfiguration = {
        messageNavigation1: {
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

    tabbarConfiguration = {
        initialRouteName: 'messageNavigation',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: '#006FFD',
            inactiveTintColor: 'gray',
            upperCaseLabel: false,
            showIcon: true,
            showLabel: true,
            style: {
                height: 56,
                backgroundColor: 'white'
            },
            labelStyle: {
                fontSize: 11,
                marginBottom: 4,
            },
            iconStyle: {
                padding: 0,
                margin: 0,
            },
        }
    }

    constructor(props) {
        super(props);
        (this).handleHorizontalScroll = this.handleHorizontalScroll.bind(this);

        // this.state.scrollX.addListener(({ value }) => {
        //     this.handleHorizontalScroll(value);
        // });
        this.onPressTab = this.onPressTab.bind(this);
    }

    state = {
        scrollX: new Animated.Value(0),
        selectedIndex: 0,
        scrollingTo: 0
    }


    static childContextTypes = {
        onIconRef: PropTypes.func,
        onTextRef: PropTypes.func,
    };

    getChildContext() {
        return {
            onIconRef: this._onIconRef,
            onTextRef: this._onTextRef
        };
    }

    _iconsRef = [];
    _textsRef = [];

    _onIconRef = (iconRef) => {
        this._iconsRef.push(iconRef);
        // this._imageOpacitySetters[photo.id] = setOpacity;
    };

    _onTextRef = (textRef) => {
        this._textsRef.push(textRef);
        // this._imageOpacitySetters[photo.id] = setOpacity;
    };


    renderScreenOfTab(screenKey) {
        return (
            <View style={{ width: WIDTH, height: HEIGHT }}>
                {this.getComponentFromName(screenKey)}
            </View>
        )
    }

    renderViewInSCrollView() {
        var renderValue = [];
        for (var key in this.routeConfiguration) {
            let screen1 = this.routeConfiguration[key]['screen'];
            renderValue.push(
                <View key={key} style={{ width: WIDTH, height: HEIGHT }}>
                    {this.getComponentFromName(screen1)}
                </View>);
        }
        return renderValue;
    }

    renderContent = () => {
        var lenght = Object.keys(this.routeConfiguration).lenght;
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: 'transparent', width: WIDTH * lenght, height: HEIGHT
            }}>
                {this.renderViewInSCrollView()}
            </View>
        )
    }

    getComponentFromName(ComponentName) {
        let Component = ComponentName;
        return React.createElement(Component, {});
    }

    renderIOS() {
        var Component1 = 'Profile';
        return (
            <Animated.ScrollView
                // ref="scrollview"
                ref={c => { this.myRef = c }}
                style={[styles.scrollview, this.props.style]}
                horizontal={true}
                pagingEnabled={true}
                bounces={!!this.props.bounces}
                scrollsToTop={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
                    {
                        useNativeDriver: true,
                        listener: event => {
                            this.handleHorizontalScroll(event.nativeEvent.contentOffset.x);
                        },
                    })}

                removeClippedSubviews={true}
                automaticallyAdjustContentInsets={false}
                directionalLockEnabled={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                onLayout={this.adjustCardSize}>
                {this.renderContent()}
            </Animated.ScrollView>
        );
    }

    handleHorizontalScroll(scrollX) {
        var selectedIndex = undefined;
        // console.log("End Drag:" +e.nativeEvent.contentOffset.x );

        if (selectedIndex === undefined) {
            selectedIndex = Math.round(
                scrollX / WIDTH,
            );
        }
        if (selectedIndex < 0 || selectedIndex >= this.props.count) {
            console.log("selectedIndex1:" + selectedIndex);
            return;
        }
        // if (this.state.scrollingTo !== null && this.state.scrollingTo !== selectedIndex) {
        //     console.log("selectedIndex2:" + selectedIndex);
        //     return;
        // }
        if (this.props.selectedIndex !== selectedIndex || this.state.scrollingTo !== null) {
            console.log("selectedIndex:" + selectedIndex);
            this.setState({ selectedIndex, scrollingTo: null });
            const { onSelectedIndexChange } = this.props;
            onSelectedIndexChange && onSelectedIndexChange(selectedIndex);
        }
    }

    onPressTab = (indexTab) => {
        // this.refs.scrollview.scrollTo({
        //     x: indexTab * WIDTH,
        //     animated: true,
        // });
        // console.log("OnPressTab :" + JSON.stringify(this.myRef.onScroll))
        this.myRef.getNode().scrollTo({
            x: indexTab * WIDTH,
            animated: true,
        });
    }

    _backgroundColor = ['#0f0', '#00f', '#0ff', '#f0f', '#ff0'];

    renderTabs = () => {
        return (
            <View style={{ flexDirection: 'row', elevation: 4, height: this.tabbarConfiguration.tabBarOptions.style.height, backgroundColor: this.tabbarConfiguration.tabBarOptions.style.backgroundColor }}>
                {this._backgroundColor.map((color, index) =>

                    <TabbarItem key={color} onPress={this.onPressTab} selectedIndex={this.state.selectedIndex} indexTab={index} scrollX={this.state.scrollX} activeTintColor='#0ff' style={{ width: WIDTH_ITEM, height: HEIGHT_TAB }} />
                )
                }
            </View>
        )
    }

    renderAndroid() {
        return (
            <ViewPagerAndroid
                ref="scrollview"
                style={styles.container}>
                {this.renderContent()}
            </ViewPagerAndroid>
        );
    }

    render() {
        // var ViewPager = (Platform.OS === 'ios') ? this.renderIOS()
        //     : this.renderAndroid();
        return (
            <View style={{ flex: 1, flexDirection: 'column' }} >
                {this.renderIOS()}
                {this.renderTabs()}
            </View>
        );
    }
}

export default TabBarCustom;

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollview: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    card: {
        backgroundColor: 'transparent',
    }
});
