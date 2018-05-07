import { userConstants } from '../constants';

const initialState = {
    userData: {},
    isLoading: false,
    isLogged: false,
    error:'',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
        return {
            ...state,
            isLoading : true,
        };

    case userConstants.LOGIN_SUCCESS:
        return {
            ...state,
            userData : action.user,
            isLoading :false,
            isLogged: true,
        };

    case userConstants.LOGIN_FAILED:
        return {
            ...state,
            isLoading :false,
            error: action.error,
        };

    default:
      return state;
  }
}