import { contactConstants } from '../constants';

const initialState = {
    contacts: [],
    isLoading: false,
    error:'',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case contactConstants.GET_CONTACT_REQUEST:
        return {
            ...state,
            isLoading : true,
        };

    case contactConstants.GET_CONTACT_SUCCESS:
        return {
            ...state,
            contacts : action.contacts,
            isLoading :false,
        };

    case contactConstants.GET_CONTACT_FAILED:
        return {
            ...state,
            isLoading :false,
            error: action.error,
        };

    default:
      return state;
  }
}