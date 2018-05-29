import { userConstants }  from '../constants';
import { userService } from '../service';

export const userActions = {
  login, register
}

function login(username, password) {
  return (dispatch) => {
    dispatch(getData(username))

    //dispatch(getDataSuccess(username));
    userService.login(username, password)
      .then(
        result => {
          if(result.success)
          {
            dispatch(getDataSuccess(result.data));
          }
          else{
            dispatch(getDataFailure(result.message))
          }
        },
        err => {
          dispatch(getDataFailure(err))
        }
      );
  };

  function getData(user) { return { type: userConstants.LOGIN_REQUEST, user }}
  function getDataSuccess(user) { return { type: userConstants.LOGIN_SUCCESS, user }}
  function getDataFailure(error) { return { type: userConstants.LOGIN_FAILED, error }}
}

function register(phone) {
  return (dispatch) => {
    dispatch(getData(phone))

    dispatch(getDataSuccess(phone));
  };

  function getData(user) { return { type: userConstants.REGISTER_REQUEST, user }}
  function getDataSuccess(user) { return { type: userConstants.REGISTER_SUCCESS, user }}
  function registerFailure(error) { return { type: userConstants.REGISTER_FAILED, error }}
}