import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
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
        tabBarIcon: ({tintColor,focused}) => (
             <View style={{ flex: 1,justifyContent:'center', alignItems:'center' }}>
            <Icon style={{ width:25,height: 25,
                // fontSize: 24,
                color: tintColor
                }}
                size={26}
                name={focused? 'ios-time' :'ios-time-outline'} />
        </View>
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