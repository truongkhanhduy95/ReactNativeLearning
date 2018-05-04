 
 import React, { Component } from 'react';
 import {
     AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
     Platform, TouchableOpacity, Dimensions,
     TextInput, Button, StatusBar
 } from 'react-native';
 
 
 const MyStatusBar = ({backgroundColor, ...props}) => (

    <View style={styles.statusBar}>
      <StatusBar translucent {...props} backgroundColor={backgroundColor} />
    </View>
  );

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
  const styles = StyleSheet.create({
    statusBar: {
        height: STATUSBAR_HEIGHT,
      }
      
  });

  export default MyStatusBar;