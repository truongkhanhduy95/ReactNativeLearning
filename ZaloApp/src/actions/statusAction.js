import { StatusService } from '../service/statusService'
import { statusConstants } from '../constants/statusConstant'

export function postStatusAsync(content) {
   
    return (dispatch, getState) => {
        dispatch(getData());
        var user = getState().login.userData;
        var owner = {
            user_avatar: user.avatar,
            user_name: user.fullname,
            user_id: user._id
        }
        console.log("Post status:" + JSON.stringify(owner));
        StatusService.createStatus(owner, new Date(), content, "https://c1.staticflickr.com/5/4649/39098624815_96c023dae7_o.jpg", 999, 999).
            then(
                result => {
                    if (result.success) {
                        dispatch(postStatusSuccess(result.data));
                    }
                    else {
                        dispatch(postStatusFailure(result.data))
                    }
                },
                err => {
                    dispatch(postStatusFailure(err))
                }
            )
    }
    function getData() { return { type: statusConstants.POST_STATUS_REQUEST } }
    function postStatusSuccess(newStatus) { return { type: statusConstants.POST_STATUS_SUCCESS, newStatus } }
    function postStatusFailure(error) { return { type: statusConstants.POST_STATUS_FAILED, error } }
}