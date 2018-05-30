import { StatusService } from '../service/statusService'
import { statusConstants } from '../constants/statusConstant'
export function postStatusAsync(content) {
    return (dispatch, getState) => {
        var user = getState().login.userData;
        var owner = {
            user_avatar: user.avatar,
            user_name: user.fullname,
            user_id: user._id
        }
        console.log("Post status:" + JSON.stringify(owner));
        StatusService.createStatus(owner, "11/2/2018", content, "sadasd", 2, 3).
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