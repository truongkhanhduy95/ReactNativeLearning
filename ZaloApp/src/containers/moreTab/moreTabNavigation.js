import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import MoreTab from './navigationConfig';
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabMore,
    }
}

class MoreTabNavigation extends Component {
    static navigationOptions = {
        title: "Thêm",
        tabBarIcon: () => (
            <Icon size={30} name='ios-more-outline' />
        )
    }

    render() {
        const { dispatch, navigationState } = this.props
        return (
            <MoreTab navigation={
                addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState,
                })
            } />
        )
    }
};

export default connect(mapStateToProps)(MoreTabNavigation)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});