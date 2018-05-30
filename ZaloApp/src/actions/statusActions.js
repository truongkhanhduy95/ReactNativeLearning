import { systemConstants }  from '../constants';
import { statusService } from '../service';

export const statusActions = {
  getStatus
}

function getStatus(key) {
  return (dispatch) => {
    dispatch(getData(key))

    //dispatch(getDataSuccess(username));
    statusService.getStatus(key)
      .then(
        result => {
          if(result.success)
          {
            dispatch(getDataSuccess(result.data));
          }
          else{
            dispatch(getDataFailure(result.data))
          }
        },
        err => {
          dispatch(getDataFailure(err))
        }
      );
  };

  function getData(key) { return { type: systemConstants.GET_INFO_REQUEST, key }}
  function getDataSuccess(statuses) { return { type: systemConstants.GET_INFO_SUCCESS, statuses }}
  function getDataFailure(error) { return { type: systemConstants.GET_INFO_FAILED, error }}
}