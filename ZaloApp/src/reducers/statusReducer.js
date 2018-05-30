import { statusConstants } from '../constants/statusConstant';

const initialState = {
    newStatus: {},
    isPostStatusSuccess: false,
    error: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case statusConstants.POST_STATUS_SUCCESS:
            return {
                newStatus: action.newStatus,
                isPostStatusSuccess: true
            }
        case statusConstants.POST_STATUS_FAILED:
            return {
                isPostStatusSuccess: false,
                error: action.error,
            }
        default:
            return state;
    }
}