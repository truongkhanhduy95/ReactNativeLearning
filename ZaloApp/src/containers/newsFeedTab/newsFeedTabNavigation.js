import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'
import NewsFeedTab from './navigationConfig';

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabMore,
    }
}

class NewsFeedTabNavigation extends Component {
    static navigationOptions = {
        title: "Nhật ký",
        tabBarIcon: () => (
            <Icon size={20} name='clock' />
        )
    }

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <NewsFeedTab navigation={
                addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState,
                })
            } />
        )
    }
};

export default connect(mapStateToProps)(NewsFeedTabNavigation)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});