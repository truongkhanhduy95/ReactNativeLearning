import { combineReducers } from 'redux'
import Router from '../containers/navigation/navigationConfig';
import { tabBarReducer } from '../containers/tabBar/navigationConfig';
import MessageTab from "../containers/messageTab/navigationConfig";
import MoreTab from "../containers/moreTab/navigationConfig";
import LoginReducer from './loginReducer';
import registerReducer from './registerReducer';

export default combineReducers({
    NavigationReducer: (state, action) => Router.router.getStateForAction(action, state),
    tabBar: tabBarReducer,
    login: LoginReducer,
    register: registerReducer,
    tabMessage: (state, action) => MessageTab.router.getStateForAction(action, state),
    tabMore: (state, action) => MoreTab.router.getStateForAction(action, state),
})