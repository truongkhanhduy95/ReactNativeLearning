import React, { Component } from 'react';
import {
    StyleSheet, Text, View, Image,
    Platform, TouchableOpacity
} from 'react-native';

export default class TopBar extends Component {

    state = {
      // First tab is active by default
      activeTab: 0
    }
  
    render({ children } = this.props) {
      return (
        <View style={styles.container}>
          <View style={styles.tabsContainer}>
            {children.map(({ props: { title } }, index) =>
              <TouchableOpacity
                style={[
                  styles.tabContainer,
                  // Merge default style with styles.tabContainerActive for active tab
                  index === this.state.activeTab ? styles.tabContainerActive : []
                ]}
                // Change active tab
                onPress={() => this.setState({ activeTab: index }) }
                key={index}
              >
                <Text style={[styles.tabText,
                            index === this.state.activeTab ? [] : {color:'gray'}]}>
                  {title}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          {/* Content */}
          <View style={styles.contentContainer}>
            {children[this.state.activeTab]}
          </View>
        </View>
      );
    }
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      
    },
    tabsContainer: {
      flexDirection: 'row',
    },
    tabContainer: {
      flex: 1,                            
      paddingVertical: 15,                
      borderBottomWidth: 1, 
      borderBottomColor: 'transparent',  
    },
    tabContainerActive: {
      borderBottomColor: 'black',  
    },
    tabText: {
      color: '#000000',
      fontFamily: 'Avenir',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    contentContainer: {
      flex: 1
    }
  });