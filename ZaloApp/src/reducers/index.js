import { combineReducers } from 'redux'
import Router from '../containers/navigation/navigationConfig';
import { tabBarReducer } from '../containers/tabBar/navigationConfig';
import MessageTab from "../containers/messageTab/navigationConfig"
export default combineReducers({
    NavigationReducer: (state, action) => Router.router.getStateForAction(action, state),
    tabBar: tabBarReducer,
    tabMessage: (state, action) => MessageTab.router.getStateForAction(action, state),
})