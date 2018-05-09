import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';
import Router from './navigationConfig';
import { BackHandler } from 'react-native';

class AppNavigation extends Component {
    render() {
        const { navigationState, dispatch } = this.props;
        return (
            <Router
                navigation={addNavigationHelpers({ dispatch, state: navigationState })}
            />
        )
    }

    goBack = () => {
        const { navigationState, dispatch } = this.props;
        if(navigationState.routes[navigationState.index].routeName === 'tabBar') {
            BackHandler.exitApp();
            return true;
        }

        dispatch({ type: 'Navigation/BACK' });
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.goBack);
    }
}

const mapStateToProps = (state) => {
    return ({
        navigationState: state.NavigationReducer // NavigationReducer contains the navigation state of the app
    })
}


export default connect(mapStateToProps)(AppNavigation)