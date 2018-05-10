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
        tabBarIcon: ({tintColor,focus}) => (
            <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
                <Icon style={{ width:30,height: 30,
                    // fontSize: 24,
                    color: tintColor
                    }}
                    size={26}
                    name='ios-contacts' />
                <Text style={{flex:1,color: 'black', fontSize: 20}}>{"Thêm"}</Text>
            </View>
        )
    }

    render() {
        const { dispatch, navigationState } = this.props
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