import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import ContactTab from './navigationConfig';
import { connect } from 'react-redux'
import { addNavigationHelpers } from 'react-navigation'

const mapStateToProps = (state) => {
    return {
        navigationState: state.tabContact,
    }
}

class ContactTabNavigation extends Component {
    static navigationOptions = {
        title: "Danh bạ",
        tabBarIcon: ({tintColor,focused}) => (
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
                <Icon style={{ width:25,height: 25,
                    // fontSize: 24,
                    color: tintColor
                    }}
                    size={26}
                    name={focused? 'ios-contacts' :'ios-contacts-outline'} />
            </View>
        )
    }

    render() {
        const { dispatch, navigationState } = this.props;
        return (
            <ContactTab navigation={
                addNavigationHelpers({
                    dispatch: dispatch,
                    state: navigationState,
                })
            } />
        )
    }
};

export default connect(mapStateToProps)(ContactTabNavigation)

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});