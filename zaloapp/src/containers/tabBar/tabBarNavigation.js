'use strict'
import React from 'react'
import View from 'react-native'
import { addNavigationHelpers } from 'react-navigation'
import { TabBar } from './navigationConfig'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
 return {
  navigationState: state.tabBar,
  }
}

class TabBarNavigation extends React.Component {

  render(){
    const { dispatch, navigationState } = this.props
    return (
        <TabBar
        navigation={
          addNavigationHelpers({
            dispatch: dispatch,
            state: navigationState,
          })
        }
      />
      
    )
  }
}

export default connect(mapStateToProps)(TabBarNavigation)
