import { combineReducers } from 'redux'
import Router from '../containers/navigation/navigationConfig';

export default combineReducers({
    NavigationReducer:(state,action) => Router.router.getStateForAction(action,state)})