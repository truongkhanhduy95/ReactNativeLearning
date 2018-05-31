import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Switch,TextInput,ActivityIndicator } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { List, ListItem } from "react-native-elements";
import ContactRow from '../contact/contactRow';

import { contactActions } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export class ContactList extends Component {
    constructor(props){
        super(props);        
        this.state = {
            refreshing: false,
          };
    }

    componentDidMount() {
        this.makeRemoteRequest();
      }

    makeRemoteRequest = () => {
        this.props.getContact();
        /*const { page, seed } = this.state;
        const url = `https://zaloapp-service.herokuapp.com/api/contacts`;
        this.setState({ loading: true });
        fetch(url)
          .then(res => res.json())
          .then(res => {
            this.setState({
              data: res,
              error: res.error || null,
              loading: false,
              refreshing: false
            });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });*/
    };

    render() {
        const title ='Bạn mới cập nhật';
        const changeStatus = ' "Thay đổi trạng thái?"';
        if (this.props.loading)
            return (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size="large" color="#25b8f7" />
                </View>
            )
        else
            return (
                <View style={styles.container}>
                    <View style ={styles.rowLayout}>
                        <Text style={{fontWeight:'bold',fontSize:15}}>{title}</Text>
                        <Switch style={{marginRight:10}} value tintColor={'#25b8f7'} onTintColor={'#25b8f7'}  />
                    </View>
                    <View style ={[styles.rowLayout,{paddingTop:0,}]}>
                        <TextInput
                            style={{backgroundColor:'#f4f6f7',width:'100%',height:50,}}
                            fontSize={18}
                            placeholder={changeStatus}
                            paddingLeft={10}
                            //value={this.state.username}
                            placeholderTextColor='gray'
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <FlatList
                        data={this.props.data}
                        keyExtractor={item => item._id}
                        renderItem={({ item }) => (
                        <ContactRow
                            username={`${item.contact_name}`}
                            subtitle={'status'}
                            avatar={item.avatar }
                            onItemClick = {()=>this.props.onItemClick(item.avatar,item.contact_name,"Hello!!")}
                            containerStyle={{ borderBottomWidth: 0 }}/>)}
                        />
                </View>
        );
    }
}
const mapStateToProps = state => ({
    loading: state.contact.isLoading,
    error: state.contact.error,
    data: state.contact.contacts,
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(contactActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    rowLayout:{
        //height:60,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '100%',
        padding:14,

    },
    statusLayout:{

    }
});