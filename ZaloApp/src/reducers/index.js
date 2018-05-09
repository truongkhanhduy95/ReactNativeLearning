import { combineReducers } from 'redux'
import Router from '../containers/navigation/navigationConfig';
import { tabBarReducer } from '../containers/tabBar/navigationConfig';
import MessageTab from "../containers/messageTab/navigationConfig";
import MoreTab from "../containers/moreTab/navigationConfig";
import LoginReducer from './loginReducer';
import registerReducer from './registerReducer';
import { navigationReducer } from '../containers/navigation/navigationConfig';
import { reducerStackNavigator } from './reducerStackNavigator';

export default combineReducers({
    NavigationReducer: reducerStackNavigator(Router),
    tabBar: tabBarReducer,
    login: LoginReducer,
    register: registerReducer,
    tabMessage: reducerStackNavigator(MessageTab),
    tabMore: reducerStackNavigator(MoreTab),
})