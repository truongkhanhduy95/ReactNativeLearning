import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Container, Icon } from 'native-base'
import MessageTab from './navigationConfig';
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabMessage,
    }
}

class MessageTabNavigation extends Component {
    static navigationOptions = {
        title: "Tin nhắn",
        tabBarIcon: ({tintColor,focused}) => {
            var name = focused ? <Text style={{color: tintColor, fontSize: 12}}>{"Tin nhắn"}</Text> : null;
            return <View style={{ flex: 1,justifyContent:'center', alignItems:'center' }}>
                <Icon style={{ width:25,height: 25,
                    // fontSize: 24,
                    color: tintColor
                    }}
                    size={26}
                    name={focused? 'ios-chatbubbles' :'ios-chatbubbles-outline'} />
            </View>
        },
    }

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <MessageTab navigation={
                addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState,
                })
            } />
        )
    }
};

export default connect(mapStateToProps)(MessageTabNavigation)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});