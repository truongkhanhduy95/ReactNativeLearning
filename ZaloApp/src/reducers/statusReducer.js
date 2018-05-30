import { statusConstants } from '../constants/statusConstant';

const initialState = {
    newStatus: {},
    isPostStatusSuccess: false,
    error: '',
    isLoading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case statusConstants.POST_STATUS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case statusConstants.POST_STATUS_SUCCESS:
            return {
                newStatus: action.newStatus,
                isPostStatusSuccess: true,
                isLoading: false
            }
        case statusConstants.POST_STATUS_FAILED:
            return {
                isPostStatusSuccess: false,
                error: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}