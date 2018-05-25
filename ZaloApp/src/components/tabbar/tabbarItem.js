import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, Text, Dimensions, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';
const WIDTH = Dimensions.get('window').width;

class TabbarItem extends Component {

    static contextTypes = {
        onIconRef: PropTypes.func,
        onTextRef: PropTypes.func
    };


    getStyleAnimatedView() {
        const scrollX = this.props.scrollX;
        const { selectedIndex, indexTab } = this.props;
        const iconCenterTranslateX = scrollX.interpolate({
            inputRange: [WIDTH * (selectedIndex - 1), WIDTH * selectedIndex, WIDTH * (selectedIndex + 1)],
            outputRange: [-(WIDTH / 5 - 26) / 2 + (WIDTH / 5 - 36), 0, -(WIDTH / 5 - 26) / 2 + 10],
            extrapolate: 'clamp',
        });

        const iconRightTranslateX = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab - 1), WIDTH * (indexTab)],
            outputRange: [0, (WIDTH / 5 - 26) / 2 - (WIDTH / 5 - 36)],
            extrapolate: 'clamp',
        });

        const iconLeftTranslateX = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab + 0), WIDTH * (indexTab + 1)],
            outputRange: [(WIDTH / 5 - 26) / 2 - 10, 0],
            extrapolate: 'clamp',
        });

        const iconCenterTranslateY = scrollX.interpolate({
            inputRange: [WIDTH * (selectedIndex - 1), WIDTH * selectedIndex, WIDTH * (selectedIndex + 1)],
            outputRange: [10, 0, 10],
            extrapolate: 'clamp',
        });

        const iconRightTranslateY = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab - 1), WIDTH * (indexTab)],
            outputRange: [0, -10],
            extrapolate: 'clamp',
        });

        const iconLeftTranslateY = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab + 0), WIDTH * (indexTab + 1)],
            outputRange: [-10, 0],
            extrapolate: 'clamp',
        });

        if (selectedIndex > indexTab) {

            return {
                position: 'absolute',
                marginLeft: 10,
                marginTop: 15,
                transform: [
                    {
                        translateX: iconLeftTranslateX
                    },
                    {
                        translateY: iconLeftTranslateY
                    }
                ]
            }

        } else if (selectedIndex < indexTab) {
            return {
                position: 'absolute',
                marginLeft: (WIDTH / 5 - 36),
                marginTop: 15,
                transform: [
                    {
                        translateX: iconRightTranslateX
                    },
                    {
                        translateY: iconRightTranslateY
                    }]
            }
        }
        return {
            position: 'absolute',
            marginLeft: (WIDTH / 5 - 26) / 2,
            marginTop: 5,
            transform: [
                {
                    translateX: iconCenterTranslateX
                },
                {
                    translateY: iconCenterTranslateY
                }]
        }

    }

    getStyleIconView() {
        const scrollX = this.props.scrollX;
        const { selectedIndex, indexTab } = this.props;
        const scaleCenterIcon = scrollX.interpolate({
            inputRange: [WIDTH * (selectedIndex - 1) + WIDTH / 2 - 1, WIDTH * (selectedIndex - 1) + WIDTH / 2, WIDTH * (selectedIndex) + WIDTH / 2 - 1, WIDTH * (selectedIndex) + WIDTH / 2],
            outputRange: [1, 0.8, 0.8, 1],
            extrapolate: 'clamp',
        });

        const scaleLeftIcon = scrollX.interpolate({
            inputRange: [WIDTH * indexTab + WIDTH / 2 - 1, WIDTH * (indexTab) + WIDTH / 2],
            outputRange: [0.8, 1],
            extrapolate: 'clamp',
        });
        const scaleRightIcon = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab - 1) + WIDTH / 2 - 1, WIDTH * (indexTab - 1) + WIDTH / 2],
            outputRange: [1, 0.8],
            extrapolate: 'clamp',
        });

        if (selectedIndex > indexTab) {

            return {
                backgroundColor: 'transparent',
                transform: [
                    {
                        scale: scaleLeftIcon
                    }
                ]
            }
        } else if (selectedIndex < indexTab) {
            return {
                backgroundColor: 'transparent',

                transform: [
                    {
                        scale: scaleRightIcon
                    }
                ]
            }
        }
        return {
            backgroundColor: 'transparent',
            transform: [
                {
                    scale: scaleCenterIcon
                }
            ]
        }
    }

    getStyleTitleView() {
        const scrollX = this.props.scrollX;
        const { selectedIndex, indexTab } = this.props;
        const scaleCenterTitle = scrollX.interpolate({
            inputRange: [WIDTH * (selectedIndex - 1) + WIDTH / 2 - 1, WIDTH * (selectedIndex), WIDTH * (selectedIndex) + WIDTH / 2 + 1],
            outputRange: [0.5, 1, 0.5],
            extrapolate: 'clamp',
        });

        const scaleLeftTitle = scrollX.interpolate({
            inputRange: [WIDTH * indexTab + WIDTH / 2 - 1, WIDTH * (indexTab + 1)],
            outputRange: [0.8, 0.8],
            extrapolate: 'clamp',
        });

        const scaleRightTitle = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab - 1) + WIDTH / 2 - 1, WIDTH * (indexTab - 1) + WIDTH / 2],
            outputRange: [1, 0.8],
            extrapolate: 'clamp',
        });

        const titleCenterOpacity = scrollX.interpolate({
            inputRange: [WIDTH * (selectedIndex - 1), WIDTH * (selectedIndex - 1) + WIDTH / 2, WIDTH * (selectedIndex), WIDTH * (selectedIndex) + WIDTH / 2, WIDTH * (selectedIndex + 1)],
            outputRange: [0, 0.2, 1, 0.2, 0],
            extrapolate: 'clamp',
        });

        const titleRightOpacity = scrollX.interpolate({
            inputRange: [WIDTH * (indexTab - 1), WIDTH * (indexTab - 1) + WIDTH / 2 - 1, WIDTH * (indexTab)],
            outputRange: [0, 0.2, 1],
            extrapolate: 'clamp',
        });

        const titleLeftOpacity = scrollX.interpolate({
            inputRange: [WIDTH * indexTab, WIDTH * indexTab + WIDTH / 2 - 1, WIDTH * (indexTab + 1)],
            outputRange: [1, 0.2, 0],
            extrapolate: 'clamp',
        });

        if (selectedIndex > indexTab) {

            return {
                color: selectedIndex === indexTab ? this.props.activeTintColor : null,
                opacity: titleLeftOpacity,
                transform: [
                    {
                        scale: 0.5
                    }
                ]
            }
        } else if (selectedIndex < indexTab) {
            return {
                color: selectedIndex === indexTab ? this.props.activeTintColor : null,
                opacity: titleRightOpacity,
                transform: [
                    {
                        scale: 0.5
                    }
                ]
            }
        }
        return {
            color: selectedIndex === indexTab ? this.props.activeTintColor : null,
            opacity: titleCenterOpacity,
            transform: [
                {
                    scale: scaleCenterTitle
                }
            ]
        }
    }

    render() {
        const { selectedIndex, indexTab } = this.props;

        return (
            <TouchableWithoutFeedback onPress={() => this.props.onPress(indexTab)}>
                <View style={{ flex: 1, backgroundColor: this.props.style.backgroundColor }}>
                    <Animated.View
                        ref={icon => {
                            this.context.onIconRef(icon);
                        }}
                        style={this.getStyleAnimatedView()}>
                        <Animated.View
                            style={this.getStyleIconView()
                            }>
                            <Icon

                                style={{ color: selectedIndex === indexTab ? this.props.activeTintColor : null }}
                                size={26}
                                name={selectedIndex === indexTab ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'} />
                        </Animated.View>
                    </Animated.View>
                    <View style={{ flex: 1, marginBottom: 10, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Animated.Text

                            ref={text => {
                                this.context.onTextRef(text);
                            }}
                            style={this.getStyleTitleView()
                            }> Tin nhắn </Animated.Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default TabbarItem;