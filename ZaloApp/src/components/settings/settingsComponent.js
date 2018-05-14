import React, {Component} from 'react';
import { View, StyleSheet,} from 'react-native';
import BaseHeaderComponent from '../BaseHeaderComponent';
import SettingsRow from './settingsRow';

export default class SettingsComponent extends BaseHeaderComponent {
    constructor(props){
        super(props);
       
    }

    getTitle() {
        return 'Cài đặt';
    }

    renderContent(){
        return(
            <View style={{flex:1}}>
                <SettingsRow 
                    title={'Quyền riêng tư'}
                    icon={'lock-outline'}
                    color={'#1db2f7'}/>
                <SettingsRow 
                    title={'Tài khoản và bảo mật'}
                    icon={'shield-outline'}
                    color={'green'}/>

                <View style={{height:15, backgroundColor:'#d9dadb'}}/>
                <SettingsRow 
                    title={'Thông báo'}
                    icon={'bell-outline'}
                    color={'red'}/>
                <SettingsRow 
                    title={'Tin nhắn'}
                    icon={'message-outline'}
                    color={'#1db2f7'}/>
                <SettingsRow 
                    title={'Nhật kí và khoảnh khắc'}
                    icon={'clock'}
                    color={'purple'}/>
                <SettingsRow 
                    title={'Danh bạ'}
                    icon={'account-box-outline'}
                    color={'#e8af04'}/>
                <SettingsRow 
                    title={'Ngôn ngữ và phông chữ'}
                    icon={'format-font'}
                    color={'green'}/>
                <SettingsRow 
                    title={'Thông tin về Zalo'}
                    icon={'information-outline'}
                    color={'gray'}/>

                <View style={{height:15, backgroundColor:'#d9dadb'}}/>
                <SettingsRow 
                    title={'Đăng xuất tài khoản'}
                    icon={'logout'}
                    color={'gray'}/>
                
            </View>
        )
    }
}
