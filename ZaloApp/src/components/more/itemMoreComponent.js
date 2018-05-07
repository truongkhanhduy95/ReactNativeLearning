import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class ItemMoreComponent extends Component {
    render() {
        const { title, icon, backgroundColor, disable } = this.props;

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff' }}>
                <Icon style={{ backgroundColor: backgroundColor,overflow:'hidden', borderRadius: 15, padding: 5, marginTop: 5, marginLeft: 15, marginBottom: 5, marginRight: 15, }} size={20} color='#fff' name={icon} />
                <View style={{ flex: 1, flexDirection: 'column' }} >
                    <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }} >
                        <Text style={{ flex: 1, color: '#000', }}>{title}</Text>
                    </View>
                    <View style={{ height: 1, backgroundColor: '#F2F4F5' }}></View>
                </View >
            </View>
        );
    }
}

export default ItemMoreComponent;
