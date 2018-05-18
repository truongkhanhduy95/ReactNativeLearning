import React , { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import FastImage from 'react-native-fast-image'

export default class MessageRow extends Component {
    constructor(props) {
        super(props);
    }
    onItemClick= () => {
        this.props.onPress();
        //let action = NavigationActions.navigate({ routeName: 'chat' })
        //this.props.navigation.dispatch(action);
    }
    render() {
        const line = <View
        style={{
        height: 1,
        width: "75%",
        backgroundColor: "#CED0CE",
        marginLeft: "25%"
        }}/>;

        return (
            <View style={[styles.container, {backgroundColor: 'transparent'}]} >
            <TouchableOpacity
                onPress = {this.onItemClick}>
            <View style={{padding: 12,flexDirection: 'row',alignItems: 'center',}}>
                <View style= {{flex:1.2, justifyContent:'center', alignItems:'center'}}> 
                    <FastImage source={{ uri: this.props.avatar}} style={styles.avatar} resizeMode='contain'/>
                </View>
                <View style={styles.textLayout}>
                    <Text>
                        <Text style={styles.title}>{this.props.username} </Text>
                    </Text>
                    <Text style={styles.subtitle}
                        textColor='gray'>
                        {this.props.subtitle}
                    </Text>
                </View>
                <View style={{
                            flex: 1.2,
                            flexDirection: 'column',
                            marginLeft: 12,
                            marginRight: 12,
                        }}>
                    <Text style={styles.subtitle}
                        textColor='gray'>10/5/2018</Text>
                    <Text>
                    </Text>
                    
                </View>
            </View>
            </TouchableOpacity>
            {line}
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textLayout: {
        flex: 3.2,
        flexDirection: 'column',
        marginLeft: 12,
        marginRight: 12,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    subtitle: {
        fontSize: 14,
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
    photo: {
        flex: 1.6,
        height: '100%',
        width: '100%',
    },
});