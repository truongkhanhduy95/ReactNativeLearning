import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import HeaderTab from './headerTab'
import LinearGradient from 'react-native-linear-gradient';
import NewsFeedList from './newsfeedList';
import { NavigationActions } from 'react-navigation';


export default class NewsFeedComponent extends Component {

    navigateToNoti()
    {
        let action = NavigationActions.navigate({ routeName: 'notification' });
        this.props.navigation.dispatch(action);
    }

    render() {
        return (
            <View style={styles.container}>
                <HeaderTab 
                    onNotificationClicked = {()=>this.navigateToNoti()}/>
                <NewsFeedList {...this.props} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f4f6f7",
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    suggestLayout: {
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    bestFriendLayout: {
        flexDirection: 'column',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        padding: 12,
    },
    textLayout: {
        flex: 3.6,
        marginLeft: 15,
    }
});
