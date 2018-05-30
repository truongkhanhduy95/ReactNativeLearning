import { combineReducers } from 'redux'
import Router from '../containers/navigation/navigationConfig';
import { tabBarReducer } from '../containers/tabBar/navigationConfig';
import MessageTab from "../containers/messageTab/navigationConfig";
import MoreTab from "../containers/moreTab/navigationConfig";
import ContactTab from '../containers/contactTab/navigationConfig';
import LoginReducer from './loginReducer';
import registerReducer from './registerReducer';
import { navigationReducer } from '../containers/navigation/navigationConfig';
import { reducerStackNavigator } from './reducerStackNavigator';
import contactReducer from './contactReducer';
import statusReducer from './statusReducer';
import getStatusReducer from './getStatusReducer'
export default combineReducers({
    NavigationReducer: reducerStackNavigator(Router),
    tabBar: tabBarReducer,
    login: LoginReducer,
    register: registerReducer,
    contact: contactReducer,
    status: statusReducer,
    statusList: getStatusReducer,
    tabMessage: reducerStackNavigator(MessageTab),
    tabMore: reducerStackNavigator(MoreTab),
    tabContact: reducerStackNavigator(ContactTab),
})