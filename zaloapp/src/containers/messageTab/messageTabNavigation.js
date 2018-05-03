import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
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
        tabBarIcon: () => (
            <Icon style={styles.icon} name='home' />
        )
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