import React, { Component } from 'react';
import { View, StyleSheet, Image, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIO from 'react-native-vector-icons/Ionicons';
import HeaderTab from './headerTab'
import LinearGradient from 'react-native-linear-gradient';
import NewsFeedList from './newsfeedList';
import { NavigationActions } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


export default class NewsFeedComponent extends Component {

    navigateToNoti()
    {
        let action = NavigationActions.navigate({ routeName: 'notification' });
        this.props.navigation.dispatch(action);
    }
    navigateToShareStatus()
    {
        let action = NavigationActions.navigate({ routeName: 'shareStatus' });
        this.props.navigation.dispatch(action);
    }

    render() {
        const title = 'Bạn mới cập nhật';
        const changeStatus = ' "Thay đổi trạng thái?"';
        return (
            <View style={styles.container}>
                <HeaderTab 
                    onNotificationClicked = {()=>this.navigateToNoti()}/>
                <View style={{flex:1,backgroundColor: '#F2F4F5'}}>
                <TouchableOpacity onPress={()=>this.navigateToShareStatus()}>
                    <View style={{ flexDirection: 'row', backgroundColor: '#fff', margin: 15, alignItems: 'center', borderRadius: 5 }}>
                        <Image style={{ borderRadius: 20, margin: 10, width: 40, height: 40 }} source={{ uri: 'https://facebook.github.io/react/logo-og.png' }} />
                        <Text style={{ color: '#838B92' }}>Hôm nay bạn thế nào</Text>
                    </View>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', marginBottom: 15, marginLeft: 15, marginRight: 15, }}>
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center', marginRight: 15, alignItems: 'center', borderRadius: 5 }}>
                            <EvilIcons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='heart' />
                            <Text style={{ color: '#000' }}>Đăng hình</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <View style={{ flexDirection: 'row', backgroundColor: '#fff', alignItems: 'center', borderRadius: 5 }}>
                            <EvilIcons.Button onPress={this.props.onBack} backgroundColor='transparent' size={26} color='#000' name='heart' />
                            <Text style={{ color: '#000' }}>Đăng video</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <NewsFeedList {...this.props} />
            </View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
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
