import React , { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default class NotiRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected : false,
        }
    }

    onItemClick() {
        this.setState(prevState => ({
            isSelected: !prevState.isSelected
          }));
    }

    render() {
        const line = this.state.isSelected ? null:
        (<View
            style={{
            height: 1,
            width: "75%",
            backgroundColor: "#CED0CE",
            marginLeft: "25%"
            }}/>);

        return (
            <View style={[styles.container, !this.state.isSelected?{backgroundColor: '#ccedff'}: {backgroundColor: 'transparent'}]} >
            <TouchableOpacity
                onPress = {()=>this.onItemClick()}>
            <View style={{padding: 12,flexDirection: 'row',alignItems: 'center',}}>
                <View style= {{flex:1.2, justifyContent:'center', alignItems:'center'}}> 
                    <Image source={{ uri: this.props.avatar}} style={styles.avatar} />
                </View>
                <View style={styles.textLayout}>
                    <Text>
                        <Text style={styles.title}>{this.props.username} </Text>
                        <Text style={styles.subtitle}>{this.props.action}</Text>
                    </Text>
                    <Text style={styles.subtitle}
                        textColor='gray'>
                        {this.props.subtitle}
                    </Text>
                </View>
                <Image source={{ uri: this.props.photo}} style={styles.photo} />
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
        flex: 3.6,
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
        flex: 1.2,
        height: '100%',
        width: '100%',
    },
});