import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Router from './navigationConfig';

class AppNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        return(
            <Router 
                navigation={addNavigationHelpers({ dispatch, state: navigationState })} 
            />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        navigationState: state.NavigationReducer // NavigationReducer contains the navigation state of the app
    })
}


export default connect(mapStateToProps)(AppNavigation)