import { systemConstants } from '../constants';

const initialState = {
    statuses: [],
    isLoading: false,
    error:'',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case systemConstants.GET_INFO_REQUEST:
        return {
            ...state,
            isLoading : true,
        };

    case systemConstants.GET_INFO_SUCCESS:
        return {
            ...state,
            statuses : action.statuses,
            isLoading :false,
        };

    case systemConstants.GET_INFO_FAILED:
        return {
            ...state,
            isLoading :false,
            error: action.error,
        };

    default:
      return state;
  }
}