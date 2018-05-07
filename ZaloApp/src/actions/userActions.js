import { userConstants }  from '../constants';
import { userService } from '../service';

export const userActions = {
  login,
}

function login(username, password) {
  return (dispatch) => {
    dispatch(getData(username))

    dispatch(getDataSuccess(username));
    // userService.login(username, password)
    //   .then(
    //     user => {
    //       dispatch(getDataSuccess(username));

    //     },
    //     err => {
    //       dispatch(getDataFailure(err))
    //     }
    //   );
  };

  function getData(user) { return { type: userConstants.LOGIN_REQUEST, user }}
  function getDataSuccess(user) { return { type: userConstants.LOGIN_SUCCESS, user }}
  function getDataFailure(error) { return { type: userConstants.LOGIN_FAILED, error }}
}